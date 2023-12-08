import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login  from './components/Login';
import Dashboard from './components/Dashboard';
import Emplist from './components/Emplist';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact Component={Login}/>
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/emplist' Component={Emplist}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
