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
    phoneNumber:'123-456-7890',
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
  const [eduInfo, setEduInfo] = useState(
    {
      institution:'',
      location:'',
      degreeType:'',
      degreeField:'',
      startDate:'',
      endDate:'',
    })

  function handleEduChange(e){
      setEduInfo({...eduInfo, [e.target.name]: e.target.value})
  }
  const [EduInfoArray, setEduInfoArray] = useState({})

  return (
    <div className="App">
      <Form  onSubmitAboutForm={onSubmitAboutForm} handleAboutChange={handleAboutChange} handleEduChange={handleEduChange} aboutInfo={aboutInfo} /> 
      <Resume aboutInfo={submittedAboutInfo} eduInfo={eduInfo}/>
    </div>
  );
}

export default App;
