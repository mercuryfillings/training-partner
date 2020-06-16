import React from 'react'
import './Header.scss'
import DesktopNav from '../DesktopNav/desktopNav'
import Burger from '../Burger/Burger'

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <span className="logo-thin">Training</span><span className="logo-thick">Partner</span>
      </div>
      {/* <Burger className='burger-display'/> */}
      <DesktopNav className='desktop-display'/>
    </header>
  )
}
