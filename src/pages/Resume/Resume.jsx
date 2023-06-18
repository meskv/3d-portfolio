import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../../styles'

import { SectionWrapper } from '../../hoc'
import resumePdf from '../../assets/resume/Resume.pdf'
import PdfViewer from './PdfViewer'



const Resume = () => {
  return (
    <>
      <motion.div>

        {/* <PdfViewer pdf={resumePdf} /> */}
        <iframe className='w-full min-h-screen' src={resumePdf} width="100%" height="600px"></iframe>

      </motion.div>
    </>
  )
}

export default Resume