import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">About Conway's Game of Life</h1>
      <p className="text-lg text-center max-w-2xl mb-4">
        Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. 
      </p>
      <a 
        href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" 
        className="text-blue-400 hover:underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Learn more on Wikipedia
      </a>
    </div>
  );
}

export default About;
