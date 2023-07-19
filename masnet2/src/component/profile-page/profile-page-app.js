import "./profile-page-style.css"
import React from 'react'

export default function ProfilePage() {
  return (
    <div>
      <div className="profile-page">
      
        <div className="profile-page-son-flex describe">
          <div className="flex-profile-page-describe">
            <h3>Portfolio Section</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.</p>
            <a href="#"><div className="btn-profile-page">See It In Action</div></a>
          </div>
        </div>

        <div className="profile-page-son-flex">
          <div className="image"></div>
        </div>

      </div>
    </div>
  )
}
