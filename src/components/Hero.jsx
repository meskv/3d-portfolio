import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas, PatternCanvas } from './canvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white name`}>Hi! I'm <span className='text-[#915eff]'>Suman</span>
          </h1>
          <div className="about-me mt-4 leading-none tracking-wider font-bold text-4xl">
            <h2>Developer, Programmer</h2>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-pink-50`}>
            An undergraduate at NIT Andhra pursuing a degree in Electrical and Electronics Engineering.<br className='sm:block hidden' /> I'm learning backend web development as well as programming with Python, C, and Java.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      {/* <PatternCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-[10px] h-[10px] bg-secondary rounded-full'
            >

            </motion.div>
          </div>
        </a>
      </div >
    </section >
  )
}

export default Hero