import React from "react";
import './Resume.css';

function ExpResume({exps}){
    return(
        <div>
            <div className="exp-resume">
                <div className="exp-resume-title">EXPERIENCE</div>
                <div className="bar-deco"></div>
            </div>

            <div>
                {exps.map(exp =>(
                    <div key={exp.id} className="exp">
                        <div className="exp-div">
                        <div className="exp-top-line">
                                <div className="exp-company">{exp.company}</div>
                                <div>{exp.location}</div>
                        </div>
                        <div className="exp-middle">
                                <div className="exp-job-title">{exp.jobTitle}</div>
                                <div>{exp.startDate} - {exp.endDate}</div>
                        </div>
                        <div className="exp-text">Text Box area</div>
                        </div>
                    </div>
                ))}
              
            </div>
        </div>
    )
}

export default ExpResume