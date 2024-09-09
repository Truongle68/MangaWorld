import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import HomeNavbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


function App() {

  return (
    <>
    <HomeNavbar/>  
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/regis' element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
