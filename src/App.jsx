import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
   <>
   <Router>
     <Navbar />
     <Routes>
       <Route path='/' element={<Home/>} />
     </Routes>
   </Router>
   </>
  )
}

