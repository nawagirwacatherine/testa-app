// import React from 'react';

// import './App.css';

// function Header() {
//   return <h1>Little lemom restaurant</h1>;
// }

// function App() {
//   return <Header />;

// }
 


// export default App;

import React from 'react';
import './App.css';
import Home from './Home';
import Menu from './Menu';
import Orderonline from './Orderonline.js';
import Login from './Login';
import {Routes, Route, Link} from 'react-router-dom';





function App() {
  return(

    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Menu" className="nav-item">Menu</Link>
        <Link to="/Orderonline" className="nav-item">Orderonline</Link>
        <Link to="/Login" className="nav-item">Login</Link>

      </nav>
      <Routes>
    <Route path="/" element={<Home />}/>
    <Route path= "/menu" element={<Menu />}/>
    <Route path= "/orderonline" element={<Orderonline />}/>
    <Route path= "/login" element={<Login />}/>
    </Routes>
    </div>


  );
}
export default App;
