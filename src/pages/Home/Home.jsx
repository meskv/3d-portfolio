import React from 'react'
import { Navbar, Hero, About, Experience, Tech, Works, Contact, StarsCanvas, Footer, Education } from '../../components'

const Home = () => {
    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Works />
            <Education />
            <Experience />
            <Tech />
            {/* <Feedbacks /> */}
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
            <Footer />
        </div>
    )
}

export default Home