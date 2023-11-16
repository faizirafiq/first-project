
import React from 'react';
import { Route , Routes, BrowserRouter} from 'react-router-dom';
import LoginPage from './LoginPage';
import RegistrationForm from './RegistrationForm';
import DashboardPage from './DashBoardPage';
import AssignmentPage from './AssignmentPage';
import ResultPage from './ResultPage'; 
import ClassesPage from './ClassesPage';
import ModulesPage from './ModulesPage';
import PortfolioPage from './PortfolioPage';
import AboutUsPage from './AboutUsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
        <Route path="/login" element={<LoginPage />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/assignment" element={<AssignmentPage />} />
          <Route path="/results" element={<ResultPage />} /> 
          <Route path='/Modules' element={<ModulesPage/>}/>
          <Route path='/Portfolio' element={<PortfolioPage/>}/>
          <Route path='AboutUs' element={<AboutUsPage/>}/>
          <Route path='Classes' element={<ClassesPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
