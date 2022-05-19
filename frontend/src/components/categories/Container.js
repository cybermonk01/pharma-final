import React from 'react'
import './Container.css'
import LeftContainer from './LeftContainer/LeftContainer'
import RightContainer from './RightContainer/RightContainer'

const Container = () => {
  return (
    <div className="container">
        <LeftContainer />
        <RightContainer />
    </div>
  )
}

export default Container