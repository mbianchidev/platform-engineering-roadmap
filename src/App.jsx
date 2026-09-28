import { useEffect, useRef, useState } from 'react'
import './App.css'
import { roadmapData } from './data/roadmapData'
import { filterRoadmapSections, getTopicHref, getTopicIdFromHash } from './data/roadmapUtils'
import Header from './components/Header'
import RoadmapSection from './components/RoadmapSection'
import TopicDetails from './components/TopicDetails'
import Footer from './components/Footer'
import { BranchIcon, CloseIcon, SearchIcon } from './components/Icons'

const allTopics = roadmapData.sections.flatMap(section => section.topics)

function toggleMembership(items, id) {
  const next = new Set(items)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  return next
}

function App() {
  const [query, setQuery] = useState('')
  const [collapsedSections, setCollapsedSections] = useState(new Set())
  const [selectedTopicId, setSelectedTopicId] = useState(() => getTopicIdFromHash(window.location.hash))
  const searchRef = useRef(null)
  const detailHeadingRef = useRef(null)
  const previousTopicId = useRef(selectedTopicId)

  const hasSelection = selectedTopicId !== null
  const isSearching = query.trim().length > 0
  const sections = filterRoadmapSections(roadmapData.sections, query)
  const resultCount = sections.reduce((count, section) => count + section.topics.length, 0)
  const selectedTopic = allTopics.find(topic => topic.id === selectedTopicId)
  const selectedSection = roadmapData.sections.find(section => section.topics.includes(selectedTopic))

  useEffect(() => {
    const syncLocation = () => setSelectedTopicId(getTopicIdFromHash(window.location.hash))
    window.addEventListener('hashchange', syncLocation)
    window.addEventListener('popstate', syncLocation)

    return () => {
      window.removeEventListener('hashchange', syncLocation)
      window.removeEventListener('popstate', syncLocation)
    }
  }, [])

  useEffect(() => {
    if (selectedTopicId === null && previousTopicId.current !== null) {
      const trigger = document.getElementById(`topic-link-${previousTopicId.current}`)
      const target = trigger && trigger.getClientRects().length > 0 ? trigger : searchRef.current
      target?.focus()
    }
    previousTopicId.current = selectedTopicId
  }, [selectedTopicId])

  const openTopic = (topic, event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()

    if (selectedTopicId === topic.id) {
      detailHeadingRef.current?.focus()
      return
    }

    window.history.pushState(null, '', getTopicHref(topic.id))
    setSelectedTopicId(topic.id)
  }

  const closeTopic = () => {
    window.history.pushState(null, '', window.location.pathname + window.location.search)
    setSelectedTopicId(null)
  }

  const updateQuery = (value) => {
    setQuery(value)
    setCollapsedSections(new Set())
  }

  const clearSearch = () => {
    updateQuery('')
    searchRef.current?.focus()
  }

  return (
    <div className="app">
      <a className="skip-link" href="#roadmap">Skip to roadmap</a>
      <Header data={roadmapData} />

      <main id="roadmap" className="main-content" tabIndex={-1}>
        <div className="page-intro">
          <div>
            <h1>{roadmapData.title}</h1>
            <p>{roadmapData.description}</p>
          </div>
          <p className="roadmap-overview">{allTopics.length} topics across {roadmapData.sections.length} branches</p>
        </div>

        <div className="roadmap-workspace">
          <div className="atlas-pane">
            <form className="roadmap-search" role="search" onSubmit={event => event.preventDefault()}>
              <label className="visually-hidden" htmlFor="topic-search">Search the roadmap</label>
              <div className="search-field">
                <SearchIcon />
                <input
                  ref={searchRef}
                  id="topic-search"
                  type="search"
                  value={query}
                  onChange={event => updateQuery(event.target.value)}
                  placeholder="Find a topic, a tool, a key area..."
                  aria-describedby="search-status"
                  autoComplete="off"
                />
                {query && (
                  <button type="button" className="icon-button" onClick={clearSearch} aria-label="Clear search">
                    <CloseIcon />
                  </button>
                )}
              </div>
              <p id="search-status" className="search-status" role="status" aria-atomic="true">
                {isSearching
                  ? `${resultCount} topic${resultCount === 1 ? '' : 's'} found`
                  : 'Choose a branch. Explore at your own pace.'}
              </p>
            </form>

            {sections.length > 0 ? (
              <div className="atlas">
                <div className="atlas-origin">
                  <span><BranchIcon />The roadmap</span>
                </div>
                <div className="roadmap-sections" style={{ '--branch-count': sections.length }}>
                  {sections.map(section => (
                    <RoadmapSection
                      key={section.id}
                      section={section}
                      selectedTopicId={selectedTopicId}
                      onTopicClick={openTopic}
                      isCollapsed={collapsedSections.has(section.id)}
                      onToggleCollapse={() => setCollapsedSections(current => toggleMembership(current, section.id))}
                    />
                  ))}
                </div>
                <p className="atlas-note">Branches group topics, not prerequisites.</p>
              </div>
            ) : (
              <div className="empty-search">
                <SearchIcon />
                <h2>No topics found</h2>
                <p>Try a broader term, such as Kubernetes, testing, or culture.</p>
                <button type="button" className="text-button" onClick={clearSearch}>Show all topics</button>
              </div>
            )}
          </div>

          {hasSelection && (
            <TopicDetails
              key={selectedTopicId}
              topic={selectedTopic}
              section={selectedSection}
              headingRef={detailHeadingRef}
              onClose={closeTopic}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
