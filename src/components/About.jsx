import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc'

import { hobbies } from '../constants'
import profileImg from '../assets/profile/profile-img.jpg'


const ServiceCard = ({ title, description, icon, index }) => {
  return (
    <Tilt
      className='xs:w-[250px] w-full'
      variants={fadeIn("", "", 0.1, index / 10)}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient rounded-xl dark:shadow-card p-2'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`dark:bg-tertiary rounded-2xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ${styles.card}`}>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='mt-4 text-xl font-semibold text-center'>{title}</h3>
          <p className='mt-2 text-center'>{description}</p>
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
      <div className='xl:mt-12 mt-8 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className={`flex-1 p-8 rounded-2xl ${styles.card}`}
        >

          <motion.p
            className='mt-4 text-xl max-w-3xl leading-[30px]'
            variants={fadeIn("", "", 0.1, 1)}
          >
            Hello! I'm Suman Kumar, from Giridih, India. The city of Giridih is known for its industrial and health sectors, as well as its scenic beauty.
          </motion.p>
          <motion.p
            className='mt-4 text-xl max-w-3xl leading-[30px]'
            variants={fadeIn("", "", 0.1, 1)}
          >
            I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethicates along with a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.
          </motion.p>
          <motion.p
            className='mt-4 text-xl max-w-3xl leading-[30px]'
            variants={fadeIn("", "", 0.1, 1)}
          >
            I am passionate about Machine Learning and Web Development that solve real world problems.  I am currently looking for a Summer 2023 internship!
          </motion.p>
          <motion.div
            className='mt-4 text-xl max-w-3xl leading-[30px]'
            variants={fadeIn("", "", 0.1, 1)}
          >
            Here are a few of the other activities that I love to do!
            <ul className="hobby">
              {hobbies.map((hobby, index) => (
                <li key={index}
                  className={`${hobby.color} mt-2 leading-[30px]`}
                >{hobby.name}</li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 1.2 }}
          transition={{ duration: 3 }}
          variants={slideIn("right", "tween", 0.2, 1)}
          className='flex flex-1 justify-center items-center xl:h-auto md:h-[550px] h-[350px]'
        >
          <img src={profileImg} alt={"profile pic"} className="xsm:w-4/5 sm:w-3/4 md:w-4/5 lg:w-3/5 xl:w-full rounded-full" />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")