import React from 'react'
import './Form.css';
function AboutForm(){
    return(
        <div>
            <h2>About You</h2>
            <form className='form'>
                <input type="text" 
                       placeholder='First Name'/>
                <input type="text" 
                       placeholder='Last Name'/>
                <input type="text" 
                       placeholder='Email'/>
                <input type="text" 
                       placeholder='000-000-0000'/>
                <input type="text" 
                       placeholder='LinkedIn'/>

                <button type='submit'>Submit!</button>
            </form>
        </div>
    )
}

export default AboutForm