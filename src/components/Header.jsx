import styles from "./header.module.css";
import React from "react";
import logoImg from "../assets/logo.png";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoImg} alt="logo" />
        <h2>Tic-Tac-Toe</h2>
      </header>
    </>
  );
}

export default Header;
