import React,{FC, useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import NavBar from './components/NavBar';
import Details from './pages/Details';
import {Wrapper}  from './styles/Main.style';

const App:FC=()=> {
 

  return (
  <Router>
    <Wrapper>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/country/:name' element={<Details/>}/>
        
      </Routes>
      
    {/* </div> */}
    </Wrapper>
  </Router>
  )
}

export default App;
