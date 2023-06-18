import React from 'react'
import './Education.css'
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import { styles } from '../styles'
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc'

import educationImg from '../assets/vector-img/education-1.svg'

import { EducationCanvas } from './canvas';
import { educations } from '../constants'

const EducationCard = ({ education }) => {
    return (
        <>
            <VerticalTimelineElement
                contentStyle={{ background: '#1d1836', color: '#ffffff7b' }}
                contentArrowStyle={{ borderRight: '7px solid #232631' }}
                date={education.date}
                iconStyle={{ background: education.iconBg }}
                icon={
                    <div className={`flex justify-center items-center w-full h-full`}>
                        <img
                            src={education.icon}
                            alt={education.university}
                            className='w-[80%] h-[80%] object-contain' />
                    </div>
                }
            >
                <div className='timeline'>
                    <h3 className='text-white text-[24px] font-bold'>{education.university}</h3>
                    <h3 className='text-secondary text-[14px] font-bold '>{education.degree}</h3>
                    <p className='text-white text-[16px] font-bold'>{education.major}</p>
                    <p className='text-white text-[18px] font-bold'>{education.grade}</p>
                </div>
            </VerticalTimelineElement>
        </>
    )
}

const Education = () => {
    return (
        <>
            <motion.div>
                <p className={styles.sectionSubText}>What I have done do far</p>
                <h2 className={styles.sectionHeadText}>My Education.</h2>
                <p>
                    Currently, I am pursuing my Bachelors of Techology in Electrical and Electronic
                    Engineering from NIT Andhra Pradesh and a minor in Software Engineering.
                </p>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {educations.map((education, index) => (
                        <EducationCard key={index} education={education} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Education, 'education')