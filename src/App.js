import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Resume from './components/Resume'
import Form from './components/Form'



function App() {
  const id =useId();
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

  let initialEdus = [
    {
      id:1,
      institution:'Institution Name',
      location:'City, State',
      degreeType:'Degree Type',
      degreeField:'Degree Field',
      startDate:'Start Date',
      endDate:'End Date',
    },
  //   {
  //     id:2,
  //   institution:'Institution Name 2',
  //   location:'City, State',
  //   degreeType:'Degree Type',
  //   degreeField:'Degree Field',
  //   startDate:'Start Date',
  //   endDate:'End Date',
  // },
  // {
  //   id:3,
  //   institution:'Institution Name 3',
  //   location:'City, State',
  //   degreeType:'Degree Type',
  //   degreeField:'Degree Field',
  //   startDate:'Start Date',
  //   endDate:'End Date',
  // }
];
  
  const [edus, setEdus] = useState(initialEdus)
  const [selectedEduID, setSelectedEduID] = useState(1);

  //const selectedEdu = edus.find(e => e.id === selectedEduID);

function getIdCallback(id){
  setSelectedEduID(id);
}

function handleEduChange(e){ 
  let updatedEdus = edus.map(edu => {
    if(edu.id === selectedEduID){
      return{...edu, [e.target.name]:e.target.value};
    }
    return edu
  });

  setEdus(updatedEdus)  
}

function addEdus(){
  setEdus(prevState => [...prevState, 
    {
      id:2,
      institution:'Institution Name 2',
      location:'City, State',
      degreeType:'Degree Type',
      degreeField:'Degree Field',
      startDate:'Start Date',
      endDate:'End Date',
    }])
}

  return (
    <div className="App">
      <Form  handleAboutChange={handleAboutChange}  
             aboutInfo={aboutInfo} 
             handleEduChange={handleEduChange} 
             edus={edus} 
             getIdCallback={getIdCallback}
             addEdus={addEdus}
             /> 
      <Resume aboutInfo={aboutInfo} edus={edus}/>
    </div>
  );
}

export default App;
