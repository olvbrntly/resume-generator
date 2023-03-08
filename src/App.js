import './App.css';
import { useState } from 'react';

import Resume from './components/Resume'
import Form from './components/Form'



function App() {
  const [aboutInfo, setAboutInfo] = useState({
    firstName:'FIRST NAME ',
    lastName:'LAST NAME',
    email:'email', 
    phoneNumber:'123-456-7890',
    linkedIn:'linkedin',
  })

  function onSubmitForm(e){
    e.preventDefault();
    let info = {

    }

  }

  function handleChange(e){
         setAboutInfo({...aboutInfo, [e.target.name]: e.target.value})
     }

  return (
    <div className="App">
      <Form  onSubmitForm={onSubmitForm} handleChange={handleChange} aboutInfo={aboutInfo} /> 
      <Resume aboutInfo={aboutInfo}/>
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