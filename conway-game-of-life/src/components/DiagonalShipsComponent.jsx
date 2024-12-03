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

  const placePattern = (grid, patternString, xOffset, yOffset) => {
    const patternArray = patternString.trim().split('\n').map(row =>
      row.split('').map(cell => (cell === 'O' ? 1 : 0))
    );

    for (let y = 0; y < patternArray.length; y++) {
      for (let x = 0; x < patternArray[y].length; x++) {
        if (patternArray[y][x] === 1) {
          grid[yOffset + y][xOffset + x] = 1;
        }
      }
    }
  };

  const setupDiagonalShips = (grid) => {
    // Glider
    const gliderPattern = `
.O.
..O
OOO
    `;

    // Light-weight Spaceship (LWSS)
    const lwssPattern = `
O..O.
....O
O...O
.OOOO
    `;

    // Middle-weight Spaceship (MWSS)
    const mwssPattern = `
..O..
O..O.
....O
O...O
.OOOO
    `;

    // Heavy-weight Spaceship (HWSS)
    const hwssPattern = `
    ..O..............O..................................O.....
O..O..OOO.......O.OOOO...............OO...........OO.O....
O..O............OOO.O.O.........O.....O.......O...O.......
.O.O..O.....................OOO..O.O.OOO.....O.O.O....O...
..OO......O....O................OOOOOO..O..O...O...O..O...
.O.O...OO.....O...OO......OO.OO..O..OO..O.O.OO..O.........
..O.....O.OO..O...OO......OO....O.O.O..O..O.O.O......OO..O
..O....OOO..O.........OOO.......OOO.O.OO.....O.......OOO.O
............OOOOOOOOO...O........OO.OOO...OOOO.........O.O
..........................................................
............OOOOOOOOO...O........OO.OOO...OOOO.........O.O
..O....OOO..O.........OOO.......OOO.O.OO.....O.......OOO.O
..O.....O.OO..O...OO......OO....O.O.O..O..O.O.O......OO..O
.O.O...OO.....O...OO......OO.OO..O..OO..O.O.OO..O.........
..OO......O....O................OOOOOO..O..O...O...O..O...
.O.O..O.....................OOO..O.O.OOO.....O.O.O....O...
O..O............OOO.O.O.........O.....O.......O...O.......
O..O..OOO.......O.OOOO...............OO...........OO.O....
..O..............O..................................O.....
    `;

    // Custom Diagonal Ship
    const customShipPattern = `
.O.O.
....O
O...O
.OOOO
    `;

    // New Custom Diagonal (Smaller pattern)
    const customDiagonalPattern = `
..O
O.O
.OO
    `;

    // New Custom Diagonal Ship (Larger Glider-like)
    const largeDiagonalShipPattern = `
.O....
..O...
OOO...
...OO.
.....O
...O..
    `;

    // Place the patterns onto the grid with specified offsets
    placePattern(grid, gliderPattern, 5, 5);
    placePattern(grid, lwssPattern, 20, 5);
    placePattern(grid, mwssPattern, 35, 30);
    placePattern(grid, hwssPattern, 50, 100);
    placePattern(grid, customShipPattern, 65, 5);
    placePattern(grid, customDiagonalPattern, 80, 5);
    placePattern(grid, largeDiagonalShipPattern, 95, 5);
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
      <canvas
        ref={canvasRef}
        className="border-2 border-blue-400 bg-gray-800 mx-auto my-5"
      ></canvas>
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
