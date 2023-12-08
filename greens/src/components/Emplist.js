import React from 'react';
import '../styles/Emplist.css';
import user from '../assets/user.png'
import dog from '../assets/dog house.png'

const Emplist = () => {
  return (
    <div className="dashboard-container">
      <div className="top-right-logo"></div>
      <div className="notification-badge-logo">
      <span class="badge"> 4</span>

      </div>
      <div className="dashboard-rectangle">
        <p className="dashboard-text">Employee Productivity Dashboard</p>
      </div>
      <div className="productivity-stats-rectangle">
      
      </div>
      <div className="navigation-box">
      <div class="split left">
  <div class="centered">
  <img src={dog} alt="Avatar man"/>
  </div>
</div>

<div class="split right">
  <div class="centered">
    <img src={user} alt="Avatar man"/>
  </div>
</div>
        
      </div>
    </div>
  );
};

export default Emplist;
