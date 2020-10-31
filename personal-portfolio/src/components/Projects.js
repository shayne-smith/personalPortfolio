import React from 'react'

import Divider from '../components/Divider'

const Projects = () => {
    return (
        <section>
            <div className='sectionTitle'>
                PROJECTS <span role='img' aria-label='crane on a building'>🏗️</span>
            </div>
            <Divider />
            <div className='project'>
                <a href='https://app-kohl.now.sh/' target='_blank' rel='noopener noreferrer'>Crypto</a>
                <h3>Reference tool to analyze top 100 crypto coins</h3>
            </div>
        </section>
    )
}

export default Projects