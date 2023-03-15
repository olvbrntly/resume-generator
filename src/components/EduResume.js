import React from "react";
import './Resume.css';

function EduResume({eduInfo, edus}){
    return(
        <div className="edu-resume">
            <div className="edu-resume-title">EDUCATION</div>
            <div className="bar-deco"></div>
            
            <div>
              {edus.map(edu => (
                <div key={edu.id}>
                    <div className="edu-line1">
                        <div className="edu-institution">{edu.institution}</div>
                        <div>{edu.location}</div>
                    </div>

                    <div className="edu-line2">
                        <div className="edu-degree">
                            <div>{edu.degreeType}</div>
                            <div>in</div>
                            <div>{edu.degreeField}</div>
                        </div>
                        
                        <div className="edu-dates">
                            <div>{edu.startDate}</div>
                            <div>-</div>
                            <div>{edu.endDate}</div>
                        </div>
                    </div>
                </div>


              ))}
            </div>
           
        </div>
    )
}

export default EduResume