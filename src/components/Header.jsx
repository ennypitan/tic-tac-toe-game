import styles from "./header.module.css";
import React from "react";
import logoImg from "../assets/logo.png";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoImg} alt="logo" />
        <span className={styles["top-title"]}>
          <h2>Tic-Tac-Toe</h2>
          <h4>By Ennypitan</h4>
        </span>
      </header>
    </>
  );
}

export default Header;
