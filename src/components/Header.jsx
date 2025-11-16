import './Header.css'

const Header = ({ data }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">{data.title}</h1>
        <p className="header-description">{data.description}</p>
        <div className="header-note">
          <p>We, platform engineers, just do the work</p>
        </div>
      </div>
    </header>
  )
}

export default Header
