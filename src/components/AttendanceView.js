import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AttendanceForm from './AttendanceForm';
import AttendanceTable from './AttendanceTable';

const AttendanceView = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/attendance');
        setAttendanceData(response.data);
        console.log('Attendance data fetched:', response.data);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendanceData();
  }, []);

  return (
    <div className="attendance-view-container">
      <div className="attendance-form-container">
        <AttendanceForm />
      </div>
      <div className="attendance-table-container">
        {attendanceData.length > 0 && <AttendanceTable attendanceData={attendanceData} />}
      </div>
    </div>
  );
};

export default AttendanceView;
