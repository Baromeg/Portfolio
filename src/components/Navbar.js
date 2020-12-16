import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <nav className="navbar is-warning">
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-primary" to="/">Home</Link>
            <Link className="button is-info" to="/About">About</Link>
            <Link className="button is-link" to="/Portfolio">Portfolio</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar