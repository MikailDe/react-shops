import React from 'react';

import styles from '../style/Header.module.scss';

const ModelList = ({ className }) => {
  return (
    <ul className={`${styles.popup__container} ${className}`}>
      <li>Iphone 12</li>
      <li>Iphone 12 Max</li>
      <li>Iphone 13</li>
      <li className={styles.active}>Iphone 13 Max</li>
      <li>Iphone 13 Pro Max</li>
      <li>Iphone 14</li>
    </ul>
  );
};

export default ModelList;
