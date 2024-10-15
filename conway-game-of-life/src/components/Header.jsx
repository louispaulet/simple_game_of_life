import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

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
      <nav>
        {/* Link to the about page */}
        <Link to="/about" className="text-blue-400 hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
