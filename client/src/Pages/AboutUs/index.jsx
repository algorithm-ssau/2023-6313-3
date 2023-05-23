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
      

      <div className={styles['text-center']}>
        <div className={styles['red-line']}></div>
        <p>Digital Drive. Автомобильная компания</p>

        <p>
          Мы создали витрину самых выгодных предложений на рынке авто. Для этого
          велась большая работа с ведущими автомобильными дилерами всех стран
          Европы и Азии. Дилеры выставляют для Digital Drive самые
          привлекательные цены, которые вообще могут быть. А покупатель
          сравнивает лучшие предложения, которые есть в наличии.
        </p>
        <p>
          <u>Ваше доверие - наша репутация.</u>
        </p>
        <div className={styles['red-line']}></div>
      </div>
      <Footer />
    </div>
  );
}
