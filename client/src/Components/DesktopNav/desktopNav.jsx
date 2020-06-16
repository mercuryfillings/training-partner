import React from 'react'
import './desktopNav.scss'
import { Link } from 'react-router-dom'

export default function DesktopNav() {

  return (
      <nav className="nav-container">
      <ul className="nav-links">
        <li className="nav-li">
          <Link className="nav-link" to='/home'>Home</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to='/techniques'>Your Techniques</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to='/trainings'>Training History</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link" to='/login' onClick={() => localStorage.clear()}>Log Out</Link>
        </li>
        </ul>
      </nav>
  )
}
