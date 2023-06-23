import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Hero, Works, Contact, StarsCanvas, Footer, Education } from '../../components'
import { baseRoute } from '../../constants'

import { styles } from '../../styles'

const Projects = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <nav
                    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
                    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                        <Link to={baseRoute}
                            className='flex items-center gap-2 logo'
                            onClick={() => {
                                setActive('');
                                window.scrollTo(0, 0)
                            }}
                        >
                            <p className='text-white text-3xl font-bold cursor-pointer flex fler'>
                                Suman &nbsp;
                            </p>
                        </Link>
                    </div>
                </nav>
            </div>
            <Works />
            <Footer />
        </div>
    )
}

export default Projects