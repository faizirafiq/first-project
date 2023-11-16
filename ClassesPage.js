import React from 'react';
import { Link } from 'react-router-dom';
import './ClassesPage.css';

function ClassesPage() {
  return (
    <div className="classes-container">
      <h2>Classes</h2>
      <div className="classes-list">
      
        <div className="class">
          <h3>Class 1</h3>
          <p>Calculus and Integration .</p>
        </div>
        <div className="class">
          <h3>Class 2</h3>
          <p> Financial Accounting .</p>
        </div>
        <div className="class">
          <h3>Class 3</h3>
          <p> Web Engineering .</p>
        </div>
        <div className="class">
          <h3>Class 4</h3>
          <p> Compiler construction .</p>
        </div>
        
        
        
      </div>
      <Link to="/Modules">Go to Other Page</Link>
    </div>
  );
}

export default ClassesPage;
