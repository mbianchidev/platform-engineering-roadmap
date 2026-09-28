import './TopicCard.css'
import { getTopicHref } from '../data/roadmapUtils'
import { ChevronIcon } from './Icons'

const TopicCard = ({ topic, selected, onClick }) => {
  const areaCount = topic.subtopics?.length ?? 0

  return (
    <li className="topic-item">
      <a
        id={`topic-link-${topic.id}`}
        className="topic-card"
        href={getTopicHref(topic.id)}
        onClick={onClick}
        aria-labelledby={`topic-label-${topic.id}`}
        aria-describedby={`topic-description-${topic.id}`}
        aria-current={selected ? 'true' : undefined}
      >
        <div className="topic-header">
          <h3 id={`topic-label-${topic.id}`} className="topic-title">{topic.title}</h3>
          <ChevronIcon className="topic-arrow" />
        </div>
        <span id={`topic-description-${topic.id}`} className="topic-description">{topic.description}</span>
        {areaCount > 0 && (
          <span className="topic-count">{areaCount} key area{areaCount === 1 ? '' : 's'}</span>
        )}
      </a>
    </li>
  )
}

export default TopicCard