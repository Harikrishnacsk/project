import React from 'react'
import Image from '../Images/wallpaper1.jpg'
import bootstrap from 'react-bootstrap'
import Thumbnail from './Thumbnail'

const Carousels = () => {

  return (
    <div className="align-items-center">   
   <h3>wallpaper</h3>
   <button></button> 
   <img src={Image} style={{width:500, height:400}}/>
   <button></button>
   <Thumbnail/>
   </div>

  )
}

export default Carousels;