import './App.css';
import { useState } from 'react';

import Form from './components/Form'
import Resume from './components/Resume'


function App() {

  const [about, setAbout]=useState({
    firstName: '',
    lastName: '',
    email:'',
    phoneNumber:'',
    linkedIn:'',
  })
  return (
    <div className="App">
      <Form />
      <Resume />
    </div>
  );
}

export default App;
