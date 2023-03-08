import React from 'react'
//import { useState } from 'react'
import AboutForm from './AboutForm'
import EduForm from './EduForm'
import ExpForm from './ExpForm'
import './Form.css';



function Form({message,onSubmitForm,handleChange}){

    // function onSubmitForm(){
    //     aboutParentCallback(...aboutInfo);
    //     //e.preventDefault();
    // }
    return(
        <div>
            <h1>Resume Generator</h1>
            <AboutForm message={message} onSubmitForm={onSubmitForm} handleChange={handleChange}/>
            {/* <button onClick={testMessage}>{message}</button> */}
            <EduForm />
            <ExpForm />
        </div>
    )
}

export default Form