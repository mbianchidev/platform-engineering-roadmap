import { test, expect } from '@playwright/test'
import { roadmapData } from '../src/data/roadmapData.js'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('shows the three roadmap branches without implying a required order', async ({ page }, testInfo) => {
  await expect(page.getByRole('heading', { name: roadmapData.title, exact: true })).toBeVisible()

  for (const section of roadmapData.sections) {
    await expect(page.getByRole('heading', { name: section.title, exact: true })).toBeVisible()
  }

  await expect(page.getByText('Branches group topics, not prerequisites.')).toBeVisible()
  await page.screenshot({ path: testInfo.outputPath('atlas.png'), fullPage: true })
})

test('expands and collapses branches with keyboard-operable controls', async ({ page }) => {
  const branch = page.getByRole('region', { name: 'Individual Skills', exact: true })
  await expect(branch.getByRole('link', { name: 'Cloud Native', exact: true })).toBeHidden()
  await branch.getByRole('button', { name: /Show \d+ more topics/ }).click()
  await expect(branch.getByRole('link', { name: 'Cloud Native', exact: true })).toBeVisible()
  await branch.getByRole('button', { name: 'Collapse Individual Skills', exact: true }).click()
  await expect(branch.getByRole('link', { name: 'YAML', exact: true })).toBeHidden()
  const expand = branch.getByRole('button', { name: 'Expand Individual Skills', exact: true })
  await expand.focus()
  await page.keyboard.press('Enter')
  await expect(branch.getByRole('link', { name: 'YAML', exact: true })).toBeVisible()
})

test('searches key areas in topics outside the initial branch preview', async ({ page }) => {
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
  const detail = page.getByRole('complementary', { name: 'YAML', exact: true })
  await expect(detail.getByRole('heading', { name: 'YAML', exact: true })).toBeFocused()
  await expect(page).toHaveURL(/#topic=yaml$/)
  await expect(detail.getByRole('link', { name: 'YAML Official Spec' })).toHaveAttribute('href', 'https://yaml.org/spec/')
  await expect(detail.getByRole('link', { name: 'YAML Official Spec' })).toHaveAttribute('rel', 'noopener noreferrer')
  await page.screenshot({ path: testInfo.outputPath('topic.png'), fullPage: true })
  await page.keyboard.press('Escape')
  await expect(detail).toBeHidden()
  await expect(topic).toBeFocused()
})

test('supports direct topic links, browser history, and unknown-topic recovery', async ({ page }) => {
  await page.goto('/#topic=cloud-native')
  await expect(page.getByRole('complementary', { name: 'Cloud Native', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Back to roadmap', exact: true }).click()
  await expect(page.getByRole('searchbox', { name: 'Search the roadmap' })).toBeFocused()
  await page.goBack()
  await expect(page.getByRole('complementary', { name: 'Cloud Native', exact: true })).toBeVisible()
  await page.goForward()
  await expect(page.getByRole('complementary', { name: 'Cloud Native', exact: true })).toBeHidden()
  await page.goto('/#topic=not-a-real-topic')
  await expect(page.getByRole('heading', { name: 'Topic not found' })).toBeFocused()
  await page.getByRole('button', { name: 'Back to roadmap', exact: true }).click()
  await expect(page.getByRole('searchbox', { name: 'Search the roadmap' })).toBeVisible()
})

test('keeps search context while opening and closing a matching topic', async ({ page }) => {
  const search = page.getByRole('searchbox', { name: 'Search the roadmap' })
  await search.fill('Karpenter')
  const topic = page.getByRole('link', { name: 'Cloud Native', exact: true })
  await topic.click()
  await page.getByRole('button', { name: 'Back to roadmap', exact: true }).click()
  await expect(search).toHaveValue('Karpenter')
  await expect(topic).toBeFocused()
  await expect(page.getByRole('status')).toContainText('1 topic found')
})

test('restores focus to the topic revisited through browser history', async ({ page }) => {
  await page.getByRole('link', { name: 'YAML', exact: true }).click()
  await page.getByRole('button', { name: 'Back to roadmap', exact: true }).click()
  await page.getByRole('link', { name: 'Programming', exact: true }).click()
  await page.goBack()
  await expect(page.getByRole('searchbox', { name: 'Search the roadmap' })).toBeVisible()
  await page.goBack()
  await expect(page.getByRole('complementary', { name: 'YAML', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Back to roadmap', exact: true }).click()
  await expect(page.getByRole('link', { name: 'YAML', exact: true })).toBeFocused()
})

test('keeps branch controls available and restores visible focus while reading', async ({ page, isMobile }) => {
  test.skip(isMobile, 'The atlas is replaced by the reading view on small screens.')
  const branch = page.getByRole('region', { name: 'Individual Skills', exact: true })
  await branch.getByRole('button', { name: /Show \d+ more topics/ }).click()
  await branch.getByRole('link', { name: 'Cloud Native', exact: true }).click()
  await branch.getByRole('button', { name: 'Show fewer topics', exact: true }).click()
  await expect(branch.getByRole('link', { name: 'Cloud Native', exact: true })).toBeHidden()
  await expect(page.getByRole('complementary', { name: 'Cloud Native', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Back to roadmap', exact: true }).click()
  await expect(page.getByRole('searchbox', { name: 'Search the roadmap' })).toBeFocused()

  await page.getByRole('link', { name: 'YAML', exact: true }).click()
  await page.getByRole('button', { name: 'Collapse Individual Skills', exact: true }).click()
  await page.getByRole('button', { name: 'Back to roadmap', exact: true }).click()
  await expect(page.getByRole('searchbox', { name: 'Search the roadmap' })).toBeFocused()
})

test('preserves every topic, key area, and resource in the reading view', async ({ page }) => {
  for (const topic of roadmapData.sections.flatMap(section => section.topics)) {
    await page.goto(`/#${new URLSearchParams({ topic: topic.id })}`)
    const detail = page.getByRole('complementary', { name: topic.title, exact: true })
    await expect(detail.getByText(topic.content, { exact: true })).toBeVisible()
    await expect(detail.getByRole('heading', { level: 4 })).toHaveCount(topic.subtopics?.length ?? 0)
    const links = await detail.getByRole('link').evaluateAll(elements => elements.map(link => link.getAttribute('href')))
    expect(links).toEqual((topic.links ?? []).map(link => link.url))
  }
})

test('fits narrow screens and long certification titles without horizontal overflow', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  }

  await page.setViewportSize({ width: 320, height: 700 })
  await page.goto('/#topic=cnpa')
  await expect(page.getByRole('complementary')).toBeVisible()
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  await expect(page.getByRole('button', { name: 'Back to roadmap', exact: true })).toBeVisible()
})
