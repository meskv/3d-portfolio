import React, { useState, useEffect } from 'react'

import { PageWrapper } from '../../hoc'
import { Works } from '../../components'

const Projects = () => {
    return (
        <div className='relative z-0 bg-white dark:bg-primary'>
            <Works />
        </div>
    )
}

export default PageWrapper(Projects)

