
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    studentfullName: '',
    studentemail: '',
    studentgender: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', formData);
      console.log(response.data.message);
      navigate('/login'); 
    } catch (error) {
      console.error('Error during signup:', error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>Student Registration Form</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="studentfullName">Student Full Name:</label>
          <input
            type="text"
            id="studentfullName"
            name="studentfullName"
            value={formData.studentfullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="studentemail">Email:</label>
          <input
            type="email"
            id="studentemail"
            name="studentemail"
            value={formData.studentemail}
            onChange={handleChange}
            required
          />

          <label htmlFor="studentgender">Student Gender:</label>
          <input
            type="text"
            id="studentgender"
            name="studentgender"
            value={formData.studentgender}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="studentpassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
