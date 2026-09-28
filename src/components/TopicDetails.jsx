import { ArrowLeftIcon, ExternalLinkIcon } from './Icons'
import './TopicDetails.css'

const TopicDetails = ({ topic, section, headingRef, onClose }) => (
  <aside
    className={`topic-details${section ? ` branch-${section.id}` : ''}`}
    aria-labelledby="topic-title"
    onKeyDown={event => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
    }}
  >
    <div className="detail-toolbar">
      <button type="button" className="detail-back" onClick={onClose}>
        <ArrowLeftIcon />Back to roadmap
      </button>
      {section && <span className="detail-section">{section.title}</span>}
    </div>

    <div className="detail-body">
      <h2 ref={headingRef} id="topic-title" className="detail-title" tabIndex={-1}>
        {topic ? topic.title : 'Topic not found'}
      </h2>

      {topic ? (
        <>
          <p className="detail-description">{topic.content}</p>

          {topic.subtopics?.length > 0 && (
            <section className="detail-areas" aria-labelledby="key-areas-title">
              <h3 id="key-areas-title">Key areas <span>{topic.subtopics.length}</span></h3>
              <ul className="key-areas-list">
                {topic.subtopics.map(subtopic => (
                  <li key={subtopic.name}>
                    <h4>{subtopic.name}</h4>
                    <p>{subtopic.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {topic.links?.length > 0 && (
            <section className="detail-resources" aria-labelledby="resources-title">
              <h3 id="resources-title">Useful links <span>{topic.links.length}</span></h3>
              <ul className="resource-list">
                {topic.links.map(link => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <span>{link.title}</span><ExternalLinkIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      ) : (
        <p className="detail-description">
          This link does not match a topic in the roadmap. Go back to the roadmap to find a topic.
        </p>
      )}
    </div>
  </aside>
)

export default TopicDetails
