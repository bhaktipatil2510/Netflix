import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <header className="bg-dark sticky-top py-2">
      <div className="container d-flex justify-content-between align-item-center">
        
        {/* Logo */}
        <div>
          <span style={{color: "#e50914", fontWeight:"700", fontSize: "1.5rem"}}>
            Netflix
          </span>
        </div>

        {/* Navigation */}
        <nav className="d-none pt-2 d-md-flex">

          <NavLink to="/" className="text-white me-3 text-decoration-none fw-medium">
          Home
          </NavLink>

          <NavLink to="/contact" className="text-white me-3 text-decoration-none fw-medium">
          Contact
          </NavLink>

          {/* <NavLink to="/movies" className="text-white me-3 text-decoration-none fw-medium">
          Movies
          </NavLink> */}

          <NavLink to="/blog" className="text-white me-3 text-decoration-none fw-medium">
          Blog
          </NavLink>

          {/* <NavLink to="/mylist" className="text-white text-decoration-none fw-medium">
          My List
          </NavLink> */}
        </nav>

        {/* Right Buttoons */}
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-light">Sign In</button>
        </div>
      </div>
    </header>
    </>
  )
}

