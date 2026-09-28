import { test, expect } from '@playwright/test'

const storageKey = 'platform-engineering-roadmap-theme'

async function expectTheme(page, theme) {
  const root = page.locator('html')
  await expect(root).toHaveAttribute('data-theme', theme)
  await expect(root).toHaveCSS('color-scheme', theme)
  await expect(page.locator('meta[name="color-scheme"]')).toHaveAttribute('content', theme)
  const surface = await root.evaluate(element => getComputedStyle(element).getPropertyValue('--surface').trim())
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', surface)
}

function luminance(color) {
  const channels = color.match(/[\d.]+/g).slice(0, 3).map(Number)
    .map(value => value / 255)
    .map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
}

async function expectReadableColors(page) {
  const pairs = await page.evaluate(() => {
    const scope = document.querySelector('dialog[open]') ?? document
    const background = element => {
      for (let current = element; current; current = current.parentElement) {
        const color = getComputedStyle(current).backgroundColor
        if (color !== 'rgba(0, 0, 0, 0)') return color
      }
      throw new Error('No opaque background found')
    }
    const selectors = [
      '.header-brand', '.brand-subtitle', '.header-links a', '.page-intro h1',
      '.page-intro p', '.search-status', '.section-title', '.section-count',
      '.section-description', '.topic-title', '.topic-description', '.topic-count',
      '.atlas-note', '.detail-title', '.detail-description',
      '.detail-close', '.detail-section', '.topic-details h3', '.topic-details h4',
      '.key-areas-list p', '.resource-list a', '.footer-info p', '.footer-link',
      '.empty-search h2', '.empty-search p',
    ]
    const text = [...scope.querySelectorAll(selectors.join(','))]
      .filter(element => element.getClientRects().length > 0)
      .map(element => ({
        label: element.textContent.trim().slice(0, 70) || element.getAttribute('aria-label'),
        foreground: getComputedStyle(element).color,
        background: background(element),
        minimum: 4.5,
      }))
    const search = scope.querySelector('#topic-search')
    if (search?.getClientRects().length > 0) {
      text.push({
        label: 'Search placeholder',
        foreground: getComputedStyle(search, '::placeholder').color,
        background: background(search),
        minimum: 4.5,
      })
    }
    for (const element of scope.querySelectorAll('.search-field, .contribute-link, .theme-toggle')) {
      if (element.getClientRects().length > 0) {
        text.push({
          label: `${element.className} border`,
          foreground: getComputedStyle(element).borderTopColor,
          background: background(element),
          minimum: 3,
        })
      }
    }
    return text
  })

  expect(pairs.length).toBeGreaterThan(0)
  for (const pair of pairs) {
    const values = [luminance(pair.foreground), luminance(pair.background)].sort((a, b) => b - a)
    const ratio = (values[0] + 0.05) / (values[1] + 0.05)
    expect(ratio, `${pair.label}: ${ratio.toFixed(2)}:1`).toBeGreaterThanOrEqual(pair.minimum)
  }
}

for (const colorScheme of ['light', 'dark']) {
  test(`defaults to dark with a ${colorScheme} system preference`, async ({ page }) => {
    await page.emulateMedia({ colorScheme })
    await page.goto('/')
    await expectTheme(page, 'dark')
    const toggle = page.getByRole('button', { name: 'Switch to light mode', exact: true })
    await expect(toggle).toBeVisible()
    await expect(toggle).toHaveAttribute('title', 'Switch to light mode')
    expect(await toggle.getAttribute('aria-pressed')).toBeNull()
  })
}

for (const theme of ['light', 'dark']) {
  test(`restores saved ${theme} before the application bundle runs`, async ({ page }) => {
    await page.addInitScript(({ key, value }) => localStorage.setItem(key, value), { key: storageKey, value: theme })
    await page.route('**/assets/*.js', route => route.abort())
    await page.goto('/')
    await expectTheme(page, theme)
    await expect(page.locator('#root')).toBeEmpty()
  })

  test(`keeps ${theme} surfaces readable and responsive`, async ({ page }, testInfo) => {
    await page.addInitScript(({ key, value }) => localStorage.setItem(key, value), { key: storageKey, value: theme })
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('/')
    await expectTheme(page, theme)
    await expectReadableColors(page)
    await page.screenshot({ path: testInfo.outputPath(`${theme}-atlas.png`), animations: 'disabled' })

    await page.getByRole('link', { name: 'YAML', exact: true }).click()
    await expect(page.getByRole('dialog', { name: 'YAML', exact: true })).toBeVisible()
    await expectReadableColors(page)
    await page.screenshot({ path: testInfo.outputPath(`${theme}-topic.png`), animations: 'disabled' })

    await page.setViewportSize({ width: 320, height: 700 })
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    await page.getByRole('button', { name: 'Close topic', exact: true }).click()
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    await page.getByRole('searchbox', { name: 'Search the roadmap' }).fill('no-topic-has-this-phrase')
    await expect(page.getByRole('heading', { name: 'No topics found' })).toBeVisible()
    await expectReadableColors(page)
  })
}

test('remembers keyboard-selected themes across dialog navigation and reloads', async ({ page }) => {
  await page.goto('/')
  const toggle = page.getByRole('button', { name: /^Switch to (light|dark) mode$/ })
  await expect(toggle).toHaveAccessibleName('Switch to light mode')
  await toggle.focus()
  await page.keyboard.press('Space')
  await expectTheme(page, 'light')
  await expect(toggle).toHaveAccessibleName('Switch to dark mode')
  await expect(toggle).toHaveAttribute('title', 'Switch to dark mode')
  await expect(toggle).toBeFocused()
  await expect(toggle).toHaveCSS('outline-style', 'solid')
  await page.getByRole('link', { name: 'Multi-tenancy & Isolation', exact: true }).click()
  await expect(page.getByRole('dialog', { name: 'Multi-tenancy & Isolation', exact: true })).toBeVisible()
  await expect(page).toHaveURL(/#topic=multi-tenancy$/)
  expect(await page.evaluate(key => localStorage.getItem(key), storageKey)).toBe('light')

  await page.reload()
  await expectTheme(page, 'light')
  await expect(page.getByRole('dialog', { name: 'Multi-tenancy & Isolation', exact: true })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(toggle).toHaveAccessibleName('Switch to dark mode')
  await toggle.focus()
  await page.keyboard.press('Enter')
  await expectTheme(page, 'dark')
  await expect(toggle).toHaveAccessibleName('Switch to light mode')
  await expect(toggle).toHaveAttribute('title', 'Switch to light mode')
  expect(await page.evaluate(key => localStorage.getItem(key), storageKey)).toBe('dark')
  await page.getByRole('link', { name: 'Multi-tenancy & Isolation', exact: true }).click()
  await page.reload()
  await expectTheme(page, 'dark')
  await expect(page.getByRole('dialog', { name: 'Multi-tenancy & Isolation', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Close topic', exact: true }).click()
  await expect(toggle).toHaveAccessibleName('Switch to light mode')
})

test('uses dark mode for an invalid saved preference', async ({ page }) => {
  await page.addInitScript(key => localStorage.setItem(key, 'sepia'), storageKey)
  await page.goto('/')
  await expectTheme(page, 'dark')
})

test('still toggles when browser storage is unavailable and reports the persistence failure', async ({ page }) => {
  const warnings = []
  page.on('console', message => {
    if (message.type() === 'warning') warnings.push(message.text())
  })
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() { throw new DOMException('Storage blocked for this test', 'SecurityError') },
    })
  })
  await page.goto('/')
  await expectTheme(page, 'dark')
  await page.getByRole('button', { name: 'Switch to light mode', exact: true }).click()
  await expectTheme(page, 'light')
  await expect(page.getByRole('button', { name: 'Switch to dark mode', exact: true })).toBeVisible()
  expect(warnings.some(warning => warning.includes('Could not read saved theme'))).toBe(true)
  expect(warnings.some(warning => warning.includes('Could not save theme preference'))).toBe(true)
})
