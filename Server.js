
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const mysql = require('mysql2/promise'); 

const app = express();
const port = 3001;

app.use(cors()); 
app.use(bodyParser.json());


const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'web_project',
};


app.post('/signup', async (req, res) => {
  const { studentfullName, studentemail, studentgender, password } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);

    const [results] = await connection.query(
      'INSERT INTO users (studentfullName, studentemail, studentgender, password) VALUES (?, ?, ?, ?)',
      [studentfullName, studentemail, studentgender, password]
    );

    connection.end();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
app.post('/login', async (req, res) => {
  const { useremail, password } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.query(
      'SELECT * FROM users WHERE studentemail = ? AND password = ?',
      [useremail, password]
    );

    connection.end();

    if (results.length === 1) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Login failed' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
