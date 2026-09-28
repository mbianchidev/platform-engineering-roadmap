import assert from 'node:assert/strict'
import test from 'node:test'
import { filterRoadmapSections, getTopicHref, getTopicIdFromHash } from '../src/data/roadmapUtils.js'

const sections = [
  {
    id: 'foundations',
    title: 'Foundations',
    topics: [
      {
        id: 'configuration',
        title: 'Configuration',
        description: 'Portable manifests',
        content: 'Validate configuration before deployment.',
        subtopics: [{ name: 'Anchors', description: 'Reuse values safely' }],
        links: [{ title: 'Manifest reference', url: 'https://example.com/manifests' }],
      },
      {
        id: 'networking',
        title: 'Networking',
        description: 'Connect services',
        content: 'Understand packet routing.',
      },
    ],
  },
  {
    id: 'operations',
    title: 'Operations',
    topics: [
      {
        id: 'recovery',
        title: 'Recovery',
        description: 'Practice restoring services',
        content: 'Run a recovery exercise.',
        subtopics: [],
        links: [],
      },
    ],
  },
]

test('empty and whitespace searches preserve the complete roadmap', () => {
  assert.equal(filterRoadmapSections(sections, ''), sections)
  assert.equal(filterRoadmapSections(sections, ' \t '), sections)
})

test('search matches every term regardless of case or surrounding whitespace', () => {
  const result = filterRoadmapSections(sections, '  CONFIGURATION  portable ')
  assert.deepEqual(result.map(section => section.topics.map(topic => topic.id)), [['configuration']])
})

test('search includes key areas, their descriptions, content, and resource titles', () => {
  for (const query of ['anchors', 'reuse safely', 'validate deployment', 'manifest reference']) {
    assert.equal(filterRoadmapSections(sections, query)[0].topics[0].id, 'configuration')
  }
})

test('searching a branch name returns all of its topics', () => {
  assert.deepEqual(filterRoadmapSections(sections, 'foundations'), [sections[0]])
})

test('unmatched searches return no branches and do not mutate source content', () => {
  const original = structuredClone(sections)
  assert.deepEqual(filterRoadmapSections(sections, 'missing topic'), [])
  filterRoadmapSections(sections, 'networking')
  assert.deepEqual(sections, original)
})

test('search handles topics without optional resources or key areas', () => {
  assert.equal(filterRoadmapSections(sections, 'packet')[0].topics[0].id, 'networking')
})

test('topic fragments round-trip reserved characters without losing the topic ID', () => {
  for (const id of ['configuration', 'a topic & a/path', 'a?b=c#d', '\u03b2']) {
    assert.equal(getTopicIdFromHash(getTopicHref(id)), id)
  }
})

test('ordinary page anchors are not treated as topic links', () => {
  assert.equal(getTopicIdFromHash(''), null)
  assert.equal(getTopicIdFromHash('#roadmap'), null)
})

test('empty or malformed topic IDs remain distinguishable from an absent topic', () => {
  assert.equal(getTopicIdFromHash('#topic='), '')
  assert.notEqual(getTopicIdFromHash('#topic=%E0%A4%A'), null)
})
