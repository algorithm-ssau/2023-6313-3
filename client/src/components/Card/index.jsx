import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  useAddFavMutation,
  useRemoveFavMutation,
} from '../../redux/api/favApi';
import useEffectAfterMount from '../../hooks/useEffectAfterMount';

export default function Card({ id, title, price, imageUrl, inFavorite }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isFav, setFav] = useState(inFavorite);
  const [addFav] = useAddFavMutation();
  const [removeFav] = useRemoveFavMutation();

  useEffectAfterMount(() => {
    async function fetchData() {
      try {
        console.log(isFav);
        if (isFav) {
          const res = await addFav({ carId: id }).unwrap();
          console.log(res);
        } else {
          const res = await removeFav({ carId: id }).unwrap();
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [isFav]);

  return (
    <div
      className='col-md-3'
      onClick={() => navigate(`/cars/${id}`, { state: { from: location } })}
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
                setFav(!isFav);
              }}
            >
              <ion-icon name={isFav ? 'heart' : 'heart-outline'}></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
