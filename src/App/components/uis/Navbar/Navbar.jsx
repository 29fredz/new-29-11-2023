import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
   
  return (
    <div data-testid="Navbar" className={styles.Navbar}>
      Ceci est une Navbar
    </div>
  );
};

export default Navbar;
