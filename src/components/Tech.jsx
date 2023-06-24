import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (

    <>
      <motion.div>
        <p className={styles.sectionSubText}>Technologies I have worked on</p>
        <h2 className={styles.sectionHeadText}>My Tech Stack.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology, index) => (
            <div key={index} className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
              <p className='text-center text-gray-800 dark:text-secondary'>{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'technologies')