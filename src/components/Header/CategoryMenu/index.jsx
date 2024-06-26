import React from 'react';

import styles from '../style/Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setClass, setPopup } from '../../../redux/slices/filtersSlice';
import PopUp from '../PopUp';

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const { popUp, active } = useSelector(state => state.filters);

  const onClickPopup = () => {
    dispatch(setPopup(!popUp));
  };

  const onCLickClass = () => {
    dispatch(setClass(!active));
  };

  return (
    <>
      <div onClick={onClickPopup} className={styles.header__label}>
        <svg
          width='15'
          height='21'
          viewBox='0 0 15 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M2.14286 2.1V18.9H12.8571V2.1H2.14286ZM1.07143 0H13.9286C14.2127 0 14.4853 0.110625 14.6862 0.307538C14.8871 0.504451 15 0.771523 15 1.05V19.95C15 20.2285 14.8871 20.4955 14.6862 20.6925C14.4853 20.8894 14.2127 21 13.9286 21H1.07143C0.787268 21 0.514746 20.8894 0.313814 20.6925C0.112883 20.4955 0 20.2285 0 19.95V1.05C0 0.771523 0.112883 0.504451 0.313814 0.307538C0.514746 0.110625 0.787268 0 1.07143 0ZM7.5 15.75C7.78416 15.75 8.05668 15.8606 8.25761 16.0575C8.45855 16.2544 8.57143 16.5215 8.57143 16.8C8.57143 17.0785 8.45855 17.3455 8.25761 17.5425C8.05668 17.7394 7.78416 17.85 7.5 17.85C7.21584 17.85 6.94332 17.7394 6.74239 17.5425C6.54145 17.3455 6.42857 17.0785 6.42857 16.8C6.42857 16.5215 6.54145 16.2544 6.74239 16.0575C6.94332 15.8606 7.21584 15.75 7.5 15.75Z'
            fill='#101010'
          />
        </svg>
        <p>Выбрать модель телефона</p>
        <img src='/img/icons/chose.svg' alt='' />
      </div>
      {popUp ? <PopUp active={active} onClass={onCLickClass} /> : ''}
    </>
  );
};

export default CategoryMenu;
