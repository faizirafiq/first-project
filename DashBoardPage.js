import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoardPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResultPage from './ResultPage';
import ClassesPage from './ClassesPage';
import ModulesPage from './ModulesPage';
import { faSignOutAlt, faBriefcase, faBars, faUsers, faCog, faStar } from '@fortawesome/free-solid-svg-icons';


function DashBoardPage() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
          <Link to="/portfolio"><FontAwesomeIcon icon={faBriefcase} /> Portfolio</Link>
        </div>
        <div className="navbar-right">
          <Link to="/AboutUs"><FontAwesomeIcon icon={faUsers} /> About Us</Link>
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faCog} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-box">
          <h2>Dashboard</h2>
          <div className="dashboard-item assignments">
            <Link to="/Assignment" className="dashboard-item assignments-link">
              <h3>Assignments</h3>
            </Link>
          </div>
          <div className="dashboard-item results">
            <Link to="/results" component={ResultPage} className="dashboard-item assignments-link">
              <h3>Results</h3>
            </Link>
          </div>
          <div className="dashboard-item classes">
            <Link to="/Classes" component={ClassesPage} className="dashboard-item assignments-link">
              <h3>Classes</h3>
            </Link>
            {/* Add content for classes */}
          </div>
          <div className="dashboard-item modules">
            <Link to="/Modules" component={ModulesPage} className="dashboard-item assignments-link">
              <h3>Modules</h3>
            </Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
