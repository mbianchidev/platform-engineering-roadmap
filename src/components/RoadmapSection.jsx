import TopicCard from './TopicCard'
import './RoadmapSection.css'

const RoadmapSection = ({ section, onTopicClick }) => {
  return (
    <section className="roadmap-section">
      <div className="section-header">
        <h2 className="section-title">{section.title}</h2>
        <p className="section-description">{section.description}</p>
      </div>
      
      <div className="topics-grid">
        {section.topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            onClick={() => onTopicClick(topic)}
          />
        ))}
      </div>
    </section>
  )
}

export default RoadmapSection