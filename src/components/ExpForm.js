import React from 'react'
import './Form.css';

function ExpForm(){
    return(
        <div>
            <div className='form-title-with-btn'>
              <h2>Experience</h2>
              <button className='add-btn'>+ Experience</button>
            </div>
            <form className='form'>
                <input type='text' placeholder='Job Title'></input>
                <input type='text' placeholder='Company'></input>
                <input type='text' placeholder='Location'></input>
                <input type='text' placeholder='Start Date'></input>
                <input type='text' placeholder='End Date'></input>
                <textarea placeholder='description(add two - three bullet points here)'></textarea>
               
            </form>
        </div>
    )
}

export default ExpForm