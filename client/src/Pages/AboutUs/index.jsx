import styles from './style.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProfilePage() {
  return (
    <div className={styles['body']}>
      <Navbar />
      <div className={styles['container']}>
        <img
          src='https://sun9-24.userapi.com/impg/WvoAUw9iRYZLl4l9kl5QvnDHqaSoFrH83Sia4g/ICwe2IaNj2E.jpg?size=1280x800&quality=96&sign=dbe17eb77898e67c2a50bc8502410ab3&type=album'
          alt='loading'
          width='100%'
        ></img>
        <div className={styles['about']}>
          <h1>О КОМПАНИИ</h1>
        </div>
        <div className={styles['animation-line']}></div>
      </div>
      <div className={styles['red-line']}></div>
      <div className={styles['text-about']}>
        <div className={styles['text-center']}>
          <p>Digital Drive. Автомобильный</p>
          <p></p>
          <p></p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
