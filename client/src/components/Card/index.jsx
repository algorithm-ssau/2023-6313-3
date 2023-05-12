import { useState } from 'react';
import styles from './style.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Card({ title, price, imageUrl }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [favCar, setFavCar] = useState(false);
  return (
    <div
      className='col-md-3'
      onClick={() => navigate(`/cars/${title}`, { state: { from: location } })}
    >
      <div className={styles['product']}>
        <div className={styles['image']}>
          <img src={imageUrl} alt='car' />
        </div>
        <div className={styles['info']}>
          <h3>{title}</h3>
          <ul className={styles['rating']}>
            <li>
              <ion-icon name='star'></ion-icon>
            </li>
            <li>
              <ion-icon name='star'></ion-icon>
            </li>
            <li>
              <ion-icon name='star'></ion-icon>
            </li>
            <li>
              <ion-icon name='star'></ion-icon>
            </li>
            <li>
              <ion-icon name='star-half-outline'></ion-icon>
            </li>
          </ul>
          <div className={styles['info-price']}>
            <span className={styles['price']}>
              {price}
              <small>₽</small>
            </span>
            <button
              className={styles['add-to-favourites']}
              onClick={(e) => {
                e.stopPropagation();
                setFavCar(!favCar);
              }}
            >
              <ion-icon name={favCar ? 'heart' : 'heart-outline'}></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
