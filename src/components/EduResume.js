import React from "react";
import './Resume.css';

function EduResume({eduInfo}){
    return(
        <div>
            <h4>EDUCATION</h4>
            <ul>
              {eduInfo.map(edu => (
                <div>
                    <li>{edu.institution}</li>
                    <li>{edu.location}</li>
                    <li>{edu.degreeType}</li>
                    <li>{edu.degreeField}</li>
                    <li>{edu.startDate}</li>
                    <li>{edu.endDate}</li>

                </div>


              ))}
            </ul>
           
        </div>
    )
}

export default EduResume