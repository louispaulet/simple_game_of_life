import React from 'react';
import DiagonalShipsComponent from '../components/DiagonalShipsComponent';

const DiagonalShipsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl text-blue-400 mb-4">Diagonal Ships Simulation</h1>
      <p className="max-w-2xl text-center text-lg mb-6 px-4">
        In Conway's Game of Life, diagonal ships are patterns that move diagonally across the grid. The most famous is the glider, but there are also other types of spaceships such as the Light-weight Spaceship (LWSS) and custom designs.
      </p>
      <p className="max-w-2xl text-center text-lg mb-6 px-4">
        Watch how these ships move across the grid and interact with each other.
      </p>
      <DiagonalShipsComponent />
    </div>
  );
};

export default DiagonalShipsPage;
