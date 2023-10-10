import React from 'react';
import AttendanceForm from './components/AttendanceForm';
import AttendanceTable from './components/AttendanceTable';
import AttendanceView from './components/AttendanceView.js';

function App() {
  return (
    <div>
      {/* <AttendanceForm /> */}
      <AttendanceTable />
      <AttendanceView />
      {/* Other components and content */}
    </div>
  );
}

export default App;
