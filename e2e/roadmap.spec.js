import { test, expect } from '@playwright/test'
import { roadmapData } from '../src/data/roadmapData.js'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('shows every topic without show-more controls or a required order', async ({ page }, testInfo) => {
  await expect(page.getByRole('heading', { name: roadmapData.title, exact: true })).toBeVisible()

  for (const section of roadmapData.sections) {
    await expect(page.getByRole('heading', { name: section.title, exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: section.topics[0].title, level: 3, exact: true })).toBeVisible()
    const branch = page.getByRole('region', { name: section.title, exact: true })
    await expect(branch.getByRole('link')).toHaveCount(section.topics.length)
    for (const topic of section.topics) {
      await expect(branch.getByRole('link', { name: topic.title, exact: true })).toBeVisible()
    }
  }

  await expect(page.getByRole('button', { name: /Show (?:\d+ more|fewer) topics/ })).toHaveCount(0)
  await expect(page.getByText('Branches group topics, not prerequisites.')).toBeVisible()
  await page.screenshot({ path: testInfo.outputPath('atlas.png'), animations: 'disabled' })
})

test('expands and collapses branches with keyboard-operable controls', async ({ page }) => {
  const branch = page.getByRole('region', { name: 'Individual Skills', exact: true })
  await expect(branch.getByRole('link', { name: 'Cloud Native', exact: true })).toBeVisible()
  await branch.getByRole('button', { name: 'Collapse Individual Skills', exact: true }).click()
  await expect(branch.getByRole('link', { name: 'YAML', exact: true })).toBeHidden()
  const expand = branch.getByRole('button', { name: 'Expand Individual Skills', exact: true })
  await expand.focus()
  await page.keyboard.press('Enter')
  await expect(branch.getByRole('link', { name: 'YAML', exact: true })).toBeVisible()
  await expect(branch.getByRole('link', { name: 'Cloud Native', exact: true })).toBeVisible()
})

test('searches key areas across the fully expanded roadmap', async ({ page }) => {
  const search = page.getByRole('searchbox', { name: 'Search the roadmap' })
  await search.fill('  KARPENTER  ')
  await expect(page.getByRole('link', { name: 'Cloud Native', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: 'YAML', exact: true })).toBeHidden()
  await expect(page.getByRole('status')).toContainText('1 topic found')
})

test('recovers from an empty search and restores collapsed branches', async ({ page }) => {
  await page.getByRole('button', { name: 'Collapse Individual Skills', exact: true }).click()
  const search = page.getByRole('searchbox', { name: 'Search the roadmap' })
  await search.fill('no-topic-has-this-phrase')
  await expect(page.getByRole('heading', { name: 'No topics found' })).toBeVisible()
  await page.getByRole('button', { name: 'Clear search', exact: true }).click()
  await expect(search).toHaveValue('')
  await expect(search).toBeFocused()
  await expect(page.getByRole('link', { name: 'YAML', exact: true })).toBeVisible()
})

test('opens a topic with the keyboard and restores focus when dismissed', async ({ page }, testInfo) => {
  const topic = page.getByRole('link', { name: 'YAML', exact: true })
  await topic.focus()
  await page.keyboard.press('Enter')
  const detail = page.getByRole('dialog', { name: 'YAML', exact: true })
  await expect(detail.getByRole('heading', { name: 'YAML', exact: true })).toBeFocused()
  await expect(detail).toHaveAttribute('aria-modal', 'true')
  expect(await detail.evaluate(element => element.matches(':modal'))).toBe(true)
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden')
  expect(await detail.evaluate(element => getComputedStyle(element, '::backdrop').backdropFilter)).toBe('blur(8px)')
  await expect(page).toHaveURL(/#topic=yaml$/)
  await expect(detail.getByRole('link', { name: 'YAML Official Spec' })).toHaveAttribute('href', 'https://yaml.org/spec/')
  await expect(detail.getByRole('link', { name: 'YAML Official Spec' })).toHaveAttribute('rel', 'noopener noreferrer')
  await page.screenshot({ path: testInfo.outputPath('topic.png'), animations: 'disabled' })
  await page.keyboard.press('Escape')
  await expect(detail).toBeHidden()
  await expect(topic).toBeFocused()
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
  expect(await page.evaluate(() => location.hash)).toBe('')
})

test('supports direct topic links, browser history, and unknown-topic recovery', async ({ page }) => {
  await page.goto('/#topic=cloud-native')
  await expect(page.getByRole('dialog', { name: 'Cloud Native', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Close topic', exact: true }).click()
  await expect(page.getByRole('link', { name: 'Cloud Native', exact: true })).toBeFocused()
  await page.goBack()
  await expect(page.getByRole('dialog', { name: 'Cloud Native', exact: true })).toBeVisible()
  await page.goForward()
  await expect(page.getByRole('dialog', { name: 'Cloud Native', exact: true })).toBeHidden()
  await page.goto('/#topic=not-a-real-topic')
  await expect(page.getByRole('heading', { name: 'Topic not found' })).toBeFocused()
  const close = page.getByRole('button', { name: 'Close topic', exact: true })
  await page.keyboard.press('Tab')
  await expect(close).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(close).toBeFocused()
  await close.click()
  await expect(page.getByRole('searchbox', { name: 'Search the roadmap' })).toBeFocused()
})

test('keeps search context while opening and closing a matching topic', async ({ page }) => {
  const search = page.getByRole('searchbox', { name: 'Search the roadmap' })
  await search.fill('Karpenter')
  const topic = page.getByRole('link', { name: 'Cloud Native', exact: true })
  await topic.click()
  await page.getByRole('button', { name: 'Close topic', exact: true }).click()
  await expect(search).toHaveValue('Karpenter')
  await expect(topic).toBeFocused()
  await expect(page.getByRole('status')).toContainText('1 topic found')
})

test('restores focus to the topic revisited through browser history', async ({ page }) => {
  await page.getByRole('link', { name: 'YAML', exact: true }).click()
  await page.getByRole('button', { name: 'Close topic', exact: true }).click()
  await page.getByRole('link', { name: 'Programming', exact: true }).click()
  await page.goBack()
  await expect(page.getByRole('searchbox', { name: 'Search the roadmap' })).toBeVisible()
  await page.goBack()
  await expect(page.getByRole('dialog', { name: 'YAML', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Close topic', exact: true }).click()
  await expect(page.getByRole('link', { name: 'YAML', exact: true })).toBeFocused()
})

test('centers the dialog, contains focus, and restores map position after backdrop dismissal', async ({ page }) => {
  const topic = page.getByRole('link', { name: 'Cloud Native', exact: true })
  await topic.scrollIntoViewIfNeeded()
  const scrollPosition = await page.evaluate(() => window.scrollY)
  await topic.click()
  const dialog = page.getByRole('dialog', { name: 'Cloud Native', exact: true })
  await expect(dialog).toBeVisible()
  await expect.poll(() => dialog.evaluate(element => {
    const bounds = element.getBoundingClientRect()
    return Math.max(
      Math.abs(bounds.left + bounds.width / 2 - window.innerWidth / 2),
      Math.abs(bounds.top + bounds.height / 2 - window.innerHeight / 2),
    )
  })).toBeLessThanOrEqual(10)

  await dialog.getByRole('button', { name: 'Close topic', exact: true }).focus()
  await page.keyboard.press('Shift+Tab')
  await expect(dialog.getByRole('link').last()).toBeFocused()
  for (let index = 0; index < 5; index++) {
    await page.keyboard.press('Tab')
    expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true)
  }
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(scrollPosition)
  await page.mouse.click(4, 4)
  await expect(dialog).toBeHidden()
  await expect(topic).toBeFocused()
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(scrollPosition)
})

for (const section of roadmapData.sections) {
  test(`preserves every topic, key area, and resource in ${section.title} dialogs`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    for (const topic of section.topics) {
      await page.goto(`/#${new URLSearchParams({ topic: topic.id })}`)
      const detail = page.getByRole('dialog', { name: topic.title, exact: true })
      await expect(detail.getByText(topic.content, { exact: true })).toBeVisible()
      await expect(detail.getByRole('heading', { level: 4 })).toHaveCount(topic.subtopics?.length ?? 0)
      const links = await detail.getByRole('link').evaluateAll(elements => elements.map(link => link.getAttribute('href')))
      expect(links).toEqual((topic.links ?? []).map(link => link.url))
    }
  })
}

test('fits narrow screens and long certification titles without horizontal overflow', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  }

  await page.setViewportSize({ width: 320, height: 700 })
  await page.goto('/#topic=cnpa')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  expect(await dialog.evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true)
  await dialog.evaluate(element => element.scrollTo(0, element.scrollHeight))
  await expect(dialog.getByRole('button', { name: 'Close topic', exact: true })).toBeInViewport()
})
