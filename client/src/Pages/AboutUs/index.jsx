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
          <u>Води без ограничений!</u>
        </p>
        <div className={styles['red-line']}></div>
      </div>

      <div className={styles['collage']}>
        <img
          src='https://sun9-70.userapi.com/impg/Q0P2Lp_wiXjbw578mKDC56AolmW9aj6_kmVgFQ/6raJSBzNhfA.jpg?size=468x714&quality=96&sign=7478b78458d713ec0ac586bfdd7eb331&type=album'
          alt='Photo 1'
        />
        <div className={styles['photos-right']}>
          <img
            className={styles['col-photo']}
            src='https://gamerwall.pro/uploads/posts/2022-06/1655895053_43-gamerwall-pro-p-mersedes-osenyu-oboi-47.jpg'
            alt='Photo 2'
          />
          <img
            src='https://sun9-54.userapi.com/impg/mzAAtTVBUYdyMuA63ITgHA-0682r1qYgMT_HyA/q8ClnTskqzA.jpg?size=1280x853&quality=96&sign=f8fa1212d642ae6397355e4adfddeb85&type=album'
            alt='Photo 3'
          />
        </div>
      </div>

      <div className={styles['text-center']}>
        <div className={styles['red-line']}></div>
        <p>Digital Drive</p>
        <p>
          Пользуясь нашими услугами, вы экономите на платных
          диагностиках/проверках и избегаете недобросовестных продавцов. При
          покупке у нас, мы гарантируем 100% соответствие вашим требованиям.
        </p>
        <p>
          <u>Ваше доверие - наша репутация.</u>
        </p>
        <div className={styles['red-line']}></div>
      </div>

      <div className={styles['last-photo']}>
        <img src='https://agate.group/upload/img/about/04.jpg' alt='Photo 4' />
      </div>

      <div className={styles['text-center-last']}>
        <div className={styles['red-line']}></div>
        <p>Digital Drive</p>
        <p>
          Мы занимаем первое место в России по продажам автомобилей за последний
          год. Не смотря на пандемию и всеобщий кризис, продажи автомобилей
          только растут. Каждый пятый посетитель сайта остаётся с нами и
          покупает свой заветный автомобиль.
        </p>
        <div className={styles['red-line']}></div>
      </div>
      <Footer />
    </div>
  );
}
