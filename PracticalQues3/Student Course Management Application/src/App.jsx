import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="app-shell" id="app-shell">
          <Navbar />
          <main className="app-main" id="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
