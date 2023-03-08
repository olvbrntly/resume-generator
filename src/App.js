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

  function handleChange(e){
         setAboutInfo({...aboutInfo, [e.target.name]: e.target.value})
     }


  //EDUCATION INFO STATE---------------------------------------
  const [EduInfo, setEduInfo] = useState(
    {
      institution:'',
      location:'',
      degreeType:'',
      degreeField:'',
      startDate:'',
      endDate:'',
    })
  const [EduInfoArray, setEduInfoArray] = useState({})

  return (
    <div className="App">
      <Form  onSubmitAboutForm={onSubmitAboutForm} handleChange={handleChange} aboutInfo={aboutInfo} /> 
      <Resume aboutInfo={submittedAboutInfo}/>
    </div>
  );
}

export default App;


  // const [about, setAbout]=useState(
  //   {
  //     firstName: '',
  //     lastName: '',
  //     email:'',
  //     phoneNumber:'',
  //     linkedIn:'',
  //   }
  // )

//   function handleChange(e){
//     setAbout({...about, [e.target.name]: e.target.value})
// }
  // const handleAboutCallback = (fName) => {
  //   setAbout({...about, 
  //       [about.firstName]:fName,
  //     }

  //   )
  // }