import './Student.css'

function Student({ name, course, college }) {
  // Generate initials from the student name
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (
    <div className="student-card">
      <div className="student-avatar">
        <span className="student-initials">{initials}</span>
      </div>
      <div className="student-info">
        <h2 className="student-name">{name}</h2>
        <div className="student-detail">
          <span className="detail-label">Course</span>
          <span className="detail-value">{course}</span>
        </div>
        <div className="student-detail">
          <span className="detail-label">College</span>
          <span className="detail-value">{college}</span>
        </div>
      </div>
    </div>
  )
}

export default Student
