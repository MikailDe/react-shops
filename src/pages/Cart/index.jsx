import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, fetchCart } from '../../redux/slices/cartSlice';

import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();

  const { items, status } = useSelector(state => state.cart);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!isLoaded && status === 'idle') {
      dispatch(fetchCart());
      setIsLoaded(true);
    }
  }, [dispatch, isLoaded, status]);

  const onClickRemove = id => {
    dispatch(deleteCartItem(id));
  };

  return (
    <div className={styles.cart}>
      <div className='cart__items'>
        {items.length === 0 ? (
          <div className={styles.cart__empty}>
            <div>
              <img src='/img/basket-cart.png' alt='' />
            </div>
            <div className={styles.cart__empty_title}>
              <p>Корзина пуста</p>
              <span>Но это никогда не поздно исправить :)</span>
            </div>
            <Link to='/'>
              <button className={styles.cart__empty_button}>В каталог товаров</button>
            </Link>
          </div>
        ) : (
          items.map(obj => {
            return (
              <div className={styles.cart__item}>
                <div className={styles.cart__container}>
                  <img className={styles.cart__img} src={obj.img} alt='' />
                  <div className={styles.cart__title}>
                    <p>{obj.title}</p>
                    <span>{obj.price}</span>
                  </div>
                  <img
                    onClick={() => onClickRemove(obj.id)}
                    className={styles.cart__delete}
                    src='/img/icons/delete.svg'
                    alt=''
                  />
                </div>
                <div className='cart__price'>
                  <div className={styles.cart__count}>
                    <button>
                      <img src='/img/icons/minus.svg' alt='' />
                    </button>
                    <span>{obj.count}</span>
                    <button>
                      <img src='/img/icons/plus.svg' alt='' />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
