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
import Profile from './pages/Profile';
import Song from './pages/Song';
import Favorite from './pages/Favorite';
import Setting from './pages/Setting';
import Playlist from './pages/Playlist';
import Artist from './pages/Artist';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/artist/:artistName" element={<ArtistDetail />} />
        {/* <Route path="/song/:songTitle" element={<SongDetail />} /> */}
        <Route path="/song" element={<Song />} />
        <Route path="/song/:songId" element={<SongDetail />} />
      </Routes>
    </Router>
  </StrictMode>,
)
