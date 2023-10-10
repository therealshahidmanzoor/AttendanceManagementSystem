import React, { useState } from 'react';
import axios from 'axios';
import { Container, Paper, Typography, TextField, Checkbox, Button, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import './styles/styles.css'; // Import the stylesheet

const AttendanceForm = () => {
  const [formData, setFormData] = useState({
    student_name: '',
    date: '',
    is_present: true,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/attendance', formData);
      console.log('Attendance record added:', response.data);
      setSuccessMessage('Attendance recorded successfully!');
      setOpenSnackbar(true);
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error('Error adding attendance record:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm" className="form-container">
      <Paper elevation={3} className="paper">
        <Typography variant="h4" align="center" gutterBottom>
          Attendance Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Student Name"
            name="student_name"
            value={formData.student_name}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            margin="normal"
          />
          <Checkbox
  name="is_present"
  checked={formData.is_present}
  onChange={() => setFormData({ ...formData, is_present: !formData.is_present })}
/>
<span>Present</span> {/* Add a label for "Present" */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
        <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="success">
            {successMessage}
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
};

export default AttendanceForm;
