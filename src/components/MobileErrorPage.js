import React from 'react'
import errorImg from './../assets/error-img.png'
import { Link } from 'react-router-dom';
import './MobileErrorPage.css'

export default function MobileErrorPage() {
  return (
    <div className="error-page">
    <div className="error-img"><img src={errorImg} alt="" /></div>
    <div className="error-text-container">
    <div className="error-text">
    <h1>Whoops</h1>
    <p>Slow or no internet connection. Please check your internect settings</p>
    </div>
    <div className="error-btn">
    <Link to='/' className="btn btn-primary">Refresh Page</Link>
    </div>
    </div>
</div>
  )
}
