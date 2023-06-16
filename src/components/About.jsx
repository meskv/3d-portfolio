import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
      variants={fadeIn("", "", 0.1, index / 10)}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient rounded-xl shadow-card p-2'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-2xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='mt-4 text-xl font-semibold text-center'>{title}</h3>
          <p className='mt-2 text-center text-secondary'>{description}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className='mt-4 text-secondary text-xl max-w-3xl leading-[30px]'
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a undergraduate student at the National Institute of Technology Andhra Pradesh studying Electrical and Electronics Engineering. I am passionate about Machine Learning and Web Development that solve real world problems.  I am currently looking for a Summer 2023 internship!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")