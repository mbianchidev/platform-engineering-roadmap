import './Footer.css'

const Footer = () => {
  const handleContributeClick = () => {
    window.open('https://github.com/mbianchidev/platform-engineering-roadmap/blob/main/CONTRIBUTING.md', '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>
            Made with platform engineering knowledge by{' '}
            <a 
              href="https://www.linkedin.com/in/mbianchidev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Matteo
            </a>
          </p>
        </div>
        <div className="footer-actions">
          <button 
            onClick={handleContributeClick}
            className="contribute-button"
          >
            Contribute a topic
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
