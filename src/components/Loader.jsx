import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        className='text-xl text-white font-medium mt-10'
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader