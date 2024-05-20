import React from 'react';

import styles from './Category.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts } from '../../../redux/slices/cardSlice';
import Cards from '../../../components/Cards';

const Carts = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(state => state.card);

  const fetchItems = async () => {
    dispatch(fetchCarts());
  };

  React.useEffect(() => {
    fetchItems();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.carts}>
      <h1>Аксессуары для Iphone 13 Pro Max</h1>
      <div className={styles.cartsCovers}>
        <p className={styles.cartsCoversTitle}>Чехлы</p>
        <div className={styles.cartsCoversItems}>
          <div className={styles.cartsCoversItem}>
            <img src='./img/covers/glass-covers.png' alt='' />
            <p>Стеклянные</p>
          </div>
          <div className={styles.cartsCoversItem}>
            <img src='./img/covers/silicone-covers.png' alt='' />
            <p>Силиконовые</p>
          </div>
          <div className={styles.cartsCoversItem}>
            <img src='./img/covers/leather-covers.png' alt='' />
            <p>Кожаные</p>
          </div>
        </div>
      </div>
      <Cards title='Наушники' items={items.filter(item => item.type === 'headphones')} />
      <Cards title='Беспроводные наушники' items={items.filter(item => item.type === 'wireless')} />
    </div>
  );
};

export default Carts;
