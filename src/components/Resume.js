import React from 'react'
import './Resume.css';

function Resume({aboutInfo}){
    
    return(
        <div className='resume'>
            <h1>Resume</h1>
            <div>
                {aboutInfo.firstName}
            </div>
        </div>
    )
}

export default Resume