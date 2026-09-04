import { Link } from 'react-router-dom';
import styles from './StudentList.module.css';

function StudentList({ students }) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Registered Students</h1>
        <p className={styles.pageSubtitle}>
          View all students who have successfully registered
        </p>
        {students.length > 0 && (
          <div className={styles.countBadge}>
            🎓 {students.length} student{students.length !== 1 ? 's' : ''} registered
          </div>
        )}
      </div>

      {students.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📭</div>
          <h2 className={styles.emptyTitle}>No students yet</h2>
          <p className={styles.emptyText}>
            Register your first student to see them here.
          </p>
          <Link to="/" className={styles.emptyBtn}>
            ✏️ Register Now
          </Link>
        </div>
      ) : (
        <div className={styles.studentList}>
          {students.map((student, index) => (
            <div
              key={student.id}
              className={styles.studentCard}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={styles.avatar}>
                {student.name.charAt(0)}
              </div>
              <div className={styles.studentInfo}>
                <div className={styles.studentName}>{student.name}</div>
                <div className={styles.studentEmail}>{student.email}</div>
              </div>
              <div className={styles.courseBadge}>{student.course}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;
