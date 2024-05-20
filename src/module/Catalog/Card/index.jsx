import React from 'react';
import styles from './Card.module.scss';

const CartsHeadphones = ({ type, title, price, rating, img }) => {
  if (type === 'headphones') {
    return (
      <>
        <div className={styles.headphonesItem}>
          <img className={styles.headphonesLike} src='./img/icons/like-cart.svg' alt='' />
          <img className={styles.headphonesCartImg} src={img} alt='' />
          <div className={styles.headphonesBottom}>
            <div className={styles.headphonesTitle}>
              <p>{title}</p>
              <p className={styles.price}>{price} руб.</p>
            </div>
            <div className={styles.headphonesStars}>
              <img src='./img/icons/star.svg' alt='' />
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </>
    );
  } else if (type === 'wireless') {
    return (
      <>
        <div className={styles.headphonesItem}>
          <img className={styles.headphonesLike} src='./img/icons/like-cart.svg' alt='' />
          <img className={styles.headphonesCartImg} src={img} alt='' />
          <div className={styles.headphonesBottom}>
            <div className={styles.headphonesTitle}>
              <p>{title}</p>
              <p className={styles.price}>{price} руб.</p>
            </div>
            <div className={styles.headphonesStars}>
              <img src='./img/icons/star.svg' alt='' />
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CartsHeadphones;
