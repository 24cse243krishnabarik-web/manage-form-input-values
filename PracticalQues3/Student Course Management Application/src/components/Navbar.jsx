import { NavLink } from 'react-router-dom';
import { useStudent } from '../context/StudentContext';
import './Navbar.css';

export default function Navbar() {
  const { student } = useStudent();

  return (
    <nav className="navbar" id="main-navbar">
      <div className="nav-brand">
        <span className="nav-logo">🎓</span>
        <span className="nav-title">CourseHub</span>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} id="nav-home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} id="nav-courses">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} id="nav-about">
            About
          </NavLink>
        </li>
      </ul>

      <div className="nav-student" id="nav-student-info">
        <div className="student-avatar">{student.name.charAt(0)}</div>
        <div className="student-meta">
          <span className="student-name">{student.name}</span>
          <span className="student-roll">{student.rollNumber}</span>
        </div>
      </div>
    </nav>
  );
}
