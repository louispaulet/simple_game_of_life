import React, { useRef, useEffect, useState } from 'react';
import GameOfLifeEngine from '../engine/GameOfLifeEngine';

const DiagonalShipsComponent = () => {
  const canvasRef = useRef(null);
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const engineInstance = new GameOfLifeEngine(canvasRef.current);
      setEngine(engineInstance);

      // Initialize the ships
      engineInstance.grid = engineInstance.createGrid();
      setupDiagonalShips(engineInstance.grid);

      engineInstance.drawGrid();

      engineInstance.gameLoop();

      // Handle window resizing
      const handleResize = () => {
        engineInstance.initCanvas();
        setupDiagonalShips(engineInstance.grid);
        engineInstance.drawGrid();
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

const placeShip = (grid, shipCoordinates, xOffset, yOffset) => {
  shipCoordinates.forEach(([x, y]) => {
    grid[x + xOffset][y + yOffset] = 1;
  });
};

const setupDiagonalShips = (grid) => {
  // Glider
  const glider = [
    [1, 0], [2, 1], [0, 2], [1, 2], [2, 2]
  ];
  placeShip(grid, glider, 5, 5);

  // Light-weight Spaceship (LWSS)
  const lwss = [
    [0, 1], [3, 1], [4, 2], [0, 3], [4, 3], [1, 4], [2, 4], [3, 4], [4, 4]
  ];
  placeShip(grid, lwss, 20, 5);

  // Middle-weight Spaceship (MWSS)
  const mwss = [
    [0, 1], [3, 1], [4, 2], [0, 3], [4, 3], [1, 4], [2, 4], [3, 4], [4, 4], [2, 0]
  ];
  placeShip(grid, mwss, 35, 30);

  // Heavy-weight Spaceship (HWSS)
  const hwss = [
    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [0, 2], [4, 2], [4, 3], [0, 3], [1, 4], [2, 4], [3, 4], [4, 4]
  ];
  placeShip(grid, hwss, 50, 100);

  // Custom Diagonal Ship
  const customShip = [
    [1, 0], [3, 0], [4, 1], [0, 2], [4, 2], [1, 3], [2, 3], [3, 3], [4, 3]
  ];
  placeShip(grid, customShip, 65, 5);

  // New Custom Diagonal (Smaller pattern)
  const customDiagonal = [
    [0, 1], [1, 2], [2, 0], [2, 1], [2, 2]
  ];
  placeShip(grid, customDiagonal, 80, 5);

  // New Custom Diagonal Ship (Larger Glider-like)
  const largeDiagonalShip = [
    [1, 0], [2, 1], [0, 2], [1, 2], [2, 2], [3, 3], [4, 3], [5, 4], [3, 5]
  ];
  placeShip(grid, largeDiagonalShip, 95, 5);
};



  const startNewSimulation = () => {
    if (engine) {
      engine.grid = engine.createGrid();
      setupDiagonalShips(engine.grid);
      engine.drawGrid();
      engine.gameLoop();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <canvas ref={canvasRef} className="border-2 border-blue-400 bg-gray-800 mx-auto my-5"></canvas>
      <button 
        onClick={startNewSimulation} 
        className="mt-3 px-6 py-3 text-lg bg-blue-400 text-gray-900 rounded hover:bg-blue-300"
      >
        Start New Simulation
      </button>
    </div>
  );
};

export default DiagonalShipsComponent;
