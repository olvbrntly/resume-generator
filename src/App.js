import './App.css';
import { useState } from 'react';

import Resume from './components/Resume'
import Form from './components/Form'



function App() {
  //ABOUT INFO STATE_--------------------------------------
  const [aboutInfo, setAboutInfo] = useState({
    firstName:'FIRST NAME ',
    lastName:'LAST NAME',
    email:'email', 
    phoneNumber:'000-000-000',
    linkedIn:'linkedin',
  })
  const[submittedAboutInfo, setSubmittedAboutInfo] = useState({...aboutInfo})
  
  function onSubmitAboutForm(e){
    e.preventDefault();
    setSubmittedAboutInfo({...aboutInfo})

  }

  function handleAboutChange(e){
         setAboutInfo({...aboutInfo, [e.target.name]: e.target.value})
     }


  //EDUCATION INFO STATE---------------------------------------
  const initialEducation = [
    {
      id:1,
      institution:'USC',
      location:'Los Angeles',
      degreeType:'Bachelors',
      degreeField:'Business Admin',
      startDate:'Jan 2019',
      endDate:'May 2021',
    },
  ]
  const [eduInfo, setEduInfo] = useState(initialEducation)

  function handleEduChange(e){
       setEduInfo({...eduInfo, [e.target.name]: e.target.value})
   }

  return (
    <div className="App">
      <Form onSubmitAboutForm={onSubmitAboutForm} handleAboutChange={handleAboutChange}  aboutInfo={aboutInfo} /> 
      <Resume aboutInfo={submittedAboutInfo} eduInfo={eduInfo}/>
    </div>
  );
}

export default App;
