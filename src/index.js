import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Filme from './Pages/Filme/Filme';
import Login from './Pages/Login/Login';
import Browse from './Pages/Browse/Browse';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/filme" element={<Filme />} />   
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


