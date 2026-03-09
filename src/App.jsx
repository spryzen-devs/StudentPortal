import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import LoginPage from './Pages/LoginPage'
import CoursePage from './Pages/CoursePage'
import CourseDetails from './Pages/CourseDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/courses">Courses</Link>
      </div>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
          </Routes>
        </div>
    </>
  )
}

export default App
