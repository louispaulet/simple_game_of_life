import React from 'react';
import { FaSpaceShuttle, FaGlideG } from 'react-icons/fa'; // Importing icons for visual effect
import DiagonalShipsComponent from '../components/DiagonalShipsComponent';

const DiagonalShipsPage = () => {
  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl text-blue-400 mb-4 flex items-center">
        <FaSpaceShuttle className="mr-2" /> Diagonal Ships Simulation
      </h1>
      <p className="max-w-3xl text-left text-lg mb-6">
        In Conway's Game of Life, diagonal ships are fascinating patterns that traverse the grid in a diagonal direction. One of the most well-known is the <span className="text-blue-400">Glider</span> <FaGlideG className="inline" />, a simple yet powerful example of a moving spaceship.
      </p>
      <p className="max-w-3xl text-left text-lg mb-6">
        Other types of spaceships, such as the <span className="text-green-400">Light-weight Spaceship (LWSS)</span>, also move across the grid. These patterns demonstrate how simple rules can create complex behavior, leading to beautiful, dynamic movements.
      </p>
      <p className="max-w-3xl text-left text-lg mb-6">
        Watch as these ships move, interact, and create fascinating emergent behavior within the grid.
      </p>
      <div className="w-full mt-6">
        <DiagonalShipsComponent />
      </div>
    </div>
  );
};

export default DiagonalShipsPage;
