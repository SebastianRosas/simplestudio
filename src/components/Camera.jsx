import React from 'react'
import {PerspectiveCamera} from '@react-three/drei'

const Camera = () => {
  return (

    <PerspectiveCamera 
    makeDefault
    position={[7, 5, 10]} 
    fov={8}
    />

  )
}

export default Camera
