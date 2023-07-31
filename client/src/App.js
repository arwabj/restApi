import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
     <h1> Hello contact list </h1>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/add' element={<Add />}/>
      <Route path='/edit' element={<Edit />}/>
      <Route path='/*' element={<Error />}/>
     </Routes>
    </div>
  );
}

export default App;
