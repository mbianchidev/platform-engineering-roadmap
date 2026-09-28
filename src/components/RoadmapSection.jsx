import TopicCard from './TopicCard'
import { ChevronIcon } from './Icons'
import './RoadmapSection.css'

const RoadmapSection = ({
  section,
  selectedTopicId,
  onTopicClick,
  isCollapsed,
  onToggleCollapse,
}) => {
  return (
    <section className={`roadmap-section branch-${section.id}`} aria-labelledby={`section-${section.id}`}>
      <div className="section-header">
        <div className="section-heading">
          <div>
            <h2 id={`section-${section.id}`} className="section-title">{section.title}</h2>
            <p className="section-count">{section.topics.length} topic{section.topics.length === 1 ? '' : 's'}</p>
          </div>
          <button
            type="button"
            className="section-toggle icon-button"
            onClick={onToggleCollapse}
            aria-label={`${isCollapsed ? 'Expand' : 'Collapse'} ${section.title}`}
            aria-expanded={!isCollapsed}
            aria-controls={`branch-${section.id}`}
          >
            <ChevronIcon className={isCollapsed ? 'chevron-collapsed' : ''} />
          </button>
        </div>
        <p className="section-description">{section.description}</p>
      </div>

      <div id={`branch-${section.id}`} hidden={isCollapsed}>
        <ul className="topics-list" id={`topics-${section.id}`}>
          {section.topics.map(topic => (
            <TopicCard
              key={topic.id}
              topic={topic}
              selected={topic.id === selectedTopicId}
              onClick={event => onTopicClick(topic, event)}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RoadmapSection