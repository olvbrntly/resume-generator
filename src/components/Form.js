import React from 'react'
//import { useState } from 'react'
import AboutForm from './AboutForm'
import EduForm from './EduForm'
import ExpForm from './ExpForm'
import './Form.css';



function Form({onSubmitAboutForm, handleAboutChange,aboutInfo, handleEduChange, edus, getEduID, addEdus, deleteEdus, exps, getExpID}){
    return(
        <div className='form-container'>
            <h1>Resume Generator</h1>
            <AboutForm onSubmitAboutForm={onSubmitAboutForm} handleChange={handleAboutChange} aboutInfo={aboutInfo}/>
            <div className='form-title-with-btn'>
              <h2>Education</h2>
              <button className='add-btn' onClick={addEdus}>+ Education</button>
            </div>
            <div> {edus.map(edu =>(
                <div key={edu.id} onSelect={() => {getEduID(edu.id)}} >
                    <EduForm eduId={edu.id} handleEduChange={handleEduChange} deleteEdus={deleteEdus}/>
                </div>
            ))} 
            </div>
            <div className='form-title-with-btn'>
              <h2>Experience</h2>
              <button className='add-btn'>+ Experience</button>
            </div>
            <div> {exps.map(exp =>(
                <div key={exp.id} onSelect={() => {getExpID(exp.id)}} >
                    <ExpForm expId={exp.id} handleEduChange={handleEduChange} deleteEdus={deleteEdus}/>
                </div>
            ))} 
            </div>

        </div>
    )
}

export default Form