// LifePatternViewerPage.jsx

import React from 'react';
import { FaLifeRing, FaInfoCircle } from 'react-icons/fa'; // Importing icons for visual effect
import LifePatternViewer from '../components/LifePatternViewerComponent';

const LifePatternViewerPage = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl text-blue-400 mb-4 flex items-center">
        <FaLifeRing className="mr-2" /> Conway's Game of Life Explorer
      </h1>
      <p className="max-w-3xl text-left text-lg mb-6">
        Welcome to the interactive exploration of <span className="text-blue-400">Conway's Game of Life</span>, a cellular automaton devised by mathematician John Horton Conway. This simulation showcases how simple rules can lead to complex and mesmerizing behaviors.
      </p>
      <p className="max-w-3xl text-left text-lg mb-6">
        Select different patterns from the menu below to see how they evolve over time. Each pattern demonstrates unique properties, from oscillators that repeat after a certain number of generations to methuselahs that take thousands of generations to stabilize.
      </p>
      <p className="max-w-3xl text-left text-lg mb-6">
        Dive in and witness the beauty of emergent complexity from simplicity!
      </p>
      <div className="w-full mt-6">
        <LifePatternViewer />
      </div>
      <p className="max-w-3xl text-left text-lg mt-6 flex items-center">
        <FaInfoCircle className="mr-2" /> Learn more about Conway's Game of Life on the
        <a
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline ml-1"
        >
          Wikipedia page
        </a>
        .
      </p>
    </div>
  );
};

export default LifePatternViewerPage;
