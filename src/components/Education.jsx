import React, { useState } from 'react'
import './Education.css'
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc'

import educationImg from '../assets/vector-img/education-1.svg'

import { EducationCanvas } from './canvas';
import { educations } from '../constants'

const EducationCard = ({ education }) => {
    const darkModeContentStyle = { background: '#1d1836', color: '#ffffff7b' };
    const darkModeContentArrowStyle = { borderRight: '7px solid #232631' };

    const lightModeContentStyle = { background: 'rgb(241 245 249 / var(--tw-bg-opacity))', color: '#000000' };
    const lightModeContentArrowStyle = { borderRight: '7px solid #000000d7' };

    // console.log('localStorage.theme: ', localStorage.theme);

    const darkQUuery = window.matchMedia('(prefers-color-scheme: dark)')

    // Determine the background and text colors based on the current mode
    const contentStyle = (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQUuery.matches))
        ? darkModeContentStyle
        : lightModeContentStyle;

    const contentArrowStyle = (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQUuery.matches))
        ? darkModeContentArrowStyle
        : lightModeContentArrowStyle;

    return (
        <>
            <VerticalTimelineElement
                contentStyle={contentStyle}
                contentArrowStyle={contentArrowStyle}
                date={education.date}
                dateClassName='text-gray-900 dark:text-white text-[16px] font-bold'
                iconStyle={{ background: education.iconBg }}
                icon={
                    <div className={`flex justify-center items-center w-full h-full`}>
                        <img
                            src={education.icon}
                            alt={education.university}
                            className='w-[80%] h-[80%] object-contain' />
                    </div>
                }
                style={{ color: 'red' }}
            >
                <div className='timeline'>
                    <h3 className='text-gray-900 dark:text-white text-[24px] font-bold'>{education.university}</h3>
                    <h3 className='text-gray-500 dark:text-secondary text-[14px] font-bold'>{education.degree}</h3>
                    <p className='text-gray-900 dark:text-white text-[16px] font-bold'>{education.major}</p>
                    <p className='text-gray-900 dark:text-white text-[18px] font-bold'>{education.grade}</p>
                </div>
            </VerticalTimelineElement>
        </>
    )
}

const Education = () => {
    const darkQUuery = window.matchMedia('(prefers-color-scheme: dark)')

    // Determine the background and text colors based on the current mode
    const lineColor = (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQUuery.matches))
        ? "#fff"
        : "#222";
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
                <VerticalTimeline lineColor={lineColor !== "" ? lineColor : "#222"}>
                    {educations.map((education, index) => (
                        <EducationCard key={index} education={education} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Education, 'education')