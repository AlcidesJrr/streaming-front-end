import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import Home from './Pages/Home/Home';
import Filme from './Pages/Filme/Filme';
import Login from './Pages/Login/Login';
import Browse from './Pages/Browse/Browse';
import Perfil from './Pages/Perfil/Perfil';
import Mylist from './Pages/Mylist/Mylist'

axios.defaults.baseURL = 'https://plants-api-1.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/filme/:id" element={<Filme />} />
          <Route path="/perfil" element={<Perfil />} /> 
          <Route path="/mylist" element={<Mylist />} />     
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


