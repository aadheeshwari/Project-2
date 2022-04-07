import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Pagenation from './Component/Pagenation';
import Login from './Component/Login';
import Register from './Component/Register';



function App() {
  return (
    <main>
      <Routes>
      <Route path="/" element={<Login/>} />
  
                <Route path='reg' element={<Register/>}/>
                
         
      
      </Routes>
    </main>
  );
}

export default App;