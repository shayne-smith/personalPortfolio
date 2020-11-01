import React from 'react'
import Divider from './Divider'

const Header = () => {
    return (
        <div>
            <div id='header'>
                <h1 id='logo'>Shayne Smith</h1>
                <div className='link-list'>
                    <a className='link' href='https://twitter.com/shaynesm' target='_blank' rel='noopener noreferrer'>Twitter</a>
                    <a className='link' href='https://github.com/shayne-smith' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    <a className='link' href='https://www.linkedin.com/in/shayne-smith1/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <div id='hi'>
                        <a href='mailto:hi@shaynesmith.io' rel='noopener noreferrer'>hi@shaynesmith.io </a><img alt='yellow icon hand that waves on hover' src={require('../assets/waving.svg')}/>    
                    </div>
                </div>
            </div>
            <Divider showHighlight={true} />
            
        </div>
        
    )
}

export default Header