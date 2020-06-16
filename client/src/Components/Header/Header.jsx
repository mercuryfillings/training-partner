import React from 'react'
import './Header.scss'
import DesktopNav from '../DesktopNav/desktopNav'
import { Link } from 'react-router-dom'
import Burger from '../Burger/Burger'

export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link className="logo-link" to='/home'> <span className="logo-thin">Training</span><span className="logo-thick">Partner</span></Link>
      </div>
      {/* <Burger className='burger-display'/> */}
      <DesktopNav className='desktop-display'/>
    </header>
  )
}
