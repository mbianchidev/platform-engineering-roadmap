import './Header.css'
import { ExternalLinkIcon } from './Icons'

const Header = ({ data }) => {
  return (
    <header className="header">
      <div className="header-content">
        <a className="header-brand" href="#roadmap" aria-label={`${data.title} home`}>
          <img src={`${import.meta.env.BASE_URL}favicon.svg`} width="36" height="36" alt="" />
          <span>Platform Engineering<span className="brand-subtitle">Roadmap</span></span>
        </a>
        <nav className="header-links" aria-label="Project">
          <a href="https://github.com/mbianchidev/platform-engineering-roadmap" target="_blank" rel="noopener noreferrer">
            <span>View source</span><ExternalLinkIcon />
          </a>
          <a className="contribute-link" href="https://github.com/mbianchidev/platform-engineering-roadmap/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
            Contribute
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
