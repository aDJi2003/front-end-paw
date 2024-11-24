import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Start from './pages/Start'
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import ArtistDetail from './pages/ArtistDetail';
import SongDetail from './pages/SongDetail';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artist/:artistName" element={<ArtistDetail />} />
        <Route path="/song/:songTitle" element={<SongDetail />} />
      </Routes>
    </Router>
  </StrictMode>,
)
