import React from 'react'
import Divider from './Divider'

const Footer = () => {
    return (
        
        <section className='footer'>
            <Divider showHighlight={false} />
            <div id='footerTextContainer'>
                <p id='footerText'>Shayne Smith © 2020</p>
                <span id='footerEmoji' className='emoji' role='img' aria-label='tent emoji'>🌊</span>
            </div>
        </section>
    )
}

export default Footer