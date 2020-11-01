import React from 'react'

const Intro = () => {
    return (
        <div className='intro-container'>
            <p id='emojis'>
                <div className="emoji"><span role='img' aria-label='man riding bicycle emoji'>🚴‍♂️</span></div>
                <div className="emoji"><span role='img' aria-label='anchor emoji'>⚓</span></div>
                <div className="emoji"><span role='img' aria-label='tent emoji'>⛺</span></div>
            </p>
            <h2 className='intro-text'>Shayne is a full-stack software engineer, freelancer, and entrepreneur. He is the founder of Sterling Resumes.</h2>
        </div>
    )
};

export default Intro