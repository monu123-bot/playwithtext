import logo from './logo.svg';
import './App.css';
import { Nav } from './components/nav';
import Form from './components/form';
import { About } from './components/about';
import React, { useState } from 'react';
import { Alert } from './alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }

    )
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  // setAlert('hii','success');

  const [modecolor, setmodecolor] = useState('white');
  const [modetextcolor, setModetextcolor] = useState('white')
  const [btntxt, setBtnTxt] = useState('Enable Dark Mode');
  const [style2, setStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    // height:'100vh',
    width: '100%'
  })
  // const style1 = {
  //   width:'100%',
  //   height:'100%'
  // }
  const style3 = {
    width: 'fit-content',
    borderRadius: '6px',
    position: 'absolute',
    right: '1rem',
    top: '.6rem'
  }

  const changeMode = () => {
    if (style2.color !== 'black') {
      setStyle({
        color: 'black',
        backgroundColor: 'white',

        // height:'100vh',
        width: '100%'
      })
      showAlert("Light mode enabled", "success");
      setBtnTxt('Enable Dark Mode');
    }
    else {
      setStyle({
        color: `${modetextcolor}`,
        backgroundColor: `${modecolor}`,
        border: '.1px solid grey',
        // height:'100vh',
        width: '100%'
      })
      showAlert("Dark mode enabled", "success");
      setBtnTxt('Disable Dark Mode');

    }
  }

  return (

    <>
      <div className="form-check form-switch bg-dark " style={style3} >
      


        <input placeholder='Background color' type="text" onChange={(e) => { setmodecolor(e.target.value) }} />
        <input placeholder='Text colour' type="text" onChange={(e) => { setModetextcolor(e.target.value) }} />
        
        <input  onClick={() => { changeMode() }} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />

      </div>
      <div style={style2}>


        <Router>
          <Nav dark={style2} />
         

          <Alert mode={style2} alert1={alert} />
          <Routes>
          <Route path="/" element={<Form setAlert={setAlert} showAlert={showAlert} style={style2} />} />
    
            <Route path="/about" element={<About dark={style2} />} />



            <Route path="/form" element={<Form setAlert={setAlert} showAlert={showAlert} style={style2} />} />



          </Routes>

        </Router>




      </div>
    </>
  );

}

export default App;
