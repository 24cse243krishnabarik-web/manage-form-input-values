import { createContext, useContext, useState } from 'react';

const StudentContext = createContext();

const COURSES_DATA = [
  {
    id: 1,
    title: 'Introduction to React',
    instructor: 'Dr. Sarah Chen',
    duration: '8 weeks',
    level: 'Beginner',
    credits: 3,
    description:
      'Master the fundamentals of React including components, state management, hooks, and the virtual DOM. Build real-world applications from scratch.',
    topics: ['JSX & Components', 'State & Props', 'Hooks', 'Event Handling', 'Conditional Rendering'],
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    instructor: 'Prof. Michael Torres',
    duration: '10 weeks',
    level: 'Intermediate',
    credits: 4,
    description:
      'Deep dive into advanced JavaScript concepts including closures, prototypes, async/await, generators, and design patterns for scalable applications.',
    topics: ['Closures & Scope', 'Prototypes', 'Async/Await', 'ES6+ Features', 'Design Patterns'],
    color: '#f59e0b',
  },
  {
    id: 3,
    title: 'Full-Stack Development',
    instructor: 'Dr. Emily Rodriguez',
    duration: '12 weeks',
    level: 'Advanced',
    credits: 5,
    description:
      'Build complete web applications with React frontend and Node.js backend. Learn database design, REST APIs, authentication, and deployment.',
    topics: ['Node.js & Express', 'MongoDB', 'REST APIs', 'Authentication', 'Deployment'],
    color: '#10b981',
  },
  {
    id: 4,
    title: 'UI/UX Design Principles',
    instructor: 'Prof. Alex Kim',
    duration: '6 weeks',
    level: 'Beginner',
    credits: 2,
    description:
      'Learn the principles of user interface and user experience design. Create wireframes, prototypes, and design systems that delight users.',
    topics: ['Design Thinking', 'Wireframing', 'Prototyping', 'Accessibility', 'Color Theory'],
    color: '#ec4899',
  },
  {
    id: 5,
    title: 'Data Structures & Algorithms',
    instructor: 'Dr. James Park',
    duration: '14 weeks',
    level: 'Intermediate',
    credits: 4,
    description:
      'Master essential data structures and algorithms. Prepare for technical interviews with hands-on problem solving and complexity analysis.',
    topics: ['Arrays & Linked Lists', 'Trees & Graphs', 'Sorting & Searching', 'Dynamic Programming', 'Big-O Analysis'],
    color: '#8b5cf6',
  },
  {
    id: 6,
    title: 'Cloud Computing with AWS',
    instructor: 'Prof. Lisa Wang',
    duration: '10 weeks',
    level: 'Advanced',
    credits: 4,
    description:
      'Explore cloud architecture with Amazon Web Services. Learn to deploy, scale, and manage applications in the cloud with best practices.',
    topics: ['EC2 & S3', 'Lambda Functions', 'CloudFormation', 'Docker & ECS', 'CI/CD Pipelines'],
    color: '#06b6d4',
  },
];

export function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    name: 'Abhijeet Sharma',
    rollNumber: 'CS2024-042',
    email: 'abhijeet.sharma@university.edu',
    department: 'Computer Science',
    semester: 4,
    cgpa: 8.7,
    enrolledCourses: [1, 3],
  });

  const enrollCourse = (courseId) => {
    setStudent((prev) => {
      if (prev.enrolledCourses.includes(courseId)) return prev;
      return { ...prev, enrolledCourses: [...prev.enrolledCourses, courseId] };
    });
  };

  const unenrollCourse = (courseId) => {
    setStudent((prev) => ({
      ...prev,
      enrolledCourses: prev.enrolledCourses.filter((id) => id !== courseId),
    }));
  };

  const getCourse = (id) => COURSES_DATA.find((c) => c.id === Number(id));

  return (
    <StudentContext.Provider
      value={{ student, courses: COURSES_DATA, enrollCourse, unenrollCourse, getCourse }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  const context = useContext(StudentContext);
  if (!context) throw new Error('useStudent must be used within a StudentProvider');
  return context;
}
