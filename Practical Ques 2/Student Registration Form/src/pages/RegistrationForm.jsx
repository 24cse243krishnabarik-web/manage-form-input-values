import { useState } from 'react';
import styles from './RegistrationForm.module.css';

const COURSES = [
  'Select a course',
  'Computer Science',
  'Information Technology',
  'Electronics & Communication',
  'Mechanical Engineering',
  'Civil Engineering',
  'Data Science',
];

function RegistrationForm({ onRegister }) {
  // useState to manage form input values (controlled components)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState(null);

  // onChange handler for controlled components
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.course || formData.course === 'Select a course') {
      newErrors.course = 'Please select a course';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const student = {
      ...formData,
      id: Date.now(),
      registeredAt: new Date().toLocaleString(),
    };

    onRegister(student);
    setLastSubmitted(student);
    setSubmitted(true);

    // Reset form
    setFormData({ name: '', email: '', course: '' });
    setErrors({});

    // Hide success message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Registration Open
        </div>
        <h1 className={styles.pageTitle}>Student Registration</h1>
        <p className={styles.pageSubtitle}>
          Fill in the details below to register as a new student
        </p>
      </div>

      {/* Registration Form */}
      <div className={styles.formCard}>
        <form onSubmit={handleSubmit} noValidate>
          {/* Name Field — Controlled Component */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Full Name
            </label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>👤</span>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                autoComplete="name"
              />
            </div>
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>

          {/* Email Field — Controlled Component */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>✉️</span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                autoComplete="email"
              />
            </div>
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          {/* Course Field — Controlled Component */}
          <div className={styles.formGroup}>
            <label htmlFor="course" className={styles.label}>
              Course
            </label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>📚</span>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`${styles.input} ${styles.select} ${errors.course ? styles.inputError : ''}`}
              >
                {COURSES.map((c) => (
                  <option key={c} value={c === 'Select a course' ? '' : c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            {errors.course && <span className={styles.errorText}>{errors.course}</span>}
          </div>

          <button type="submit" className={styles.submitBtn}>
            Register Student ✨
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <div className={styles.successMsg}>
            <span className={styles.successIcon}>✅</span>
            Student registered successfully!
          </div>
        )}
      </div>

      {/* Display Submitted Student Details */}
      {lastSubmitted && (
        <div className={styles.previewSection}>
          <h2 className={styles.previewTitle}>📋 Last Registered Student</h2>
          <div className={styles.previewCard}>
            <div className={styles.previewRow}>
              <div className={styles.previewIcon}>👤</div>
              <div className={styles.previewInfo}>
                <div className={styles.previewLabel}>Name</div>
                <div className={styles.previewValue}>{lastSubmitted.name}</div>
              </div>
            </div>
            <div className={styles.previewRow}>
              <div className={styles.previewIcon}>✉️</div>
              <div className={styles.previewInfo}>
                <div className={styles.previewLabel}>Email</div>
                <div className={styles.previewValue}>{lastSubmitted.email}</div>
              </div>
            </div>
            <div className={styles.previewRow}>
              <div className={styles.previewIcon}>📚</div>
              <div className={styles.previewInfo}>
                <div className={styles.previewLabel}>Course</div>
                <div className={styles.previewValue}>{lastSubmitted.course}</div>
              </div>
            </div>
            <div className={styles.previewRow}>
              <div className={styles.previewIcon}>🕐</div>
              <div className={styles.previewInfo}>
                <div className={styles.previewLabel}>Registered At</div>
                <div className={styles.previewValue}>{lastSubmitted.registeredAt}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
