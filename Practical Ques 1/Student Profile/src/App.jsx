import Student from './components/Student'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Student Profiles</h1>
        <p className="app-subtitle">
          Functional component demo &mdash; passing data via props
        </p>
      </header>

      <div className="students-grid">
        <Student
          name="Abhijeet Sharma"
          course="Full Stack Development"
          college="MIT World Peace University"
        />
        <Student
          name="Priya Deshmukh"
          course="Data Science"
          college="Pune Institute of Computer Technology"
        />
        <Student
          name="Rahul Patil"
          course="Artificial Intelligence"
          college="College of Engineering, Pune"
        />
      </div>
    </div>
  )
}

export default App
