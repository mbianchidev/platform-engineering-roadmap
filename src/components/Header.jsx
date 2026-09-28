import { useState } from 'react'
import './Header.css'
import { ExternalLinkIcon, MoonIcon, SunIcon } from './Icons'

const Header = ({ data }) => {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  const themeAction = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    root.dataset.theme = nextTheme
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', nextTheme)
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) {
      themeColor.content = getComputedStyle(root).getPropertyValue('--surface').trim()
    }
    setTheme(nextTheme)

    try {
      localStorage.setItem('platform-engineering-roadmap-theme', nextTheme)
    } catch (error) {
      console.warn('Could not save theme preference; the selected theme applies to this page only.', error)
    }
  }

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
          <button
            type="button"
            className="theme-toggle icon-button"
            aria-label={themeAction}
            title={themeAction}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
