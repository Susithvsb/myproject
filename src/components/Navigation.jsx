import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navigation.css'
import logo from '../assets/logo.svg'

function Navigation() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="A.K Catering Services" className="site-logo" />
        </Link>
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={isActive('/')} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className={isActive('/menu')} onClick={closeMenu}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/events" className={isActive('/events')} onClick={closeMenu}>
              Past Events
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about')} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
