import styles from './style.module.css';

export default function Favourite() {
  return (
    <div>
      <div className={styles['favourite']}>
        <div className={styles['photo-favourite']}>
          <img src='http://placehold.it/300x200' alt='' />
        </div>
        <div className={styles['info-favourite']}>
          <h3>Марка и модель</h3>
          <h3>2.000.000</h3>
        </div>
        <div className={styles['buttons-favourite']}>
          <div className={styles['remove']}>
            
            <ion-icon
              className={styles['icon']}
              name='close-outline'
            ></ion-icon>
            
          </div>

          <h1 className={styles['best-price']}>Справедливая цена</h1>
        </div>
      </div>

      <div className={styles['line']}></div>
    </div>
  );
}
