import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="links">
      
      <div className="link"><Link to='/'>Home</Link></div>
      <div className="link"><Link to='/create-note'>Create Note</Link></div>
      <div className="link"><Link to='/error-page'>Error Page</Link></div>
      <div className="link"><Link to='/productivity'>Productivity</Link></div>
      </div>
    </div>
  )
}
