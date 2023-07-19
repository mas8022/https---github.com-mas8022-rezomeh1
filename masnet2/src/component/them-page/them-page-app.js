import './them-page.css'
import React from 'react'
import ThemPageImages from './them-page-images/them-page-images-app'

export default function ThemPage(imageThemData) {

  const allImageThem = [
    {name: "Product#1", imageSource: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1.jpg"},
    {name: "Product#2", imageSource: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1422568374078-27d3842ba676-1.jpg"},
    {name: "Product#3", imageSource: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447834353189-91c48abf20e1-1-1.jpg"},
    {name: "Product#4", imageSource: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1447877085163-3cce903855cd-1.jpg"},
    {name: "Product#5", imageSource: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447958374760-1ce70cf11ee3-1-1.jpg"},
    {name: "Product#6", imageSource: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1443890484047-5eaa67d1d630-1.jpg"},
    {name: "Product#7", imageSource: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1422568374078-27d3842ba676-1.jpg"},
    {name: "Product#8", imageSource: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447834353189-91c48abf20e1-1-1.jpg"},
    {name: "Product#9", imageSource: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/12/photo-1447877085163-3cce903855cd-1.jpg"},
    {name: "Product#10", imageSource: "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1447958374760-1ce70cf11ee3-1-1.jpg"},
  ]

  return (
    <div>
        <div className="them-page">

          <h3>Our Latest Projects</h3>
          <p>Here is our latest projects. You'll love them!</p>
          
          <div className="them-page-flex">
            <ThemPageImages {...allImageThem[0]}></ThemPageImages>
            <ThemPageImages {...allImageThem[1]}></ThemPageImages>
            <ThemPageImages {...allImageThem[2]}></ThemPageImages>
            <ThemPageImages {...allImageThem[3]}></ThemPageImages>
            <ThemPageImages {...allImageThem[4]}></ThemPageImages>
            <ThemPageImages {...allImageThem[5]}></ThemPageImages>
            <ThemPageImages {...allImageThem[6]}></ThemPageImages>
            <ThemPageImages {...allImageThem[7]}></ThemPageImages>
            <ThemPageImages {...allImageThem[8]}></ThemPageImages>
            <ThemPageImages {...allImageThem[9]}></ThemPageImages>
          </div>

        </div>
    </div>
  )
}
