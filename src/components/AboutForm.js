import React from 'react'
import './Form.css';
function AboutForm({handleChange,onSubmitForm}){
       
    return(
        <div>
            <h2>About You</h2>
            <form className='form' onSubmit={onSubmitForm} >
 
                <input type="text" 
                       name="firstName"
                       placeholder='First Name'
                       onChange={handleChange}
                       />
                <input type="text" 
                       name='lastName'
                       placeholder='Last Name'
                       onChange={handleChange}
                       />
                <input type="text"
                       name="email" 
                       placeholder='Email'
                       onChange={handleChange}
                       />
                <input type="text" 
                       name="phoneNumber"
                       placeholder='000-000-0000'
                       onChange={handleChange}
                       />
                <input type="text" 
                       name="linkedIn"
                       placeholder='LinkedIn'
                       onChange={handleChange}
                       />
              <button type='submit'>Submit!</button>
            </form>
        </div>
    )
}

export default AboutForm