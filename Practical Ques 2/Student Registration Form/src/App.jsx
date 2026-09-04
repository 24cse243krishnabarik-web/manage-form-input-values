import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationForm from './pages/RegistrationForm';
import StudentList from './pages/StudentList';

function App() {
  // useState to manage the list of registered students
  const [students, setStudents] = useState([]);

  // Callback passed to the form; adds a new student to state
  const handleRegister = (student) => {
    setStudents((prev) => [student, ...prev]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<RegistrationForm onRegister={handleRegister} />}
        />
        <Route
          path="/students"
          element={<StudentList students={students} />}
        />
      </Routes>
    </>
  );
}

export default App;
