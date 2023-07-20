import './footer-style.css'
import React from 'react'

export default function FooterApp() {
  return (
    <div>
        <div className="footer">
          <h3>Theme by Colorlib Powered by WordPress</h3>
          <ul className="social-media">
            <a href="#"><li><i class="fa fa-telegram"></i></li></a>
            <a href="#"><li><i class="fa fa-facebook"></i></li></a>
            <a href="#"><li><i class="fa fa-twitter-square"></i></li></a>
            <a href="#"><li><i class="fa fa-youtube"></i></li></a>
            <a href="#"><li><i class="fa fa-instagram"></i></li></a>
          </ul>
        </div>
    </div>
  )
}
