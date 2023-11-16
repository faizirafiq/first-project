import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResultPage.css';

function ResultPage() {
  const [results, setResults] = useState([]);
  const [newResult, setNewResult] = useState({ assignment: '', marks: '' });

  const handleResultChange = (event) => {
    const { name, value } = event.target;
    setNewResult((prevResult) => ({
      ...prevResult,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const resultData = {
      assignment: newResult.assignment,
      marks: newResult.marks,
    };

    setResults((prevResults) => [...prevResults, resultData]);

    setNewResult({ assignment: '', marks: '' });
  };

  return (
    <div className="center-container">
      <div className="results-container">
        <h2>Results</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="assignment">Assignment:</label>
            <input
              type="text"
              id="assignment"
              name="assignment"
              value={newResult.assignment}
              onChange={handleResultChange}
              placeholder="Assignment name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="marks">Marks:</label>
            <input
              type="number"
              id="marks"
              name="marks"
              value={newResult.marks}
              onChange={handleResultChange}
              placeholder="Marks obtained"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Add Result
          </button>
        </form>
        <table className="results-table">
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.assignment}</td>
                <td>{result.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/dashboard">Go to Other Page</Link>
      </div>
    </div>
  );
}

export default ResultPage;
