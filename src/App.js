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
  // const[submittedAboutInfo, setSubmittedAboutInfo] = useState({...aboutInfo})
  
  // function onSubmitAboutForm(e){
  //   e.preventDefault();
  //   setSubmittedAboutInfo({...aboutInfo})

  // }

  function handleAboutChange(e){
         setAboutInfo({...aboutInfo, [e.target.name]: e.target.value})
     }


  //EDUCATION INFO STATE---------------------------------------

  const [eduInfo, setEduInfo] = useState(
    {
        id:1,
        institution:'Institution Name',
        location:'City, State',
        degreeType:'Degree Type',
        degreeField:'Degree Field',
        startDate:'Start Date',
        endDate:'End Date',
    })

  let initialEdus = [
    {id:1,
    institution:'Institution Name',
    location:'City, State',
    degreeType:'Degree Type',
    degreeField:'Degree Field',
    startDate:'Start Date',
    endDate:'End Date',
  },
    {id:1,
    institution:'Institution Name',
    location:'City, State',
    degreeType:'Degree Type',
    degreeField:'Degree Field',
    startDate:'Start Date',
    endDate:'End Date',
  }];
  

  const [edus, setEdus] = useState(initialEdus)


  function handleEduChange(e){
       setEdus({...edus, [e.target.name]: e.target.value})
   }

   //onclick function
   function addEdu(e){
      e.preventdefault();
      //add edu to the array
   }

  return (
    <div className="App">
      <Form  handleAboutChange={handleAboutChange}  aboutInfo={aboutInfo} handleEduChange={handleEduChange} edus={edus}/> 
      <Resume aboutInfo={aboutInfo} eduInfo={eduInfo} edus={edus}/>
    </div>
  );
}

export default App;
