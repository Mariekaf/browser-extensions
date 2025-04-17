import React from 'react';
import styles from "../style/main.module.scss";

const Button = ({ name, isDark, isActive, onClick }) => {
  const className = `${styles.mode} ${
    isDark
      ? isActive
        ? styles["active_dark"]
        : styles["buttons1"]
      : isActive
        ? styles["active_light"]
        : styles["buttons2"]
  }`;

  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
