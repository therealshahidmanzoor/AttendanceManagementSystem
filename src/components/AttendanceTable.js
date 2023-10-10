import React from 'react';
import './styles/styles.css'; // Import the stylesheet

const AttendanceTable = ({ attendanceData }) => {
  // Check if attendanceData is defined before mapping over it
  if (!attendanceData) {
    return <div></div>; // You can replace this with a loading indicator
  }

  return (
    <div>
      <h2>Attendance Records</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Date</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record) => (
            <tr key={record.id}>
              <td>{record.student_name}</td>
              <td>{record.date}</td>
              <td>{record.is_present ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
