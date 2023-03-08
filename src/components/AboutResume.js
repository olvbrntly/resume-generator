import React from "react";
import './Resume.css';

function AboutResume({aboutInfo}){
    return(
        <div>
            <div className="full-name">
                <div>{aboutInfo.firstName}</div>
                <div>{aboutInfo.lastName}</div>
            </div>

            <div className="contact-info">
                <div>{aboutInfo.email}</div>
                <div>{aboutInfo.phoneNumber}</div>
                <div>{aboutInfo.linkedIn}</div>
            </div>
        </div>
    )
}

export default AboutResume