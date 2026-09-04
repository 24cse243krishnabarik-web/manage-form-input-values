import { Link } from 'react-router-dom';
import { useStudent } from '../context/StudentContext';
import './Home.css';

export default function Home() {
  const { student, courses } = useStudent();
  const enrolledCourses = courses.filter((c) => student.enrolledCourses.includes(c.id));

  return (
    <div className="home-page" id="home-page">
      {/* Hero Section */}
      <section className="hero-section" id="hero-section">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <span className="hero-badge">Student Dashboard</span>
          <h1 className="hero-heading">
            Welcome back,
            <br />
            <span className="hero-name">{student.name}</span>
          </h1>
          <p className="hero-subtitle">
            Manage your courses, track your progress, and explore new learning opportunities.
          </p>
          <div className="hero-actions">
            <Link to="/courses" className="btn btn-primary" id="explore-courses-btn">
              Explore Courses
            </Link>
            <Link to="/about" className="btn btn-secondary" id="learn-more-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" id="stats-section">
        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <span className="stat-value">{student.enrolledCourses.length}</span>
          <span className="stat-label">Enrolled Courses</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🏆</span>
          <span className="stat-value">{student.cgpa}</span>
          <span className="stat-label">Current CGPA</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">📖</span>
          <span className="stat-value">Sem {student.semester}</span>
          <span className="stat-label">Current Semester</span>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🎯</span>
          <span className="stat-value">{courses.length}</span>
          <span className="stat-label">Available Courses</span>
        </div>
      </section>

      {/* Student Profile Card */}
      <section className="profile-section" id="student-profile-section">
        <h2 className="section-title">Student Profile</h2>
        <div className="profile-card">
          <div className="profile-avatar-large">
            {student.name.charAt(0)}
          </div>
          <div className="profile-details">
            <div className="profile-row">
              <span className="profile-label">Full Name</span>
              <span className="profile-value">{student.name}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Roll Number</span>
              <span className="profile-value">{student.rollNumber}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Email</span>
              <span className="profile-value">{student.email}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Department</span>
              <span className="profile-value">{student.department}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Semester</span>
              <span className="profile-value">{student.semester}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">CGPA</span>
              <span className="profile-value">{student.cgpa}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enrolled Courses */}
      <section className="enrolled-section" id="enrolled-courses-section">
        <h2 className="section-title">Your Enrolled Courses</h2>
        {enrolledCourses.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <p>You haven&apos;t enrolled in any courses yet.</p>
            <Link to="/courses" className="btn btn-primary">Browse Courses</Link>
          </div>
        ) : (
          <div className="enrolled-grid">
            {enrolledCourses.map((course) => (
              <Link to={`/course/${course.id}`} key={course.id} className="enrolled-card" style={{ '--card-accent': course.color }}>
                <div className="enrolled-card-header">
                  <span className="enrolled-badge" style={{ background: course.color }}>{course.level}</span>
                  <span className="enrolled-credits">{course.credits} Credits</span>
                </div>
                <h3 className="enrolled-title">{course.title}</h3>
                <p className="enrolled-instructor">by {course.instructor}</p>
                <div className="enrolled-footer">
                  <span className="enrolled-duration">⏱ {course.duration}</span>
                  <span className="enrolled-view">View →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
