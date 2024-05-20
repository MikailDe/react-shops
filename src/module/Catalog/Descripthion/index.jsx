import React from 'react';

import styles from './Descripthion.module.scss';

const Descripthion = ({ descripthion }) => {
  return (
    <div className={styles.descripthion}>
      <h3 className={styles.descripthion__title}>Описание и характеристики</h3>
      <div>
        <ul>
          <li>Тип: {descripthion.type}</li>
          <li>Конструкция: {descripthion.constructor}</li>
          <li>Минимальная воспроизводимая частота: {descripthion.frequency}</li>
          <li>Импеданс: {descripthion.impedance}</li>
          <li>Чувствительность: {descripthion.sensitivity}</li>
          <li>Максимальная мощность: {descripthion.power}</li>
          <li>Тип акустического оформления: {descripthion.acoustic}</li>
          <li>Тип крепления: {descripthion.fastenings}</li>
          <li>Диаметр мембраны: {descripthion.membranes}</li>
          <li>Длина кабеля: {descripthion.cable}</li>
          <li>Функции: {descripthion.function}</li>
        </ul>
      </div>
    </div>
  );
};

export default Descripthion;
