import React from 'react'
import './Resume.css';
import AboutResume from './AboutResume'

function Resume({aboutInfo}){
    
    return(
        <div className='resume'>
            <AboutResume aboutInfo={aboutInfo}/>
        </div>
    )
}

export default Resume