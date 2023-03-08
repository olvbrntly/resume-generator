import React from "react";
import './Resume.css';

function EduResume({eduInfo}){
    return(
        <div>
            <h4>EDUCATION</h4>
            {eduInfo.location}
        </div>
    )
}

export default EduResume