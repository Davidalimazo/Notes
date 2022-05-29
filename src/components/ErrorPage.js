import React from 'react'
import './ErrorPage.css'
import Sidebar from './Sidebar'
import Navbar from './Navbar';
import MobileErrorPage from './MobileErrorPage';


function ErrorPage() {
  return (
    <div className='layout'>
    <Navbar />
    <Sidebar />
    <MobileErrorPage/>
    </div>
  )
}

export default ErrorPage
