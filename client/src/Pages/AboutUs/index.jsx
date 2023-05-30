import styles from './style.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import headerPic from './about-page1.jpg';
import pic1 from './about-page2.jpg';
import pic2 from './about-page3.jpg';
import pic3 from './about-page4.jpg';
import pic4 from './about-page5.jpg';

export default function ProfilePage() {
  return (
    <div className={styles['body']}>
      <Navbar />
      <div className={styles['container']}>
        <img src={headerPic} alt='loading' width='100%' />
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
        <img src={pic1} alt='Photo 1' />
        <div className={styles['photos-right']}>
          <img className={styles['col-photo']} src={pic2} alt='Photo 2' />
          <img src={pic3} alt='Photo 3' />
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
        <img src={pic4} alt='Photo 4' />
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
