import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../Footer.module.scss';

const Information = () => {
  return (
    <div className={styles.footer__info}>
      <Link to='/conditions'>
        <p href='#!'>Условие сервиса</p>
      </Link>
      <div className={styles.language}>
        <img src='/img/icons/lang.svg' alt='' />
        <p>Рус</p>
        <p>Eng</p>
      </div>
    </div>
  );
};

export default Information;
