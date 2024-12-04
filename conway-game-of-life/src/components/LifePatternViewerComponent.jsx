import React, { useRef, useEffect, useState } from 'react';
import GameOfLifeEngine from '../engine/GameOfLifeEngine'; // Reuse the engine

const LifePatternViewer = () => {
  const canvasRef = useRef(null);
  const [engine, setEngine] = useState(null);
  const [selectedPattern, setSelectedPattern] = useState('Gosper Glider Gun');

  // Define available patterns with their descriptions and grid representations
  const patterns = {
    'Gosper Glider Gun': {
      description:
        'A pattern that creates gliders indefinitely. It was the first known pattern with infinite growth in Conway\'s Game of Life.',
      pattern: `
........................O...........
......................O.O...........
............OO......OO............OO
...........O...O....OO............OO
OO........O.....O...OO..............
OO........O...O.OO....O.O...........
..........O.....O.......O...........
...........O...O....................
............OO......................
`,
    },
    'F-pentomino': {
      description:
        'A simple pattern that evolves for a long time before stabilizing. It is one of the most well-known methuselahs.',
      pattern: `
OO..
.O..
.O..
.OOO
`,
    },
    'R-pentomino': {
      description:
        'A famous methuselah that evolves for 1103 generations before stabilizing.',
      pattern: `
.OO
OO.
.O.
`,
    },
    'Diehard': {
      description:
        'A pattern that dies out after 130 generations, the longest-lived pattern known with seven or fewer cells.',
      pattern: `
......O.
OO......
.O...OOO
`,
    },
    'Acorn': {
      description:
        'A small pattern that evolves for 5206 generations before stabilizing, creating many interesting structures along the way.',
      pattern: `
.O.....
...O...
OO..OOO
`,
    },
    'Fumarole': {
      description:
        'A period-5 oscillator discovered by Dean Hickerson. It is the smallest known oscillator of period 5 in terms of bounding box.',
      pattern: `
...OO...
.O....O.
.O....O.
.O....O.
..O..O..
O.O..O.O
OO....OO
`,
    },
    'Pentadecathlon': {
      description:
        'A famous period-15 oscillator that is often called the "Queen bee shuttle."',
      pattern: `
..O....O..
OO.OOOO.OO
..O....O..
`,
    },
  };

  useEffect(() => {
    if (canvasRef.current) {
      const engineInstance = new GameOfLifeEngine(canvasRef.current);
      setEngine(engineInstance);
      engineInstance.grid = engineInstance.createGrid();
      loadPattern(engineInstance.grid, patterns[selectedPattern].pattern);
      engineInstance.drawGrid();
      engineInstance.gameLoop();

      // Handle window resizing
      const handleResize = () => {
        engineInstance.initCanvas();
        loadPattern(engineInstance.grid, patterns[selectedPattern].pattern);
        engineInstance.drawGrid();
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [selectedPattern]);

  const loadPattern = (grid, patternString) => {
    const patternArray = patternString
      .trim()
      .split('\n')
      .map((row) =>
        row.split('').map((cell) => (cell === 'O' ? 1 : 0))
      );

    // Center the pattern on the canvas
    const gridHeight = grid.length;
    const gridWidth = grid[0].length;
    const patternHeight = patternArray.length;
    const patternWidth = patternArray[0].length;
    const startX = Math.floor((gridWidth - patternWidth) / 2);
    const startY = Math.floor((gridHeight - patternHeight) / 2);

    // Place the pattern onto the grid
    for (let y = 0; y < patternHeight; y++) {
      for (let x = 0; x < patternWidth; x++) {
        if (patternArray[y][x] === 1) {
          grid[startY + y][startX + x] = 1;
        }
      }
    }
  };

  const startSimulation = () => {
    if (engine) {
      engine.grid = engine.createGrid(); // Reset the grid
      loadPattern(engine.grid, patterns[selectedPattern].pattern); // Load selected pattern
      engine.drawGrid(); // Redraw the grid
      engine.gameLoop(); // Restart the simulation
    }
  };

  const handlePatternChange = (event) => {
    setSelectedPattern(event.target.value);
    if (engine) {
      engine.stopSimulation(); // Stop current simulation
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <select
        value={selectedPattern}
        onChange={handlePatternChange}
        className="mt-5 px-4 py-2 text-lg bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        {Object.keys(patterns).map((patternName) => (
          <option key={patternName} value={patternName}>
            {patternName}
          </option>
        ))}
      </select>

      <div className="mt-5 text-center max-w-xl">
        <h2 className="text-2xl font-bold text-white">{selectedPattern}</h2>
        <p className="text-gray-300 mt-2">
          {patterns[selectedPattern].description}
        </p>
      </div>

      <canvas
        ref={canvasRef}
        className="border-2 border-blue-400 bg-gray-800 mx-auto my-5"
      ></canvas>

      <button
        onClick={startSimulation}
        className="mt-3 px-6 py-3 text-lg bg-blue-400 text-gray-900 rounded hover:bg-blue-300"
      >
        Start Simulation
      </button>
    </div>
  );
};

export default LifePatternViewer;
