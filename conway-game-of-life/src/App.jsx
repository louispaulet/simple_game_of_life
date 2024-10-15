import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About'; 
import GosperGliderGun from './pages/GosperGliderGun'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Routing logic */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gosper-glider-gun" element={<GosperGliderGun />} /> {/* New route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
