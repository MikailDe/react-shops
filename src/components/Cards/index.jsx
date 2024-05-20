import React from 'react';
import Card from '../../module/Catalog/Card';
import { Link } from 'react-router-dom';

import styles from './Cards.module.scss';

const Cards = ({ title, items }) => {
  return (
    <div className={styles.headphones}>
      <h2>{title}</h2>
      <div className={styles.headphonesItems}>
        {items.map((obj, index) => {
          return (
            <div className={styles.headphonesItem}>
              <Link key={index} to={`/card/${obj.id}`}>
                <Card {...obj} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
