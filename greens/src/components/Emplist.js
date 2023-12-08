import React from 'react';
import { useState } from 'react';
import '../styles/Emplist.css';
import user from '../assets/user.png'
import house from '../assets/dog house.png'

const employeeDatabase = [
    {
      empId: 1,
      name: 'Arjun',
      dob: '16-11-2000',
      role: 'Software Engineer',
    },
    {
      empId: 2,
      name: 'Mahesh',
      dob: '15-01-2000',
      role: 'Web Developer',
    },
    {
        empId: 3,
        name: 'Ali',
        dob: '07-01-1999',
        role: 'Data Engineer',
    },
    {
      empId: 4,
      name: 'Sneha',
      dob: '01-05-2000',
      role: 'Software Engineer',
    },
  ];

const Emplist = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };


    const filteredEmployees = employeeDatabase.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );  



  return (
    <div className="dashboard-container">
      <div className="top-right-logo"></div>
      <div className="notification-badge-logo">
      <span class="badge"> 4</span>

      </div>
      <div className="dashboard-rectangle">

      <div className="search-container">
        <input className='search'
          type="text"
          placeholder="Search with name..."
          value={searchTerm}
          onChange={handleSearch}
        />
    
      </div>
      </div>
      <div className="employee-boxes-container">
      <div className="emp-list-container">
      <div className="employee-boxes">
        {filteredEmployees.map((employee) => (
          <div key={employee.empId} className="employee-box">
            <p>Name:<span className='id'> {employee.name}</span></p>
            <p>Employee ID: <span className='id'> {employee.empId}</span></p>
            <p>Date of Birth:<span className='dob'> {employee.dob}</span></p>
            <p>Role:<span className='role'> {employee.role}</span></p>
          </div>
        ))}
        
      </div>
      </div>
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

export default Emplist;
