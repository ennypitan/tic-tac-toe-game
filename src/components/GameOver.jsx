import styles from "./gameOver.module.css";

function GameOver({ winner, onRestart }) {
  return (
    <div className={styles["game-over"]}>
      <h2 className={styles["g-over-title"]}>Game Over!!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p className={styles["gameOver-p"]}>
        <button className={styles["gameOver-button"]} onClick={onRestart}>
          Rematch
        </button>
      </p>
    </div>
  );
}

export default GameOver;
