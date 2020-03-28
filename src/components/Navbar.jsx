import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <button className="btn btn-menu" onClick={toggleMenu}>
        <i className={isOpen ? `fas fa-times` : `fas fa-bars`}></i>
      </button>
      <ul
        className={isOpen ? `nav-list open` : `nav-list`}
        onClick={toggleMenu}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
