import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className='absolute inset-0 flex justify-end m-3 card_img_hover'>
            <div
              onClick={() => {
                window.open(source_code_link, "_blank")
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt={`github`}
                className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-2xl'>
            {name}
          </h3>
          <p className='text-secondary text-base'>
            {description}
          </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-base ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}>My Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-base max-w-3xl leading-[30px]'
        >
          These are some of my projects that I have worked on. I have worked on a variety of projects, ranging from web development to machine learning. I am always looking for new projects to work on, so if you have any ideas, please feel free to reach out to me!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")