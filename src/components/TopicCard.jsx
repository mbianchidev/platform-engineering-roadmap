import './TopicCard.css'

const TopicCard = ({ topic, onClick }) => {
  const hasSubtopics = topic.subtopics && topic.subtopics.length > 0

  return (
    <div className="topic-card" onClick={onClick}>
      <div className="topic-header">
        <h3 className="topic-title">{topic.title}</h3>
        <p className="topic-description">{topic.description}</p>
      </div>
      
      {hasSubtopics && (
        <div className="subtopics-preview">
          <div className="subtopics-count">
            {topic.subtopics.length} subtopic{topic.subtopics.length !== 1 ? 's' : ''}
          </div>
          <div className="subtopics-list">
            {topic.subtopics.slice(0, 3).map((subtopic, index) => (
              <div key={index} className="subtopic-item">
                {subtopic.name}
              </div>
            ))}
            {topic.subtopics.length > 3 && (
              <div className="subtopic-item more">
                +{topic.subtopics.length - 3} more
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="card-footer">
        <span className="click-hint">Click to learn more</span>
      </div>
    </div>
  )
}

export default TopicCard