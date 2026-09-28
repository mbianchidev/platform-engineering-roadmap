import { useLayoutEffect, useRef } from 'react'
import { CloseIcon, ExternalLinkIcon } from './Icons'
import './TopicDetails.css'

const TopicDetails = ({ topic, section, headingRef, onClose }) => {
  const dialogRef = useRef(null)

  useLayoutEffect(() => {
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.showModal()
    headingRef.current?.focus({ preventScroll: true })

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [headingRef])

  const dismissFromBackdrop = (event) => {
    if (event.target !== event.currentTarget || event.button !== 0) return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      event.preventDefault()
      onClose()
    }
  }

  const containFocus = (event) => {
    if (event.key !== 'Tab' || event.ctrlKey || event.altKey || event.metaKey) return
    const controls = [...event.currentTarget.querySelectorAll('button, a[href], [tabindex]')]
      .filter(element => element.tabIndex >= 0 && !element.matches(':disabled') && element.getClientRects().length > 0)
    const index = controls.indexOf(document.activeElement)

    // Native modal inertness does not wrap focus before it reaches browser chrome.
    if (index === -1 || (event.shiftKey && index === 0) ||
        (!event.shiftKey && index === controls.length - 1)) {
      event.preventDefault()
      const target = (event.shiftKey ? controls.at(-1) : controls[0]) ?? headingRef.current
      target?.focus()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={`topic-details${section ? ` branch-${section.id}` : ''}`}
      aria-labelledby="topic-title"
      aria-modal="true"
      onCancel={event => {
        event.preventDefault()
        onClose()
      }}
      onPointerDown={dismissFromBackdrop}
      onKeyDown={containFocus}
    >
      <div className="detail-toolbar">
        {section && <span className="detail-section">{section.title}</span>}
        <button type="button" className="detail-close icon-button" onClick={onClose} aria-label="Close topic">
          <CloseIcon />
        </button>
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
            This link does not match a topic in the roadmap. Close this dialog to find a topic.
          </p>
        )}
      </div>
    </dialog>
  )
}

export default TopicDetails
