import React from 'react';
import styles from './style/Header.module.scss';
import { Link } from 'react-router-dom';

import IconButton from '../IconButton';
import LikeIcon from '../../shared/LikeIcon';
import BasketIcon from '../../shared/BasketIcon';
import CategoryMenu from './CategoryMenu';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../redux/slices/cartSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.cart);

  React.useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.header__logo}>
          <Link to='/'>
            <img src='/img/logo.png' alt='' />
          </Link>
          <div className={styles.header__category}>
            <CategoryMenu />
          </div>
        </div>
        <div className={styles.header__page}>
          <IconButton count='1'>
            <LikeIcon />
          </IconButton>
          <IconButton count={count}>
            <Link to='/cart'>
              <BasketIcon />
            </Link>
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
