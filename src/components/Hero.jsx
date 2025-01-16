import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div>
      <div>
      <img src={assets.hero_image} alt="" />
      <div>
      <h2 
            className="text-white font-bold flex items-center justify-center border"
            style={{
              backgroundColor: '#8d0f1a',
              borderColor: '#8d0f1a',
              height: '6rem',
              fontSize: '2rem', // Adjust font size for 50% height
              fontFamily: 'Big Shoulders Display, ExtraBold' // Set Times New Roman font
            }}
          >
            THE CITIZENS ROAD SAFETY PROGRAMME
          </h2>

      </div>
      </div>
    </div>
  )
}

export default Hero
