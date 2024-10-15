import React from 'react';
import { FaGlideG, FaInfoCircle } from 'react-icons/fa'; // Importing icons for visual effect
import GosperGliderGunComponent from '../components/GosperGliderGunComponent';

const GosperGliderGunPage = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl text-blue-400 mb-4 flex items-center">
        <FaGlideG className="mr-2" /> Gosper Glider Gun Simulation
      </h1>
      <p className="max-w-3xl text-left text-lg mb-6">
        The <span className="text-blue-400">glider</span> is a small but essential pattern in Conway's Game of Life, consisting of 5 cells that travel diagonally across the grid in a repeating cycle. Gliders can interact with other patterns, and they are often used to transmit information across the grid.
      </p>
      <p className="max-w-3xl text-left text-lg mb-6">
        The <span className="text-green-400">Gosper Glider Gun</span> is one of the most famous configurations, as it continuously produces gliders. This intriguing structure shows how complex behaviors can emerge from simple rules.
      </p>
      <p className="max-w-3xl text-left text-lg mb-6 flex items-center">
        <FaInfoCircle className="mr-2" /> Learn more about the Gosper Glider Gun on its
        <a 
          href="https://en.wikipedia.org/wiki/Gun_(cellular_automaton)" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline ml-1"
        >
          Wikipedia page
        </a>.
      </p>
      <div className="w-full mt-6">
        <GosperGliderGunComponent />
      </div>
    </div>
  );
};

export default GosperGliderGunPage;
