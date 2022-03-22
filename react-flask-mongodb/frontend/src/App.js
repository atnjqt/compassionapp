import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InstaFeeds from './Components/InstaFeeds'
import Welcome from './Components/Welcome'
import OAuth from './Components/OAuth'

import './App.css';



const App = () => {
  return (
    <div className="wrapper">
      <header className="App-header" style={{textAlign:'center'}}>
        <h1>Instagram Feed with Instagram API (on each page)</h1>
      </header>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/instafeed" element={<InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12}/>} />
          <Route path="/oauth" element={<OAuth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;