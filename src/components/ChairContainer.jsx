import { Canvas } from '@react-three/fiber'
import React, {useEffect, Suspense } from 'react'
import {OrbitControls} from '@react-three/drei'
import './ChairContainer.css'
import Camera from './Camera'
import SimpleChair from './SimpleChair'
import Lights from './Lights'
import { Environment } from '@react-three/drei'
import {gsap} from 'gsap'


const ChairContainer = () => {

const timeline = gsap.timeline();

useEffect(() => {
  const chair = document.querySelector('.chairContainer')
  timeline.from(chair, {opacity: 0, z: 50, duration: 1.3, stagger: 0.1})
},[])

  return (
    <div className='chairContainer'>
        <Canvas>
                 <Camera />
                 <Lights />
                 <Suspense fallback={null}>
                             <SimpleChair />
                             <Environment files={"./hdr/christmas_photo_studio_04_4k.hdr"} />
                             <meshStandardMaterial />
                  </Suspense>
                     <OrbitControls target={[0,0.5,0]} />    
        </Canvas>
    </div>
  )
}

export default ChairContainer