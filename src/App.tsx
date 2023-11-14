import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import BoardStocks from './components/BoardStocks/BoardStocks';
import CameraUpload from './components/Camera/CameraUpload';
import LocateMe from './components/LocateMe/LocateMe';
import 'leaflet/dist/leaflet.css';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/board-stocks" element={<BoardStocks />} />
        <Route path="/camera-test" element={<CameraUpload />} />
        <Route path="/locate-me" element={<LocateMe />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
