import React from 'react';

import styles from '../style/Header.module.scss';
import ModelList from '../ModelList';

const PopUp = ({ onClass, active }) => {
  return (
    <div className={styles.header__popup}>
      <div>
        <div>
          <span>Apple</span> <img onClick={onClass} src='/img/icons/down.svg' alt='' />
        </div>
        <ModelList className={active ? styles.popup__active : ''} />
      </div>
    </div>
  );
};

export default PopUp;
