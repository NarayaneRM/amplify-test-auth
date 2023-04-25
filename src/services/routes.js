import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';


const Router = () => {
  return (
    <div>
    <Routes>
        <Route index element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default Router;