import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Players from "./components/Players";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Players name="Player 1" symbol="X" />
            <Players name="Player 2" symbol="O" />
          </ol>
          <GameBoard />
        </div>
      </main>
    </>
  );
}

export default App;
