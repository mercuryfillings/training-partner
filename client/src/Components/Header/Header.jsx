import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <header classNamne="header">
      <div className='logo'>
        TrainingPartner
      </div>
      <nav className="nav-container">
        <ul>
          <li className="header-link">
            Link One
          </li>
          <li className="header-link">
            Link Two
          </li>
          <li className="header-link">
            Link Three
          </li>
        </ul>
      </nav>
    </header>
  )
}
