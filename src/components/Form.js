import React from 'react'
import { useState } from 'react'
import AboutForm from './AboutForm'
import EduForm from './EduForm'
import ExpForm from './ExpForm'
import './Form.css';



function Form(){
    const [aboutInfo, setAboutInfo] = useState(
        {
            firstName: 'first-name',
            lastName:'last-name',
      });

    function handleChange(e){
        setAboutInfo(e.target.value)
    }
    return(
        <div>
            <h1>Resume Generator</h1>
            <AboutForm handleChange={handleChange}/>
            <div>{aboutInfo.firstName}</div>
            <div>{aboutInfo.lastName}</div>
            <EduForm />
            <ExpForm />
        </div>
    )
}

export default Form