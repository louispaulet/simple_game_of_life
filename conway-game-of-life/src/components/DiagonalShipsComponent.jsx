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

const placePattern = (
  grid,
  patternString,
  xOffset,
  yOffset,
  rotation = 0
) => {
  let patternArray = patternString
    .trim()
    .split('\n')
    .map((row) => row.split('').map((cell) => (cell === 'O' ? 1 : 0)));

  // Rotate the pattern array based on the rotation parameter
  patternArray = rotatePattern(patternArray, rotation);

  const gridHeight = grid.length;
  const gridWidth = grid[0].length;
  const patternHeight = patternArray.length;
  const patternWidth = patternArray[0].length;

  // Check if the pattern fits within the grid boundaries
  if (
    yOffset < 0 ||
    xOffset < 0 ||
    yOffset + patternHeight > gridHeight ||
    xOffset + patternWidth > gridWidth
  ) {
    console.warn(
      `Pattern does not fit at position (${xOffset}, ${yOffset}). Skipping this pattern.`
    );
    return; // Skip placing this pattern
  }

  // Place the rotated pattern onto the grid
  for (let y = 0; y < patternHeight; y++) {
    for (let x = 0; x < patternWidth; x++) {
      if (patternArray[y][x] === 1) {
        grid[yOffset + y][xOffset + x] = 1;
      }
    }
  }
};



  const rotatePattern = (patternArray, rotation) => {
    rotation = rotation % 4; // Ensure rotation is between 0 and 3
    let rotatedArray = patternArray;
    if (rotation === 1) {
      rotatedArray = rotate90(rotatedArray);
    } else if (rotation === 2) {
      rotatedArray = rotate180(rotatedArray);
    } else if (rotation === 3) {
      rotatedArray = rotate270(rotatedArray);
    }
    // If rotation is 0, no rotation needed
    return rotatedArray;
  };

  const rotate90 = (matrix) => {
    const rotated = [];
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    for (let col = 0; col < numCols; col++) {
      const newRow = [];
      for (let row = numRows - 1; row >= 0; row--) {
        newRow.push(matrix[row][col]);
      }
      rotated.push(newRow);
    }
    return rotated;
  };

  const rotate180 = (matrix) => {
    return matrix
      .slice()
      .reverse()
      .map((row) => row.slice().reverse());
  };

  const rotate270 = (matrix) => {
    const rotated = [];
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    for (let col = numCols - 1; col >= 0; col--) {
      const newRow = [];
      for (let row = 0; row < numRows; row++) {
        newRow.push(matrix[row][col]);
      }
      rotated.push(newRow);
    }
    return rotated;
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
.O..O
O....
O...O
OOOO.
    `;

    // Middle-weight Spaceship (MWSS)
    const mwssPattern = `
    .O.
..O
OOO
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
................................OO.O...........................
...............................OOO.O......O.O..................
..............................O....O.O....O....................
...............................OO......O.O...O.................
................................O...O..O..OO...................
...................................O.OO...O....................
..................................O.O................OO........
..................................O.O................OO........
...............................................................
...............................................................
...............................................................
...............................................................
...............................................................
...............................................................
.............................................................OO
....................................................OO.......OO
.......................................O.........O.OOOO........
..................................O...OOOOO.....OO.O...OO......
.................................O.O.......OO....O..OO.OO......
.................................O.......O.OO.....OOOOOO.......
..................................O........OO......O...........
...................................O...OOOO....................
........................................OOO....................
........................O.O.........OO.........................
........................O.O.O......O.O.........................
.......................O..OO.O....OO...........................
........................OO...O.O.OO.O..........................
........................OO...OO.OOOOO..........................
............................O.OO...OO..........................
...........................O.O.................................
..OO.O.........................................................
.OOO.O......O.O................................................
O....O.O....O..................................................
.OO......O.O...O...............................................
..O...O..O..OO...........O.....................................
.....O.OO...O...........OOO....................................
....O.O.................O..O...................................
....O.O................O....O..................................
........................O......................................
...............................................................
........................O..O...................................
.........................O.O...................................
...............................................................
.....................O.........................................
....................OOO........................................
...................OO.OO.......................................
.........O........OO.O.....O...................................
....O...OOOOO....OO......OO....................................
...O.O.......OO..OO.......OO...................................
...O.......O.OO................................................
....O........OO................................................
.....O...OOOO..................................................
..........OOO..................................................
...............................................................
...............................................................
...............................................................
...........OO..................................................
...........OO..................................................

    `;

    // New Custom Diagonal (Smaller pattern)
    const customDiagonalPattern = `
..O
O.O
.OO
    `;

    // New Custom Diagonal Ship (Larger Glider-like)
    const largeDiagonalShipPattern = `
.................................O.
................O...............O.O
......O.O......O.....OO........O...
......O....O....O.OOOOOO....OO.....
......O.OOOOOOOO..........O..O.OOO.
.........O.....O.......OOOO....OOO.
....OO.................OOO.O.......
.O..OO.......OO........OO..........
.O..O..............................
O..................................
.O..O..............................
.O..OO.......OO........OO..........
....OO.................OOO.O.......
.........O.....O.......OOOO....OOO.
......O.OOOOOOOO..........O..O.OOO.
......O....O....O.OOOOOO....OO.....
......O.O......O.....OO........O...
................O...............O.O
.................................O.

    `;

    // Place the patterns onto the grid with specified offsets and rotations
    placePattern(grid, gliderPattern, 1, 1, 0); // No rotation
    placePattern(grid, lwssPattern, 5, 5, 3); // 90 degrees rotation
    placePattern(grid, mwssPattern, 20, 20, 0); // 180 degrees rotation
    placePattern(grid, hwssPattern, 50, 50, 3); // 270 degrees rotation
    placePattern(grid, customShipPattern, 10, 300, 1); // 90 degrees rotation
    //placePattern(grid, customDiagonalPattern, 80, 5, 2); // 180 degrees rotation
    placePattern(grid, largeDiagonalShipPattern, 80, 50, 3); // 270 degrees rotation
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
