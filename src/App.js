// Imports
import React from 'react';
import Background from "./Gif/giphy.gif"
import Board from "./Components/Board/Board";
import Footer from "./Components/Footer/Footer"

// Stateless Component
function App() {
  return (
    <div className="App">
      <div className="backgroundBlur"></div>
      <img src={Background} alt="background" />
      <h1>Tic Tac Toe Game</h1>
      <Board />
      <Footer />
    </div>
  );
}

// Exports
export default App;
