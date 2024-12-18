// GameOfLifeEngine.js

class GameOfLifeEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.cellSize = 4;
    this.cols = 0;
    this.rows = 0;
    this.grid = [];
    this.animationId = null; // Store the animation frame ID
    this.initCanvas(); // Initialize the canvas when the engine is created
  }

  initCanvas() {
    this.canvas.width = window.innerWidth - 40;
    this.canvas.height = window.innerHeight - 100;
    this.cols = Math.floor(this.canvas.width / this.cellSize);
    this.rows = Math.floor(this.canvas.height / this.cellSize);
    this.grid = this.createGrid(); // Make sure the grid is created after initializing canvas size
  }

  createGrid() {
    let arr = new Array(this.cols);
    for (let i = 0; i < this.cols; i++) {
      arr[i] = new Array(this.rows).fill(0);
    }
    return arr;
  }

  randomizeGrid() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.grid[i][j] = Math.random() < 0.2 ? 1 : 0;
      }
    }
  }

  drawGrid() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#61dafb';

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        if (this.grid[i][j] === 1) {
          this.ctx.fillRect(
            i * this.cellSize,
            j * this.cellSize,
            this.cellSize - 1,
            this.cellSize - 1
          );
        }
      }
    }
  }

  updateGrid() {
    let newGrid = this.createGrid();

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let state = this.grid[i][j];
        let neighbors = this.countNeighbors(i, j);

        if (state === 0 && neighbors === 3) {
          newGrid[i][j] = 1; // Cell becomes alive
        } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
          newGrid[i][j] = 0; // Cell dies
        } else {
          newGrid[i][j] = state; // Cell stays in its current state
        }
      }
    }

    this.grid = newGrid;
    this.drawGrid(); // Draw the updated grid
  }

  countNeighbors(x, y) {
    let sum = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let col = x + i;
        let row = y + j;

        // Skip counting neighbors outside the grid boundaries
        if (col >= 0 && col < this.cols && row >= 0 && row < this.rows) {
          sum += this.grid[col][row];
        }
      }
    }
    sum -= this.grid[x][y]; // Subtract the cell itself from the neighbor count
    return sum;
  }

  gameLoop() {
    this.updateGrid();
    this.animationId = requestAnimationFrame(() => this.gameLoop());
  }

  // Add the stopSimulation method
  stopSimulation() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  startNewGame() {
    this.randomizeGrid();
    this.stopSimulation(); // Use the new stopSimulation method
    this.gameLoop(); // Start the game loop
  }
}

export default GameOfLifeEngine;
