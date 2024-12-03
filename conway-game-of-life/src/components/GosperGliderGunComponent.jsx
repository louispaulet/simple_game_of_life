import React, { useRef, useEffect, useState } from 'react';
import GameOfLifeEngine from '../engine/GameOfLifeEngine'; // Reuse the engine

const GosperGliderGunComponent = () => {
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
    const gunPattern = `
........................O...........
......................O.O...........
............OO......OO............OO
...........O...O....OO............OO
OO........O.....O...OO..............
OO........O...O.OO....O.O...........
..........O.....O.......O...........
...........O...O....................
............OO......................
`;
    const gunArray = gunPattern.trim().split('\n').map(row =>
        row.split('').map(cell => cell === 'O' ? 1 : 0)
    );

    // Coordinates where you want to place the gun
    const startX = 0;
    const startY = 0;

    // Place the gun pattern onto the grid
    for (let y = 0; y < gunArray.length; y++) {
        for (let x = 0; x < gunArray[y].length; x++) {
            if (gunArray[y][x] === 1) {
                grid[startY + y][startX + x] = 1;
            }
        }
    }
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
    <div className="flex flex-col items-center justify-center">
      <canvas 
        ref={canvasRef} 
        className="border-2 border-blue-400 bg-gray-800 mx-auto my-5"
      ></canvas>
      <button 
        onClick={startNewGame} 
        className="mt-3 px-6 py-3 text-lg bg-blue-400 text-gray-900 rounded hover:bg-blue-300"
      >
        Start New Simulation
      </button>
    </div>
  );
};

export default GosperGliderGunComponent;
