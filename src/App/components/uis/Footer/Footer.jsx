import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
 
  return (
    <div data-testid="Footer" className={styles.Footer}>
      Copiright &copy; 2023
    </div>
  );
};

export default Footer;
