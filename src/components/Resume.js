import React from 'react'
import './Resume.css';
import AboutResume from './AboutResume'
import EduResume from './EduResume'


function Resume({aboutInfo, eduInfo,edus}){
    
    return(
        <div className='resume'>
            <AboutResume aboutInfo={aboutInfo}/>
            <EduResume edus={edus}/>

        </div>
    )
}

export default Resume