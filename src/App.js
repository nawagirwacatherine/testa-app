

import React from 'react';
import './App.css';
import Home from './Home';
import Menu from './Menu';
import Orderonline from './Orderonline.js';
import Login from './Login';
import BookingPage from  './BookingPage.js';
import {Routes, Route, Link} from 'react-router-dom';





function App() {
  return(

    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Menu" className="nav-item">Menu</Link>
        <Link to="/Orderonline" className="nav-item">Orderonline</Link>
        <Link to="/Login" className="nav-item">Login</Link>
        <Link to="/booking" className="nav-item">Booking</Link> 

      </nav>
      <Routes>
    <Route path="/" element={<Home />}/>
    <Route path= "/menu" element={<Menu />}/>
    <Route path= "/orderonline" element={<Orderonline />}/>
    <Route path= "/login" element={<Login />}/>
    <Route path="/booking" element={<BookingPage />} /> 
    </Routes>
    </div>



  );
}
export default App;
