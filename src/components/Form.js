import React from 'react'
//import { useState } from 'react'
import AboutForm from './AboutForm'
import EduForm from './EduForm'
import ExpForm from './ExpForm'
import './Form.css';



function Form({onSubmitAboutForm, handleAboutChange,handleEduChange, aboutInfo}){
    return(
        <div>
            <h1>Resume Generator</h1>
            <AboutForm onSubmitAboutForm={onSubmitAboutForm} handleChange={handleAboutChange} aboutInfo={aboutInfo}/>
    
            <EduForm handleEduChange={handleEduChange}/>

            
            <ExpForm />
        </div>
    )
}

export default Form