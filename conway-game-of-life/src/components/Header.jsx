// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/">
        <div className="flex items-center">
          {/* Logo redirects to homepage */}
          <img src={logo} alt="Logo" className="h-10 w-10 mr-3 cursor-pointer" />
          <h1 className="text-xl font-bold">Welcome to Conway's Game of Life</h1>
        </div>
      </Link>
      <nav className="flex space-x-4">
        {/* Link to the Gosper Glider Gun page */}
        <Link to="/gosper-glider-gun" className="text-blue-400 hover:underline">
          Gosper Glider Gun
        </Link>

        {/* New Link to Diagonal Ships page */}
        <Link to="/diagonal-ships" className="text-blue-400 hover:underline">
          Diagonal Ships
        </Link>

        {/* Link to the Pattern Explorer page */}
        <Link to="/patterns" className="text-blue-400 hover:underline">
          Pattern Explorer
        </Link>

        {/* Link to the About page */}
        <Link to="/about" className="text-blue-400 hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
