import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import HomeNavbar from './components/Navbar';


function App() {

  return (
    <>
    <Router>
    <HomeNavbar/>  
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
