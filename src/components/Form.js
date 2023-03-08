import React from 'react'
//import { useState } from 'react'
import AboutForm from './AboutForm'
import EduForm from './EduForm'
import ExpForm from './ExpForm'
import './Form.css';



function Form({onSubmitForm,handleChange, aboutInfo}){

    // function onSubmitForm(){
    //     aboutParentCallback(...aboutInfo);
    //     //e.preventDefault();
    // }
    return(
        <div>
            <h1>Resume Generator</h1>
            <AboutForm onSubmitForm={onSubmitForm} handleChange={handleChange} aboutInfo={aboutInfo}/>
            {/* <button onClick={testMessage}>{message}</button> */}
            <EduForm />
            <ExpForm />
        </div>
    )
}

export default Form