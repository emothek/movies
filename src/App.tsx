import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UserSignup from './UserSignup';
import Admin from './Admin';


function App() {
  return (
<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign-up</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
 
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/admin" element={<Admin />} />

        </Routes>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
