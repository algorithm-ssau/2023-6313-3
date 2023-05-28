import { useLocation, useNavigate } from 'react-router-dom';
import { useRemoveFavMutation } from '../../redux/api/favApi';
import styles from './style.module.css';
import { useEffect } from 'react';

export default function Favourite({ id, name, imageUrl, price }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [removeFav] = useRemoveFavMutation();

  const removeFavHandler = async (e) => {
    e.stopPropagation();
    try {
      await removeFav({ carId: id }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div onClick={() => navigate(`/cars/${id}`, { state: { from: location } })}>
      <div className={styles['favourite']}>
        <div className={styles['photo-favourite']}>
          <img src={imageUrl} alt='car' width='300' height='200' />
        </div>
        <div className={styles['info-favourite']}>
          <h3>{name}</h3>
          <h3>{price}</h3>
        </div>
        <div className={styles['buttons-favourite']}>
          <div onClick={removeFavHandler} className={styles['remove']}>
            <ion-icon
              className={styles['icon']}
              name='close-outline'
            ></ion-icon>
          </div>
        </div>
      </div>

      <div className={styles['line']}></div>
    </div>
  );
}
