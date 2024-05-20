import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import '../style/card.css';
import { Descripthion } from '../module/Catalog';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const Card = () => {
  const dispatch = useDispatch();
  const [card, setCard] = useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetch() {
      const { data } = await axios.get(`http://localhost:3005/products/${id}`);
      setCard(data);
    }
    fetch();
  }, []);

  if (!card) {
    return 'Загрузка...';
  }

  const onClickData = () => {
    axios.post('http://localhost:3005/carts', {
      id: card.id,
      img: card.img,
      price: card.price,
      title: card.title,
      count: card.count,
    });
    dispatch(
      addItem({
        id: card.id,
        img: card.img,
        price: card.price,
        title: card.title,
        count: card.count,
      }),
    );
  };

  return (
    <>
      <div className='card__items'>
        <div className='card__item'>
          <img className='card__like' src='/img/icons/like-card.svg' alt='' />
          <img className='card__img' src={card.img} alt='' />
          <div className='card__price'>
            <h3>{card.title}</h3>
            <span className='card-price'>{card.price} руб</span>
          </div>
          <button className='card__basket'>
            <img className='card__img-basket' src='/img/icons/basket-desc.svg' alt='' />
            <span onClick={onClickData} className='card__span'>
              Добавить в корзину
            </span>
          </button>
        </div>
        <Descripthion descripthion={card.description} />
      </div>
    </>
  );
};

export default Card;
