import React from 'react'

import Divider from '../components/Divider'

const Projects = () => {
    return (
        <section>
            <div className="sectionWrapper">
                <p className='sectionTitle'>PROJECTS</p>
                <span className="sectionTitleEmoji" role='img' aria-label='crane on a building'>🏗️</span>
            </div>
            <Divider showHighLight={false} />
            <div className='project'>
                <a href='https://app-kohl.now.sh/' target='_blank' rel='noopener noreferrer'>Driftly</a>
                <h3>City comparison tool for digital nomads</h3>
            </div>
            <div className='project'>
                <a href='https://app-kohl.now.sh/' target='_blank' rel='noopener noreferrer'>TopCrypto</a>
                <h3>Reference tool to analyze top 100 crypto coins</h3>
            </div>
            <div className='project'>
                <a href='https://jovial-tesla-79d0c9.netlify.app/' target='_blank' rel='noopener noreferrer'>OptiPricer</a>
                <h3>Price optimization tool for AirBnB Owners powered by machine learning</h3>
            </div>
        </section>
    )
}

export default Projects