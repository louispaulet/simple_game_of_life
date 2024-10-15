import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaGlobe, FaGlideG, FaSpaceShuttle, FaHome } from 'react-icons/fa';

function About() {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-gray-900 text-white px-8">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          <FaInfoCircle className="mr-2" /> About Conway's Game of Life
        </h1>
        
        <p className="text-lg mb-4">
          Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
          It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.
        </p>

        <p className="text-lg mb-4">
          The Game of Life is renowned for creating complex structures, including gliders, spaceships, and glider guns
          that can emit an endless stream of gliders. Explore some of these amazing patterns on our dedicated pages:
        </p>

        {/* Link to the Gosper Glider Gun page */}
        <p className="text-lg mb-4 flex items-center">
          <FaGlideG className="mr-2" />
          The
          <Link to="/gosper-glider-gun" className="mx-1 text-blue-400 hover:underline">Gosper Glider Gun</Link>
          continuously emits gliders, which are small patterns that move diagonally across the grid.
        </p>

        {/* Link to the Diagonal Ships page */}
        <p className="text-lg mb-4 flex items-center">
          <FaSpaceShuttle className="mr-2" />
          Diagonal spaceships, such as the Glider and Light-weight Spaceship (LWSS), can be seen in action on the
          <Link to="/diagonal-ships" className="mx-1 text-blue-400 hover:underline">Diagonal Ships</Link> page.
        </p>

        <a 
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" 
          className="text-blue-400 hover:underline mb-4 flex items-center"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGlobe className="mr-2" /> Learn more on Wikipedia
        </a>

        {/* Link to the homepage */}
        <p className="text-lg mb-4 flex items-center">
          <FaHome className="mr-2" />
          You can also check out our
          <Link to="/" className="mx-1 text-blue-400 hover:underline">Homepage</Link>
          which displays a live simulation of the Game of Life.
        </p>
      </div>
    </div>
  );
}

export default About;
