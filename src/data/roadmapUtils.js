export function filterRoadmapSections(sections, query) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)

  if (terms.length === 0) return sections

  return sections.flatMap(section => {
    const topics = section.topics.filter(topic => {
      const text = [
        section.title,
        topic.title,
        topic.description,
        topic.content,
        ...(topic.subtopics ?? []).flatMap(subtopic => [subtopic.name, subtopic.description]),
        ...(topic.links ?? []).map(link => link.title),
      ].join(' ').toLowerCase()

      return terms.every(term => text.includes(term))
    })

    return topics.length > 0 ? [{ ...section, topics }] : []
  })
}

export function getTopicHref(id) {
  return `#${new URLSearchParams({ topic: id })}`
}

export function getTopicIdFromHash(hash) {
  return new URLSearchParams(hash.replace(/^#/, '')).get('topic')
}
