import React from 'react'
import abstractImg from "../images/Abstraction.png"

const LeftComponent = () => {
  return (
    <div className='leftComponent'>
        <div className='left'>
        <h1>Find 3D Objects, Mockups and Ilustration here</h1>
        <img src={abstractImg} alt="3d-Ilustration"/>
        </div>
    </div>
  )
}

export default LeftComponent