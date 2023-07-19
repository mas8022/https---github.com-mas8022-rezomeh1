import './customers-page-style.css'
import React from 'react'

export default function CustomersPage() {
  return (
    <div>
        <div className="customers-page">
            <div className="flex-customers-page">
                <h3>What Our Customers Say</h3>
                <p>Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.</p>
                <div className="image-customers-page" style={{background: 'url(https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/Aigars-Silkalns-150x150.jpg)'}}></div>
            </div>
        </div>
    </div>
  )
}
