import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => {
  const darkModeContentStyle = { background: '#1d1836', color: '#ffffff7b' };
  const darkModeContentArrowStyle = { borderRight: '7px solid #232631' };

  const lightModeContentStyle = { background: '#d0bfbf2c', color: '#000000' };
  const lightModeContentArrowStyle = { borderRight: '7px solid #000000d7' };

  console.log('localStorage.theme: ', localStorage.theme);

  const darkQUuery = window.matchMedia('(prefers-color-scheme: dark)')

  // Determine the background and text colors based on the current mode
  const contentStyle = (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQUuery.matches))
    ? darkModeContentStyle
    : lightModeContentStyle;

  const contentArrowStyle = (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQUuery.matches))
    ? darkModeContentArrowStyle
    : lightModeContentArrowStyle;

  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={contentArrowStyle}
      date={experience.date}
      dateClassName='text-gray-900 dark:text-white text-[16px] font-bold'
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={`flex justify-center items-center w-full h-full`}>
          <div className={`flex justify-center items-center w-full h-full`}>
            <img src={experience.icon} alt={experience.company_name} className='w-[80%] h-[80%] object-contain' />
          </div>
        </div>
      }
    >
      <div>
        <h3 className='text-gray-900 dark:text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-gray-700 dark:text-secondary text-xl font-semibold'>{experience.company_name}</p>
      </div>

      <ul>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-black dark:text-secondary text-base pl-1 tracking-wider my-1"
          >{point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  const darkQUuery = window.matchMedia('(prefers-color-scheme: dark)')

  // Determine the background and text colors based on the current mode
  const lineColor = (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQUuery.matches))
    ? "#fff"
    : "#222";

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What I have done do far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          lineColor={lineColor !== "" ? lineColor : "#222"}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />

          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')