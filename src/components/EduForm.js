import React from 'react'
import './Form.css';

function EduForm({handleEduChange, eduId, deleteEdus}){
    
    return(
        <div>
            <form className='form' >
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

               {(eduId !== 1) && <button onClick={deleteEdus} name={eduId}>Delete</button>}
         
            </form>
        </div>
    )
}

export default EduForm