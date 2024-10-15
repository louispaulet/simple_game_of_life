# Conway's Game of Life 🎮🌱

Welcome to **Conway's Game of Life**, an interactive and responsive simulation of the famous cellular automaton. Watch how simple patterns grow into intricate behaviors, all powered by **Vite**, **React**, and **TailwindCSS**. 

## 🚀 Live Project
Check out the live version here: [Conway's Game of Life](https://conway.thefrenchartist.dev/)

## 📜 Project Description

Conway's Game of Life is a cellular automaton developed by John Horton Conway in 1970. It's a zero-player game where cells live or die based on simple rules. Explore its beauty in this interactive web app!

### 🔑 Key Features
- **Live Simulation**: Dynamic and real-time updates to cellular evolution.
- **Interactive Controls**: Start fresh simulations of popular patterns like the Gosper Glider Gun and Diagonal Ships.
- **Responsive Design**: The grid adapts to window resizing for an optimal experience across devices.

### 📂 Pages and Simulations
- **🏠 Homepage**: A live, evolving simulation of Conway's Game of Life. Reset and watch the magic unfold.
- **🔫 Gosper Glider Gun**: A continuous source of gliders flying across the grid. Try it out [here](https://conway.thefrenchartist.dev/#/gosper-glider-gun).
- **🚀 Diagonal Ships**: Diagonal spaceships like the Glider, LWSS, MWSS, and HWSS are featured. Start the simulation [here](https://conway.thefrenchartist.dev/#/diagonal-ships).
- **ℹ️ About Page**: Learn about the history of Conway's Game of Life and its fascinating mechanics.

## 🛠️ Technologies Used

- **Vite** ⚡: Ultra-fast build tool optimized for modern frontend development.
- **React** ⚛️: The JavaScript library for building user interfaces.
- **TailwindCSS** 🎨: A utility-first CSS framework for building custom designs quickly and efficiently.
- **JavaScript**: Core logic for the Game of Life engine.
- **Canvas API**: For rendering the grid and patterns dynamically on the webpage.

## 🧑‍💻 Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/louispaulet/simple_game_of_life.git
    ```

2. **Navigate into the project directory**:
    ```bash
    cd simple_game_of_life
    ```

3. **Install dependencies** using npm or yarn:
    ```bash
    npm install
    # or
    yarn install
    ```

4. **Start the development server** using Vite:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and go to `http://localhost:5173` to see the project in action.

## 🏗️ Build for Production

To create an optimized production build:
```bash
npm run build
# or
yarn build
```

The static files will be available in the `dist` folder, ready for deployment.

## 🌳 File Structure

- **src/components/**: Reusable components like the grid display and simulation controls.
- **src/engine/**: The Game of Life engine logic.
- **src/pages/**: Contains the pages (Home, About, Gosper Glider Gun, Diagonal Ships).
- **src/App.jsx**: Main application file, where routes are set up.
- **tailwind.config.js**: Configuration file for customizing TailwindCSS.

## 👨‍💻 Contributions

Contributions are more than welcome! Feel free to fork the repository, submit issues, and open pull requests to improve the project. Let's make Conway's Game of Life even more awesome together! 🚀✨

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **John Horton Conway**: For creating this incredible automaton that continues to inspire generations of mathematicians and developers alike.
- The **React**, **TailwindCSS**, and **Vite** communities for their amazing tools and resources.
