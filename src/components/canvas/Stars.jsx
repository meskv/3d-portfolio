import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  // to make stars rotate
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  // for light/dark mode
  const darkModeColor = "#f272c8";
  const lightModeColor = "#0d8d37";
  const darkQUuery = window.matchMedia('(prefers-color-scheme: dark)')

  // Determine the background and text colors based on the current mode
  const color = (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQUuery.matches))
    ? darkModeColor
    : lightModeColor;


  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.0025}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
        camera={{
          position: [0, 0, 1],
        }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload />
      </Canvas>
    </div>
  )
}

export default StarCanvas