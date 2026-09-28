import './Footer.css'
import { ExternalLinkIcon } from './Icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-note">We, platform engineers, just do the work</p>
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
          <a
            href="https://github.com/mbianchidev/platform-engineering-roadmap/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="contribute-button"
          >
            Contribute a topic<ExternalLinkIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
