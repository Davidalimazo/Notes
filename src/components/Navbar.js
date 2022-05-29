import React from 'react'
import {BsTextIndentRight} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import {IoIosNotifications} from 'react-icons/io'
import './Navbar.css'
import img from './../assets/tuat.png'



function Navbar() {
  return (
    <div className='navbar'>
    <div className="navbar-items">
      <span className="pagination">
        <span className="page-icon">
            <BsTextIndentRight />
        </span>
        <span className="break-page">
            <span>Home <BsArrowRight /></span>
            <span>Productivity  <BsArrowRight /></span>
            <span>Notes</span>
        </span>
      </span>
      <span className="profile">
        <div className="notification"><IoIosNotifications /></div>
        </span>
        <div className="img"><img src={img} alt="" /></div>
      </div>
    </div>
  )
}

export default Navbar
