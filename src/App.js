import './App.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
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
];

const [edus, setEdus] = useState(initialEdus)
const [selectedEduID, setSelectedEduID] = useState(1);

function getEduID(id){
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

function addEdus(e){
  e.preventDefault();
  setEdus(prevState => [...prevState, 
    {
      id:uuidv4(),
      institution:'Institution Name',
      location:'City, State',
      degreeType:'Degree Type',
      degreeField:'Degree Field',
      startDate:'Start Date',
      endDate:'End Date',
    }])
}

function deleteEdus(e){
  e.preventDefault();
  setEdus(prevEdus => prevEdus.filter((edu)=> edu.id !== e.target.name))

}

  //EEXPERIENCE INFO STATE---------------------------------------

  const initialExps = [
    {
      id:1,
      jobTitle:'Job Title',
      company:'Company',
      location:'City, State',
      startDate:'Start Date',
      endDate:'End Date',
      description:' Job Description'
    }];

  const[exps, setExps] = useState(initialExps)
  const[selectedExpID, setSelectedExpID] = useState(1);

function getExpID(id){
  setSelectedExpID(id);
}

function handleExpChange(e){ 
  let updatedExps = exps.map(exp => {
    if(exp.id === selectedExpID){
      return{...exp, [e.target.name]:e.target.value};
    }
    return exp
  });

  setExps(updatedExps)  
}

function addExp(e){
  e.preventDefault();
  setExps(prevState => [...prevState, 
    {
      id:uuidv4(),
      jobTitle:'Job Title',
      company:'Company',
      location:'City, State',
      startDate:'Start Date',
      endDate:'End Date',
      description:'Job Description'
    }])
}

function deleteExps(e){
  e.preventDefault();
  setExps(prevExps => prevExps.filter((edu)=> edu.id !== e.target.name))
}

  return (
    <div className="App">
      <Form  handleAboutChange={handleAboutChange}  
             aboutInfo={aboutInfo} 
             handleEduChange={handleEduChange} 
             edus={edus} 
             getEduID={getEduID}
             addEdus={addEdus}
             deleteEdus={deleteEdus}
             getExpID={getExpID}
             handleExpChange={handleExpChange}
             addExp={addExp}
             deleteExps={deleteExps}
             exps={exps}
             /> 
      <Resume aboutInfo={aboutInfo} edus={edus} exps={exps}/>
    </div>
  );
}

export default App;
