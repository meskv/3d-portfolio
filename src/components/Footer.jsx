import React from 'react'

import { ScrollToTop } from './index'
import { socialLinks } from '../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className=" min-h-[4rem] py-2  flex justify-center items-center gap-4 bg-transparent">
                {
                    socialLinks.map((social, index) => (
                        <Link key={social} to={social.link} target="_blank" className='text-4xl cursor-pointer'>
                            <social.icon />
                        </Link>
                    ))
                }
            </div>
            <ScrollToTop />
        </>
    )
}

export default Footer