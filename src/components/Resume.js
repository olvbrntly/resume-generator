import React from 'react'
import './Resume.css';
import AboutResume from './AboutResume'
import EduResume from './EduResume'


function Resume({aboutInfo, eduInfo}){
    
    return(
        <div className='resume'>
            <AboutResume aboutInfo={aboutInfo}/>
            <EduResume eduInfo={eduInfo}/>

        </div>
    )
}

export default Resume