import React from "react";
import './Resume.css';

function AboutResume({aboutInfo}){
    return(
        <div>
            <div className="full-name">
                <div> {aboutInfo.firstName}</div>
                <div> {aboutInfo.lastName}</div>
            </div>
            <div className="bar-deco"></div>
            <div className="contact-info">
                <div>&#x2022; {aboutInfo.email}</div>
                <div>&#x2022; {aboutInfo.phoneNumber}</div>
                <div>&#x2022; {aboutInfo.linkedIn}</div>
            </div>
        </div>
    )
}

export default AboutResume