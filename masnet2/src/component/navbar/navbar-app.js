import './navbar-style.css'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className="nav">
            <div className='logo'>MASNET</div>
            <div className='div-main-ul-nav'>
                <ul className="main-ul-nav">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Shop</li></a>
                    <a href="#"><li>My basket</li></a>
                    <a href="#"><li>Profile</li></a>
                    <a href="#"><li>About us</li></a>
                </ul>
            </div>
        </div>
    </div>
  )
}
