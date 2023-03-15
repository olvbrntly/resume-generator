import React from "react";
import './Resume.css';

function ExpResume({exps}){
    return(
        <div>

            <div className="exp-resume">
                <div className="exp-resume-title">EXPERIENCE</div>
                <div className="bar-deco"></div>
            </div>

            <div className="exp-div">
            <div className="exp-top-line">
                    <div className="exp-company">Company</div>
                    <div>Location</div>
            </div>
            <div className="exp-middle">
                    <div className="exp-job-title">{exps.jobTitle}</div>
                    <div>Start Date - End Date</div>
            </div>
            <div className="exp-text">Text Box area</div>
            </div>
        </div>
    )
}

export default ExpResume