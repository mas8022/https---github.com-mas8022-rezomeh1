import './welcome-page-style.css'
import React from 'react'

export default function WelcomePage() {
  return (
    <div>
        <div className="welcome-page">
            <h3>We Change Everything WordPress</h3>
            <h4>This is the only WordPress theme you will ever want to use.</h4>
            <div className="flex-btns-welcome-page">
              <a href="#"><div className="btn-more">Read More</div></a>
              <a href="#"><div className="btn-download">Download Now</div></a>
            </div>
        </div>
    </div>
  )
}
