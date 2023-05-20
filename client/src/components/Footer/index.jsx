import { Center } from '@chakra-ui/react';
import styles from './style.module.css';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['hr1']}></div>
      <Center>
        <ul className={styles['social']}>
          <li>
            <a href='#' className={styles['call']}>
              <ion-icon name='call-outline'></ion-icon>
            </a>
          </li>
          <li>
            <a href='#' className={styles['github']}>
              <ion-icon name='logo-github'></ion-icon>
            </a>
          </li>
          <li>
          <a href='#' className={styles['vk']}>
            <ion-icon name='logo-vk'></ion-icon>
          </a>
          </li>
          <li>
          <a href='#' className={styles['whatsapp']}>
            <ion-icon name='logo-whatsapp'></ion-icon>
          </a>
          </li>
        </ul>
      </Center>
      <ul className={styles['menu']}>
        <li>
          <a href='#'>Главная</a>
        </li>
        <li>
          <a href='#'>О проекте</a>
        </li>
        <li>
          <a href='#'>Помощь</a>
        </li>
        <li>
          <a href='#'>Разместить рекламу</a>
        </li>
        <li>
          <a href='#'>Контакты</a>
        </li>
      </ul>
      <p>©2023 Auto.Ru | All Rights Reserved</p>
    </footer>
  );
}
