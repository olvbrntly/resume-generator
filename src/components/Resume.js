import React from 'react'
import './Resume.css';
import AboutResume from './AboutResume'
import EduResume from './EduResume'
import ExpResume from './ExpResume'



function Resume({aboutInfo, edus, exps}){
    
    return(
        <div className='resume'>
            <AboutResume aboutInfo={aboutInfo}/>
            <EduResume edus={edus}/>
            <ExpResume exps={exps}/>
        </div>
    )
}

export default Resume