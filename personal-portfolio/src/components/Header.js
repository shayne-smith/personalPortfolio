import React from 'react'
import Divider from './Divider'

const Header = () => {
    return (
        <div>
            <div id='header'>
                <p id='logo'>Shayne Smith</p>
                <div className='link-list'>
                    <a className='link' href='https://twitter.com/shaynesm' target='_blank' rel='noopener noreferrer'>Twitter</a>
                    <a className='link' href='https://github.com/shayne-smith' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    <a className='link' href='https://www.linkedin.com/in/shayne-smith1/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <div id='hi'>
                        <a href='mailto:shayne.m.smith@vanderbilt.edu' rel='noopener noreferrer'>shayne.m.smith@vanderbilt.edu</a><img alt='yellow icon hand that waves on hover' src={require('../assets/waving.svg')}/>    
                    </div>
                </div>
            </div>
            <Divider showHighlight={true} />
        </div>
        
    )
}

export default Header