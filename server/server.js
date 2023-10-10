const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the 'cors' middleware

const app = express();
const port = process.env.PORT || 5000; // Use port 5000

// Apply the 'cors' middleware to allow requests from all origins
app.use(cors());

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Create a MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',     // Your MySQL host
  user: 'root',          // MySQL username
  password: '',          // MySQL password
  database: 'attendanceSystem', // Your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Define a route to insert attendance records
app.post('/attendance', (req, res) => {
  const { student_name, date, is_present } = req.body;

  // Insert a new attendance record into the table
  const sql = 'INSERT INTO attendanceSystem (student_name, date, is_present) VALUES (?, ?, ?)';
  const values = [student_name, date, is_present];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting record:', err);
      res.status(500).json({ error: 'Error inserting record' });
    } else {
      console.log('Attendance record inserted:', result);
      res.status(201).json({ message: 'Attendance record inserted' });
    }
  });
});

// Define a route to fetch all attendance records
app.get('/attendance', (req, res) => {
  // Retrieve all attendance records from the table
  const sql = 'SELECT * FROM attendanceSystem';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching records:', err);
      res.status(500).json({ error: 'Error fetching records' });
    } else {
      console.log('Attendance records retrieved:', results);
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
