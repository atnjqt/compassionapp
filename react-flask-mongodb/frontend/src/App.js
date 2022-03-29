import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Welcome from './Components/Welcome'
import OAuth from './Components/OAuth'
import InstaFeeds from './Components/InstaFeeds'
import Login from './Components/Login'

import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <header className="App-header" style={{textAlign:'center'}}>
        <h1>CompassionMode App setup with Instagram API</h1>
      </header>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/oauth" element={<OAuth />} />
          <Route path="/instafeed" element={<InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12}/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;