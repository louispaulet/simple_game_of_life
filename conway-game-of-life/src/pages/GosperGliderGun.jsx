import React, { useRef, useEffect, useState } from 'react';
import GameOfLifeEngine from '../engine/GameOfLifeEngine'; // Reuse the engine

function GosperGliderGun() {
  const canvasRef = useRef(null);
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const engineInstance = new GameOfLifeEngine(canvasRef.current);
      setEngine(engineInstance);

      // Initialize the specific Gosper Glider Gun configuration here
      engineInstance.grid = engineInstance.createGrid();
      setupGosperGliderGun(engineInstance.grid);

      engineInstance.drawGrid();

      // Start the game loop after the Gosper Glider Gun is set up
      engineInstance.gameLoop();

      // Handle window resizing
      const handleResize = () => {
        engineInstance.initCanvas();
        setupGosperGliderGun(engineInstance.grid);
        engineInstance.drawGrid();
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const setupGosperGliderGun = (grid) => {
    // Coordinates for the Gosper Glider Gun
    const gun = [
      [1, 5], [1, 6], [2, 5], [2, 6],
      [11, 5], [11, 6], [11, 7], [12, 4], [12, 8], [13, 3], [13, 9], [14, 3], [14, 9],
      [15, 6], [16, 4], [16, 8], [17, 5], [17, 6], [17, 7], [18, 6],
      [21, 3], [21, 4], [21, 5], [22, 3], [22, 4], [22, 5], [23, 2], [23, 6],
      [25, 1], [25, 2], [25, 6], [25, 7],
      [35, 3], [35, 4], [36, 3], [36, 4]
    ];

    gun.forEach(([x, y]) => {
      grid[x][y] = 1;
    });
  };

  const startNewGame = () => {
    if (engine) {
      engine.grid = engine.createGrid();  // Reset the grid
      setupGosperGliderGun(engine.grid);  // Set up Gosper Glider Gun
      engine.drawGrid();                  // Redraw the grid
      engine.gameLoop();                  // Restart the simulation
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-3xl text-blue-400 mb-4">Gosper Glider Gun Simulation</h1>
      <canvas 
        ref={canvasRef} 
        className="border-2 border-blue-400 bg-gray-800 mx-auto my-5"
      ></canvas>
      <button 
        onClick={startNewGame} 
        className="mt-3 mb-10 px-6 py-3 text-lg bg-blue-400 text-gray-900 rounded hover:bg-blue-300"
      >
        Start New Simulation
      </button>
    </div>
  );
}

export default GosperGliderGun;
