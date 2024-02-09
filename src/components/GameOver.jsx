import styles from "./gameOver.module.css";

function GameOver({ winner, onRestart }) {
  return (
    <div className={styles["game-over"]}>
      <h2 className={styles.h2}>Game Over!!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p className={styles.p}>
        <button className={styles.button} onClick={onRestart}>
          Rematch
        </button>
      </p>
    </div>
  );
}

export default GameOver;
