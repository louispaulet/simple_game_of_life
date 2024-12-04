// App.js

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import GosperGliderGunPage from './pages/GosperGliderGunPage';
import LifePatternViewerPage from './pages/LifePatternViewerPage'; // Import LifePatternViewerPage
import DiagonalShipsPage from './pages/DiagonalShipsPage'; // Import new page

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gosper-glider-gun" element={<GosperGliderGunPage />} />
          <Route path="/patterns" element={<LifePatternViewerPage />} /> {/* New route for pattern explorer */}
          <Route path="/diagonal-ships" element={<DiagonalShipsPage />} /> {/* New route for diagonal ships */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
