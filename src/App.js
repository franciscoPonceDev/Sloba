import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AdminAuction from './pages/AdminAuction';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminAuction />} />
      </Routes>
    </>
  );
}

export default App;
