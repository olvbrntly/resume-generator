import React from 'react'
import AboutForm from './AboutForm'
import EduForm from './EduForm'
import ExpForm from './ExpForm'
import './Form.css';



function Form(){
    return(
        <div>
            <h1>Resume Generator</h1>
            <AboutForm />
            <EduForm />
            <ExpForm />
        </div>
    )
}

export default Form