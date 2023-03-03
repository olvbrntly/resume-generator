import React from 'react'
import './Form.css';

function EduForm(){
    return(
        <div>
            <h2>Education</h2>
            <form className='form'>
                <input type='text' placeholder='Institution'></input>
                <input type='text' placeholder='Location'></input>
                <input type='text' placeholder='Degree Type'></input>
                <input type='text' placeholder='Degree Field'></input>
                <input type='text' placeholder='Start Date'></input>
                <input type='text' placeholder='End Date'></input>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default EduForm