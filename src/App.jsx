import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import LoginPage from './Pages/LoginPage'
import CoursePage from './Pages/CoursePage'
import CourseDetails from './Pages/CourseDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
function App() {

  const [role, setrole] = useState("");

  return (
<>
      {/* Navbar */}

      {role && (
        <div>

          {role === "Student" && (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/courses">Courses</Link>
            </>
          )}

          {role === "Admin" && (
            <Link to="/admin">Admin</Link>
          )}

        </div>
      )}

      <div className="App">

        <Routes>

          {/* Login always accessible */}
          <Route path="/" element={<LoginPage setrole={setrole} />} />

          {/* Student routes */}
          {role === "Student" && (
            <>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/courses/:id" element={<CourseDetails />} />
            </>
          )}

          {/* Admin route */}
          {role === "Admin" && (
            <Route path="/admin" element={<AdminPage />} />
          )}

        </Routes>

      </div>
      </>
  );
}

export default App
