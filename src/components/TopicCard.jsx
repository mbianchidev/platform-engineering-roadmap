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
        <span className="topic-header">
          <span id={`topic-label-${topic.id}`} className="topic-title">{topic.title}</span>
          <ChevronIcon className="topic-arrow" />
        </span>
        <span id={`topic-description-${topic.id}`} className="topic-description">{topic.description}</span>
        {areaCount > 0 && (
          <span className="topic-count">{areaCount} key area{areaCount === 1 ? '' : 's'}</span>
        )}
      </a>
    </li>
  )
}

export default TopicCard