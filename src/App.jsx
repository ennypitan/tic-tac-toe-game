import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Players from "./components/Players";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  };
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Players
              name="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Players
              name="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
      </main>
    </>
  );
}

export default App;
