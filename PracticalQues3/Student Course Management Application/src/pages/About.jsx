import { useStudent } from '../context/StudentContext';
import './About.css';

export default function About() {
  const { student, courses } = useStudent();

  return (
    <div className="about-page" id="about-page">
      <section className="about-hero">
        <div className="about-hero-glow"></div>
        <h1 className="about-heading">About CourseHub</h1>
        <p className="about-subtitle">
          Empowering students to discover, enroll, and excel in courses that shape their future.
        </p>
      </section>

      {/* Mission */}
      <section className="about-section" id="mission-section">
        <div className="about-card mission-card">
          <div className="mission-icon">🚀</div>
          <h2>Our Mission</h2>
          <p>
            CourseHub is a student-centric course management platform designed to streamline
            the academic experience. We believe every student deserves easy access to quality
            education with a seamless, modern interface.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="about-section" id="features-section">
        <h2 className="about-section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🧭</span>
            <h3>React Router Navigation</h3>
            <p>Seamless page transitions with client-side routing using React Router DOM for a SPA experience.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔗</span>
            <h3>Context API</h3>
            <p>Shared student state management across all components using React&apos;s built-in Context API.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📱</span>
            <h3>Dynamic Routes</h3>
            <p>Individual course pages with dynamic routing (/course/:id) for detailed course information.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Functional Components</h3>
            <p>Built entirely with modern React functional components, hooks, and JSX throughout.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="about-section" id="tech-stack-section">
        <h2 className="about-section-title">Technology Stack</h2>
        <div className="tech-grid">
          {['React 19', 'React Router v7', 'Context API', 'Vite', 'CSS3', 'JSX'].map((tech, idx) => (
            <div className="tech-tag" key={idx}>{tech}</div>
          ))}
        </div>
      </section>

      {/* Student Context Demo */}
      <section className="about-section" id="context-demo-section">
        <h2 className="about-section-title">Context API in Action</h2>
        <p className="about-description">
          The student information below is shared across all pages via React Context API.
          Changes made on any page (like enrolling in a course) are reflected everywhere instantly.
        </p>
        <div className="context-demo-card">
          <div className="context-row">
            <span className="context-label">Student Name</span>
            <span className="context-value">{student.name}</span>
          </div>
          <div className="context-row">
            <span className="context-label">Department</span>
            <span className="context-value">{student.department}</span>
          </div>
          <div className="context-row">
            <span className="context-label">Enrolled Courses</span>
            <span className="context-value">{student.enrolledCourses.length} of {courses.length}</span>
          </div>
          <div className="context-row">
            <span className="context-label">CGPA</span>
            <span className="context-value">{student.cgpa}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer" id="about-footer">
        <p>Built with ❤️ using React — Practical Question 3</p>
        <p className="footer-sub">Student Course Management Application</p>
      </footer>
    </div>
  );
}
