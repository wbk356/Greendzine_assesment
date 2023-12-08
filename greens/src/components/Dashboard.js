import React from 'react';
import '../styles/Dashboard.css';
import user from '../assets/user.png'
import house from '../assets/dog house.png'

const Dashboard = () => {
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
        <div className="productivity-stat-item">Productivity on Monday: <span class="no">4%</span></div>
        <div class="progress_1"></div>
        <div className="productivity-stat-item">Productivity on Tuesday: <span class="no">92%</span></div>
        <div class="progress_2"></div>
        <div className="productivity-stat-item">Productivity on Wednesday: <span class="no">122%</span></div>
        <div class="progress_3"></div>
        <div className="productivity-stat-item">Productivity on Thursday: <span class="no">93%</span></div>
        <div class="progress_4"></div>
        <div className="productivity-stat-item">Productivity on Friday: <span class="no">89%</span></div>
        <div class="progress_5"></div>
        <div className="productivity-stat-item">Productivity on Saturday: <span class="no">98%</span></div>
        <div class="progress_6"></div>
      </div>
      <div className="navigation-box">
      <div class="split left">
  <div class="centered">
  <a href='/dashboard'><img src={house} alt="Avatar man"/></a>
  </div>
</div>

<div class="split right">
  <div class="centered">
  <a href='/emplist'><img src={user} alt="Avatar man"/></a>
  </div>
</div>
        
      </div>
    </div>
  );
};

export default Dashboard;
