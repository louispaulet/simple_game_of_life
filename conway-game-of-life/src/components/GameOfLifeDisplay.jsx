import React, { useRef, useEffect, useState } from 'react';
import GameOfLifeEngine from '../engine/GameOfLifeEngine';

function GameOfLifeDisplay() {
  const canvasRef = useRef(null);
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const engineInstance = new GameOfLifeEngine(canvasRef.current);
      setEngine(engineInstance);
      
      // Start the game after the engine has been set
      engineInstance.startNewGame();

      // Handle window resizing
      const handleResize = () => {
        engineInstance.initCanvas();
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const startNewGame = () => {
    if (engine) {
      engine.startNewGame();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
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

export default GameOfLifeDisplay;
