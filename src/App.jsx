import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './page/Layout';
import Home from './page/Home';
import Directory from './page/Directory';
import About from './page/About';
import Contacts from './page/Contacts';
import Checkin from './page/Checkin';
import Login from './page/Login';
import './App.css'

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='directory' element={<Directory/>}/>
                    <Route path='aboutus' element={<About/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='checkin' element={<Checkin/>}/>
                    <Route path='Login' element={<Login/>}/>
                </Route>
            </Routes>
        </Router>
    </>
  )
}
export default App
