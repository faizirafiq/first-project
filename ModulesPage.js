
import React from 'react';
import { Link} from 'react-router-dom';
import './ModulesPage.css'; 

function ModulesPage() {
  return (
    <div className="modules-container">
      <h2>Modules</h2>
      <div className="module">
        <h3>Module 1</h3>
        <p>This is the content of Module 1.</p>
      </div>
      <div className="module">
        <h3>Module 2</h3>
        <p>This is the content of Module 2.</p>
      </div>
      <div className="module">
        <h3>Module 3</h3>
        <p>This is the content of Module 3.</p>
      </div>
      <Link to="/assignment">Go to Other Page</Link>
    </div>
  );
}

export default ModulesPage;
