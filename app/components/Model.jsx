
import { useGLTF } from '@react-three/drei'
import Lights from './Lights'
import { useEffect, useState } from 'react'

export function Model(props) {
  const { nodes, materials } = useGLTF('/conditioner_slide_dc.glb')

  const [scale, setScale] = useState(0.08)

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 768) {
        setScale(0.04)
      } else {
        setScale(0.08)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={scale}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <Lights />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.SLIDE}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/conditioner_slide_dc.glb')