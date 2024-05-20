import React from 'react';
import styles from './IconButton.module.scss';

const IconButton = ({ count, children }) => {
  return (
    <div div className={styles.header__wrapper_icon}>
      {children}
      <div className={styles.circle}>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default IconButton;
