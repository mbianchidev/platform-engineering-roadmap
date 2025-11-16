import { useEffect } from 'react'
import './Modal.css'

const Modal = ({ topic, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{topic.title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <p className="modal-description">{topic.content}</p>
          
          {topic.subtopics && topic.subtopics.length > 0 && (
            <div className="modal-subtopics">
              <h3>Key Areas</h3>
              <div className="subtopics-grid">
                {topic.subtopics.map((subtopic, index) => (
                  <div key={index} className="subtopic-card">
                    <h4 className="subtopic-name">{subtopic.name}</h4>
                    <p className="subtopic-description">{subtopic.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {topic.links && topic.links.length > 0 && (
            <div className="modal-links">
              <h3>Useful Links</h3>
              <div className="links-grid">
                {topic.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-card"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal