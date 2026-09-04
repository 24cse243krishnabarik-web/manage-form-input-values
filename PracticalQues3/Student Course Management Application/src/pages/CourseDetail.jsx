import { useParams, Link } from 'react-router-dom';
import { useStudent } from '../context/StudentContext';
import './CourseDetail.css';

export default function CourseDetail() {
  const { id } = useParams();
  const { getCourse, student, enrollCourse, unenrollCourse } = useStudent();
  const course = getCourse(id);

  if (!course) {
    return (
      <div className="course-not-found" id="course-not-found">
        <span className="not-found-icon">🔍</span>
        <h2>Course Not Found</h2>
        <p>The course you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  const isEnrolled = student.enrolledCourses.includes(course.id);

  return (
    <div className="course-detail" id={`course-detail-${course.id}`}>
      {/* Breadcrumb */}
      <nav className="breadcrumb" id="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <Link to="/courses" className="breadcrumb-link">Courses</Link>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-current">{course.title}</span>
      </nav>

      {/* Detail Header */}
      <section className="detail-hero" style={{ '--detail-color': course.color }}>
        <div className="detail-hero-glow" style={{ background: `radial-gradient(ellipse, ${course.color}18 0%, transparent 70%)` }}></div>
        <div className="detail-hero-content">
          <div className="detail-meta-row">
            <span className="detail-level" style={{ background: `${course.color}20`, color: course.color }}>
              {course.level}
            </span>
            <span className="detail-id">Course #{course.id}</span>
          </div>
          <h1 className="detail-title">{course.title}</h1>
          <p className="detail-instructor">Taught by <strong>{course.instructor}</strong></p>
        </div>
      </section>

      {/* Content */}
      <section className="detail-body">
        <div className="detail-main">
          <div className="detail-section">
            <h2 className="detail-section-title">About This Course</h2>
            <p className="detail-description">{course.description}</p>
          </div>

          <div className="detail-section">
            <h2 className="detail-section-title">What You&apos;ll Learn</h2>
            <div className="topics-list">
              {course.topics.map((topic, idx) => (
                <div className="topic-item" key={idx}>
                  <span className="topic-number" style={{ background: `${course.color}20`, color: course.color }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="topic-text">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="detail-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-info">
              <div className="sidebar-row">
                <span className="sidebar-label">Duration</span>
                <span className="sidebar-value">{course.duration}</span>
              </div>
              <div className="sidebar-row">
                <span className="sidebar-label">Level</span>
                <span className="sidebar-value">{course.level}</span>
              </div>
              <div className="sidebar-row">
                <span className="sidebar-label">Credits</span>
                <span className="sidebar-value">{course.credits}</span>
              </div>
              <div className="sidebar-row">
                <span className="sidebar-label">Instructor</span>
                <span className="sidebar-value">{course.instructor}</span>
              </div>
            </div>
            <button
              className={`sidebar-enroll-btn ${isEnrolled ? 'enrolled' : ''}`}
              onClick={() => isEnrolled ? unenrollCourse(course.id) : enrollCourse(course.id)}
              id={`detail-enroll-${course.id}`}
            >
              {isEnrolled ? '✓ Enrolled — Click to Unenroll' : 'Enroll in This Course'}
            </button>
            {isEnrolled && (
              <p className="enrolled-note">You are currently enrolled in this course.</p>
            )}
          </div>

          {/* Student Info */}
          <div className="sidebar-card student-sidebar">
            <h3 className="sidebar-card-title">Student Info</h3>
            <div className="sidebar-student">
              <div className="sidebar-avatar">{student.name.charAt(0)}</div>
              <div>
                <p className="sidebar-student-name">{student.name}</p>
                <p className="sidebar-student-roll">{student.rollNumber}</p>
              </div>
            </div>
            <div className="sidebar-row">
              <span className="sidebar-label">Department</span>
              <span className="sidebar-value">{student.department}</span>
            </div>
            <div className="sidebar-row">
              <span className="sidebar-label">CGPA</span>
              <span className="sidebar-value">{student.cgpa}</span>
            </div>
          </div>
        </aside>
      </section>

      {/* Back Link */}
      <div className="detail-back">
        <Link to="/courses" className="back-link" id="back-to-courses">← Back to All Courses</Link>
      </div>
    </div>
  );
}
