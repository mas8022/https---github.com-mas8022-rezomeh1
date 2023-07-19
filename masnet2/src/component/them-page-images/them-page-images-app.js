import './them-page-images.style.css'

import React from 'react'

export default function ThemPageImages({name, imageSource}) {
  return (
    <div>
        <div className="box-image" style={{background: `url(${imageSource})`}}>
            <p>{name}</p>
        </div>
    </div>
  )
}
