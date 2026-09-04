import { Link } from 'react-router-dom';
import { useStudent } from '../context/StudentContext';
import './Courses.css';

export default function Courses() {
  const { courses, student, enrollCourse, unenrollCourse } = useStudent();

  return (
    <div className="courses-page" id="courses-page">
      <section className="courses-header">
        <div className="courses-header-glow"></div>
        <h1 className="courses-heading">Course Catalog</h1>
        <p className="courses-subtitle">
          Explore our curated selection of courses designed to accelerate your learning journey.
        </p>
        <div className="courses-filters">
          <span className="filter-tag active">All ({courses.length})</span>
          <span className="filter-tag">Beginner ({courses.filter(c => c.level === 'Beginner').length})</span>
          <span className="filter-tag">Intermediate ({courses.filter(c => c.level === 'Intermediate').length})</span>
          <span className="filter-tag">Advanced ({courses.filter(c => c.level === 'Advanced').length})</span>
        </div>
      </section>

      <section className="courses-grid" id="courses-grid">
        {courses.map((course) => {
          const isEnrolled = student.enrolledCourses.includes(course.id);
          return (
            <div className="course-card" key={course.id} style={{ '--course-color': course.color }}>
              <div className="course-card-accent"></div>
              <div className="course-card-content">
                <div className="course-card-top">
                  <span className="course-level" style={{ background: `${course.color}20`, color: course.color }}>
                    {course.level}
                  </span>
                  <span className="course-credits">{course.credits} Credits</span>
                </div>
                <Link to={`/course/${course.id}`} className="course-title-link">
                  <h3 className="course-title">{course.title}</h3>
                </Link>
                <p className="course-instructor">{course.instructor}</p>
                <p className="course-desc">{course.description}</p>
                <div className="course-topics">
                  {course.topics.slice(0, 3).map((topic, idx) => (
                    <span className="topic-chip" key={idx}>{topic}</span>
                  ))}
                  {course.topics.length > 3 && (
                    <span className="topic-chip more">+{course.topics.length - 3}</span>
                  )}
                </div>
                <div className="course-card-bottom">
                  <span className="course-duration">⏱ {course.duration}</span>
                  <div className="course-card-actions">
                    <Link to={`/course/${course.id}`} className="btn-view" id={`view-course-${course.id}`}>
                      Details
                    </Link>
                    <button
                      className={`btn-enroll ${isEnrolled ? 'enrolled' : ''}`}
                      onClick={() => isEnrolled ? unenrollCourse(course.id) : enrollCourse(course.id)}
                      id={`enroll-course-${course.id}`}
                    >
                      {isEnrolled ? '✓ Enrolled' : 'Enroll'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
