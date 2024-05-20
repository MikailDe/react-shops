import React from 'react';

import styles from '../Footer.module.scss';

const Social = () => {
  return (
    <div className={styles.footer__social}>
      <img src='/img/icons/VK.svg' alt='' />
      <img src='/img/icons/Instagram.svg' alt='' />
      <img src='/img/icons/Telegram.svg' alt='' />
      <img src='/img/icons/Whatsapp.svg' alt='' />
    </div>
  );
};

export default Social;
