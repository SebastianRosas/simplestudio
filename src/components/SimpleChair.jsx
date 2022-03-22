import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function SimpleChair({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./simpleChair/simplechair.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[4.08, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]} />
        <group position={[0, 0.1, 0.49]} rotation={[1.39, 0, 1.57]} scale={[0.17, 0.3, 0.94]}>
          <mesh geometry={nodes.CHAIR_JOIN_0.geometry} material={materials.Root} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./simpleChair/simplechair.gltf')