import './App.css';
import { useState } from 'react';

import Resume from './components/Resume'
import Form from './components/Form'



function App() {
  const [aboutInfo, setAboutInfo] = useState({
    firstname:'',
    lastName:'',
    email:'',
    phoneNumber:'',
    linkedIn:'',
  })

  function onSubmitForm(e){
    e.preventDefault();
    setAboutInfo({...aboutInfo, [e.target.name]: e.target.value})
    alert('submitted')
    
  }

  function handleChange(e){
         setAboutInfo({...aboutInfo, [e.target.name]: e.target.value})
     }

  return (
    <div className="App">
      <Form  onSubmitForm={onSubmitForm} handleChange={handleChange} />
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