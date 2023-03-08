import React from 'react'
import './Form.css';

function EduForm({handleEduChange}){
    return(
        <div>
            <div className='form-title-with-btn'>
              <h2>Education</h2>
              <button className='add-btn'>+ Education</button>
            </div>
            
            <form className='form'>

                <input type='text' 
                       name="institution"
                       placeholder='Institution'
                       onChange={handleEduChange}
                />

                <input type='text' 
                       name="location"
                       placeholder='Location'
                       onChange={handleEduChange}
                
                />
                <input type='text' 
                       name="degreeType"
                       placeholder='Degree Type'
                       onChange={handleEduChange}
                />
                <input type='text'
                       name="degreeField"
                       placeholder='Degree Field'
                       onChange={handleEduChange}
                />
                <input type='text'
                       name="startDate"
                       placeholder='Start Date'
                       onChange={handleEduChange}
                />
                <input type='text'
                       name="endDate"
                       placeholder='End Date'
                       onChange={handleEduChange}
                />
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default EduForm