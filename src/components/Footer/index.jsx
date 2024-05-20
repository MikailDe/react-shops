import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import Social from './Social';
import Information from './Information';
import Categories from './Categories';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__items}>
          <div className={styles.logo}>
            <Link to='/'>
              <img src='/img/logo.png' alt='' />
            </Link>
          </div>
          <div className={styles.footer__container}>
            <Categories />
            <Information />
          </div>
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
