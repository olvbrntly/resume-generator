import React from 'react'
//import { useState } from 'react'
import AboutForm from './AboutForm'
import EduForm from './EduForm'
import ExpForm from './ExpForm'
import './Form.css';



function Form({onSubmitAboutForm, handleAboutChange, handleEduChange,edus, aboutInfo}){
    return(
        <div className='form-container'>
            <h1>Resume Generator</h1>
            <AboutForm onSubmitAboutForm={onSubmitAboutForm} handleChange={handleAboutChange} aboutInfo={aboutInfo}/>
            <div> {edus.map(edu =>(
                <div key={edu.id}>
                    <EduForm handleEduChange={handleEduChange}/>
                </div>
            ))} </div>
            
            <ExpForm />
        </div>
    )
}

export default Form