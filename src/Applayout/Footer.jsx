import React from 'react'

export const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-white pt-4 pb-4 mt-5">
      <div className="container">
        <div className="row">

          {/* Column 1 */}
          <div className="col-6 col-md-3 mb-3">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Press</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-6 col-md-3 mb-3">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms of Use</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-6 col-md-3 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Movies</a></li>
              <li><a href="#" className="text-white text-decoration-none">TV Shows</a></li>
              <li><a href="#" className="text-white text-decoration-none">My List</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-6 col-md-3 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Email</a></li>
              <li><a href="#" className="text-white text-decoration-none">Phone</a></li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}
