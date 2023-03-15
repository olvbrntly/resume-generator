import React from 'react'
import './Form.css';

function ExpForm({handleExpChange}){
    return(
        <div>
            <form className='form'>
                <input type='text' 
                       placeholder='Job Title'
                       name='jobTitle'
                       onChange={handleExpChange}

                />

                <input type='text' 
                       placeholder='Company'
                       name='company'
                       onChange={handleExpChange}
                />

                <input type='text' 
                       placeholder='Location'
                       name='location'
                       onChange={handleExpChange}
               />

                <input type='text' 
                       placeholder='Start Date'
                       name='startDate'
                       onChange={handleExpChange}
                />

                <input type='text' 
                       placeholder='End Date'
                       name='endDate'
                       onChange={handleExpChange}
                />


                <textarea placeholder='description(add two - three bullet points here)'></textarea>
               
            </form>
        </div>
    )
}

export default ExpForm