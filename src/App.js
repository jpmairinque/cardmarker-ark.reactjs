import { useState } from 'react';

import FInalText from './components/FinalText/FInalText';
import Form from './components/Form/Form';


function App() {

  const [data,setData] = useState({
      resp: "",
      desc: "",
      nav: "Chrome",
      os: "Windows",
      cel: "Android",
      vers: "",
      reprod: "",
      link: "",
      base: "",
      user: "",
      login: "",
      senha: "",
      esperado: "",
      atual: "",
      afetados: "",
      rel: "",
      juspri: "",
      jusco: "",
      jusre1: "",
      prazo: "",
      link2: "",
      jusre2: "",
      complex: ""
  })
  
  const [showFinText, setShowFinText] = useState(false)

  const handleSubmit = () => { 
        setShowFinText(true)
  }
  
  return (
    <div className="App">
      
      {!showFinText ? (
      <Form data={data} setData={setData} handleSubmit={handleSubmit}/>
      ) : (
        <FInalText setShowFinText = {setShowFinText} finText={data}/> 
      )}
    </div>
  );





  
}

export default App;
