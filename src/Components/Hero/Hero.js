import React from 'react'
import img_react from '../Images/React_Hero1.jpg'
import './HeroApp.css'

const Hero = () => {
  return (
    <>
    
    <div className="wise-hero">
        <div className="hero-title text-center fs-3 mt-5">
            <a>"The Ultimate Guide to Starting with React JS Today"</a>
        </div>
        <div className="hero-sub-title text-center">
            <a>Eliminate beginner's confusion</a>
        </div>
        <div className="hero-img d-flex justify-content-center">
            <img src={img_react} alt="Img" className='img-fluid mt-5 rounded-4 w-75'/>
        </div>
    </div>
    
    </>
  )
}

export default Hero