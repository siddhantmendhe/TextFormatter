
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//React router
// In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

// import { Switch, Route } from "react-router-dom";
// to

// import { Routes ,Route } from 'react-router-dom';
// You also need to update the Route declaration from

// <Route path="/" component={Home} />
// to

// <Route path='/' element={<Home/>} />


//Demo Code
// {/* <Router>
// <Layout>
//   <Routes>
//     <Route exact path="/" element={<Home/>}/>
//     <Route exact path="/login" element={<Login/>}/>
//     <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
//     <Route path="*" element={<NotFound/>}/>
//   </Routes>
// </Layout>
// </Router> */}




function App() {
  const [mode,setMode]=useState('light');
  const [btntext,setBtnText]= useState("Enable Light Mode");
  const [alert,setAlert]=useState(null);

  //Show alert
  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#353847';
      document.body.style.color='white';
      setBtnText("Enable Light Mode");
      showAlert("Dark Mode had been enabled","success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      setBtnText("Enable Dark Mode");
      showAlert("Light Mode had been enabled","success");


    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text Formatter" about="About us " mode={mode} btntext={btntext} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
  
          <Routes>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>}/>
              
              
          </Routes>

    
    </div>
    </Router>
   
    </>
  );
}

export default App;
