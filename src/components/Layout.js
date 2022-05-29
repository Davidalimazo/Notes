import React from 'react'
import Sidebar from './Sidebar';
import Main from './Main';
import './Layout.css'
import Navbar from './Navbar';

function Layout() {
  return (
    <div className='layout'>
        <Navbar />
        <Sidebar/>
        <Main />
    </div>
  )
}

export default Layout
