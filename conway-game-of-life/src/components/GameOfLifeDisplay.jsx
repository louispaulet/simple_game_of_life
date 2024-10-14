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
    <div>
      <canvas ref={canvasRef}></canvas>
      <button onClick={startNewGame}>Start New Simulation</button>
    </div>
  );
}

export default GameOfLifeDisplay;
