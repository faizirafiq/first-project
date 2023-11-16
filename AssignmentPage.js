import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AssignmentPage.css';

function AssignmentPage() {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAssignmentChange = event => {
    setNewAssignment(event.target.value);
  };

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const assignmentData = {
      assignment: newAssignment,
      file: selectedFile
    };

    // Update assignments state with the new assignment data
    setAssignments(prevAssignments => [...prevAssignments, assignmentData]);

    // Clear input fields
    setNewAssignment('');
    setSelectedFile(null);
  };

  return (
    <div className="assignment-container">
      <h2>Assignments</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="assignment">Assignment:</label>
        <input
          type="text"
          id="assignment"
          value={newAssignment}
          onChange={handleAssignmentChange}
          required
        />
        <label htmlFor="file">Upload File:</label>
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          required
        />
        <button type="submit">Submit Assignment</button>
      </form>
      <table className="assignment-table">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td>{assignment.assignment}</td>
              <td>{assignment.file?.name || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/results">Go to Other Page</Link>
    </div>
  );
}

export default AssignmentPage;
