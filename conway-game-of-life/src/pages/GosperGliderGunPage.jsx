import React from 'react';
import GosperGliderGunComponent from '../components/GosperGliderGunComponent';

const GosperGliderGunPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl text-blue-400 mb-4">Gosper Glider Gun Simulation</h1>
      <p className="max-w-2xl text-center text-lg mb-6 px-4">
        A <strong>glider</strong> is a small pattern that travels across the grid in Conway's Game of Life. 
        It consists of 5 cells that move diagonally and repeat in a periodic cycle. 
        Gliders are significant because they can be used to transmit information and interact with other patterns.
      </p>
      <p className="max-w-2xl text-center text-lg mb-6 px-4">
        The Gosper Glider Gun is a well-known pattern that continuously creates gliders. 
        Learn more about this fascinating structure on its 
        <a 
          href="https://en.wikipedia.org/wiki/Gun_(cellular_automaton)" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline ml-1"
        >
          Wikipedia page
        </a>.
      </p>
      <GosperGliderGunComponent />
    </div>
  );
};

export default GosperGliderGunPage;
