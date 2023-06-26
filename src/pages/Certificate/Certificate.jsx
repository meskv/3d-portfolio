import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { styles } from '../../styles'

import { PageWrapper } from '../../hoc'

const certificateData = [
    {
        title: 'Responsive Web Design',
        link: 'https://www.freecodecamp.org/certification/fccf2a0a0a0/responsive-web-design',
        image: 'https://i.imgur.com/8XZ4x3i.png',
        alt: 'Responsive Web Design',
        date: '2021-03-01',
        
    },
]

const Certificate = () => {
    return (
        <div className='relative z-0 bg-white dark:bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            </div>

            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <motion.div>
                    <h2 className={styles.sectionHeadText}>Certifications and Badges.</h2>
                    <p className={styles.sectionSubText}>Here are some of my certifications and badges.</p>
                </motion.div>

                <div className="flex items-center justify-center bg-gray-800 p-4 md:h-40">
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                            <div className="flex-col">
                                <div className="text-sm font-medium text-gray-400 my-2">Summary</div>
                                <div className="class flex items-center">
                                    <div className="text-3xl font-bold text-gray-200">15k</div>
                                    <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-violet-500 font-medium ">
                                        <div><ion-icon name="arrow-down-outline"></ion-icon></div>
                                        <div>25%</div>
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-gray-400 ">Last week 18.7k</div>
                            </div>
                        </div>
                    </div>
                </div>

                <ButtonGroup />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="element-item globant">
                        <div className="our-project">
                            <div className="img">
                                <a className="test-popup-link" href="./img/certificates/globant-4.png">
                                    <img src="https://d2vyhi5ouo1we3.cloudfront.net/force_jpg/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vcmVxdWVzdHMvaW1hZ2VzLzAwOC85MjQvNTc5L29yaWdpbmFsL2VhYzQyY2FiZjM5YzIxY2Y4NThlNWY4NDRlZmM0YTA1MjJmOGUxNzkucG5nPzE2MzI4MDgzMDI=/image.jpg" alt="certificates-4" className="img-fluid" />
                                </a>
                            </div>
                            <div className="py-4">
                                <h4 className="text-uppercase text-gray-900">Performance Award (March 2022)</h4>
                                <span className="text-gray-900">Globant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PageWrapper(Certificate)

function ButtonGroup() {
    return (
        <div>
            <div className="">
                <button type="button" className="active text-gray-900 text-2xl font-bold" id="btn1" data-filter="*">All</button>
                <button type="button" data-filter=".globant">Globant</button>
                <button type="button" data-filter=".tcs">TCS</button>
                <button type="button" data-filter=".coursera">Coursera</button>
                <button type="button" data-filter=".sololearn">Sololearn</button>
                <button type="button" data-filter=".udemy">Udemy</button>
                <button type="button" data-filter=".freecodecamp">Freecodecamp</button>
                <button type="button" data-filter=".hackerrank">Hackerrank</button>
                <button type="button" data-filter=".other">Other</button>
            </div>
        </div>
    );
}