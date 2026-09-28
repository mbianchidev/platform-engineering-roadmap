import assert from 'node:assert/strict'
import test from 'node:test'
import { roadmapData } from '../src/data/roadmapData.js'
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

test('roadmap topic IDs are unique and safe to use as stable links', () => {
  const ids = roadmapData.sections.flatMap(section => section.topics.map(topic => topic.id))
  assert.equal(new Set(ids).size, ids.length)
  for (const id of ids) assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
})

const approvedTopics = [
  { id: 'finops', section: 'company', title: 'FinOps & Platform Economics', query: 'showback' },
  { id: 'data-recovery', section: 'individual', title: 'Data Services & Recovery', query: 'PITR' },
  { id: 'platform-testing', section: 'individual', title: 'Platform Testing', query: 'contract testing' },
  { id: 'platform-lifecycle', section: 'company', title: 'Platform Lifecycle', query: 'deprecation' },
  { id: 'multi-tenancy', section: 'individual', title: 'Multi-tenancy & Isolation', query: 'noisy neighbors' },
  { id: 'ai-workload-infrastructure', section: 'individual', title: 'AI Workload Infrastructure', query: 'GPU scheduling' },
]

for (const expected of approvedTopics) {
  test(`${expected.title} has learning content, resources, search coverage, and a stable link`, () => {
    const section = roadmapData.sections.find(section => section.id === expected.section)
    const topic = section.topics.find(topic => topic.id === expected.id)
    assert.ok(topic, `Missing approved topic: ${expected.id}`)
    assert.equal(topic.title, expected.title)
    assert.ok(topic.description.trim())
    assert.ok(topic.content.trim())
    assert.ok(topic.subtopics.length > 0)
    assert.ok(topic.links.length > 0)

    for (const area of topic.subtopics) {
      assert.ok(area.name.trim())
      assert.ok(area.description.trim())
    }
    for (const link of topic.links) {
      assert.ok(link.title.trim())
      assert.equal(new URL(link.url).protocol, 'https:')
    }

    const matches = filterRoadmapSections(roadmapData.sections, expected.query).flatMap(section => section.topics)
    assert.ok(matches.some(match => match.id === topic.id), `Search should find ${topic.id}`)
    assert.equal(getTopicIdFromHash(getTopicHref(topic.id)), topic.id)
  })
}

const requiredKeyAreas = [
  {
    id: 'site-reliability',
    title: 'Site Reliability',
    areas: [
      ['Service Level Indicators (SLIs)', 'SLI'],
      ['Service Level Objectives (SLOs)', 'SLO'],
      ['Service Level Agreements (SLAs)', 'SLA'],
      ['Logs', 'structured logs'],
      ['Metrics', 'cardinality'],
      ['Traces', 'distributed traces'],
      ['Incident Command', 'incident command'],
    ],
  },
  {
    id: 'multi-tenancy',
    title: 'Multi-tenancy & Isolation',
    areas: [
      ['Sandboxing & Runtime Isolation', 'sandboxing'],
      ['Kata Containers', 'Kata Containers'],
      ['gVisor', 'gVisor'],
      ['Firecracker MicroVMs', 'Firecracker'],
      ['Hyperlight', 'Hyperlight'],
      ['WebAssembly Sandboxes', 'Wasmtime'],
    ],
  },
]

for (const expected of requiredKeyAreas) {
  test(`${expected.title} includes searchable key areas`, () => {
    const topic = roadmapData.sections.flatMap(section => section.topics)
      .find(topic => topic.id === expected.id)
    assert.ok(topic, `Missing topic: ${expected.id}`)

    for (const [name, query] of expected.areas) {
      const area = topic.subtopics.find(area => area.name === name)
      assert.ok(area, `${expected.title} is missing ${name}`)
      assert.ok(area.description.trim())
      const matches = filterRoadmapSections(roadmapData.sections, query).flatMap(section => section.topics)
      assert.ok(matches.some(match => match.id === topic.id), `Search should find ${expected.title} for ${query}`)
    }
  })
}
