import React from 'react'
import './desktopNav.scss'
import { Link } from 'react-router-dom'

export default function DesktopNav(props) {

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
          <button className="nav-link-button" onClick={() => props.handleLogout()}>Log Out</button>
          {/* <Link className="nav-link" to='/login' onClick={() => localStorage.clear()}>Log Out</Link> */}
        </li>
        </ul>
      </nav>
  )
}
