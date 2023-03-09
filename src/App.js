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
      institution:'University of Southern California, Marshall School of Business',
      location:'Los Angeles, CA',
      degreeType:'Bachelor of Science',
      degreeField:'Business Administration',
      startDate:'Jan 2019',
      endDate:'May 2021',
    },
    {
      id:2,
      institution:'University of Southern California, School of Cinematic Arts',
      location:'Los Angeles, CA',
      degreeType:'Bachelor of Science',
      degreeField:'Film Production',
      startDate:'Jan 2022',
      endDate:'Present',
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
