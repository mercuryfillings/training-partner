import React from 'react'
import './Header.scss'
import DesktopNav from '../DesktopNav/desktopNav'
import { Link } from 'react-router-dom'
import Burger from '../Burger/Burger'

export default function Header(props) {
  const { currentUser, handleLogout } = props
  
  return (
    <header className='header'>
      <div className='logo'>
        <Link className="logo-link" to='/home'> <span className="logo-thin">Training</span><span className="logo-thick">Partner</span></Link><p className='beta'>BETA</p>
      </div>
      {/* <Burger className='burger-display'/> */}
      {!currentUser ? <nav className='logged-out-nav'><Link to='/login' className='login'>Login</Link><Link to='/signup' className='login'>Signup</Link></nav> : <DesktopNav className='desktop-display' currentUser={currentUser} handleLogout={handleLogout}/>}
    </header>
  )
}
