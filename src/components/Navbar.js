import React from 'react'
import {BsTextIndentRight} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import {IoIosNotifications} from 'react-icons/io'
import './Navbar.css'
import img from './../assets/tuat.png'
import { Link } from 'react-router-dom';
import useWindowDimensions from './useWindowDimension';




function Navbar() {
  const { height, width } = useWindowDimensions();
  return (
    <div className='navbar'>
    <div className="navbar-items">
      <span className="pagination">
        <span className="page-icon">
            <BsTextIndentRight />
        </span>
        <span className="break-page">
            <span><Link to='/' >Home</Link><BsArrowRight /></span>
            <span><Link to='/productivity' >Productivity</Link><BsArrowRight /></span>
            <span><Link to={width > 768 ? '/create-note' : '/mobile-form'} >Notes</Link></span>
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
