import React from 'react'
//import { useState } from 'react'
import AboutForm from './AboutForm'
import EduForm from './EduForm'
import ExpForm from './ExpForm'
import './Form.css';



function Form({onSubmitAboutForm, handleAboutChange,aboutInfo, handleEduChange, edus, getIdCallback, addEdus, deleteEdus}){
    return(
        <div className='form-container'>
            <h1>Resume Generator</h1>
            <AboutForm onSubmitAboutForm={onSubmitAboutForm} handleChange={handleAboutChange} aboutInfo={aboutInfo}/>
            <div className='form-title-with-btn'>
              <h2>Education</h2>
              <button className='add-btn' onClick={addEdus}>+ Education</button>
            </div>
            <div> {edus.map(edu =>(
                <div key={edu.id} onSelect={() => {getIdCallback(edu.id)}} >
                    <EduForm eduId={edu.id} handleEduChange={handleEduChange} deleteEdus={deleteEdus}/>
                </div>
            ))} </div>
            
            <ExpForm />
        </div>
    )
}

export default Form