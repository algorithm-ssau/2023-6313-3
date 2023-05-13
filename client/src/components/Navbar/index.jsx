import { NavLink } from 'react-router-dom';

import styles from './style.module.css';

export default function Navbar() {
  return (
    <div>
      <div className={styles['hr']}></div>
      <nav className={'navbar ' + styles['navbar']}>
        <div className={'container ' + styles['container']}>
          <NavLink
            to='/cars'
            className={'navbar-brand ' + styles['navbar-brand']}
          >
            Auto.Ru
          </NavLink>
          <div className={'navbar-wrap ' + styles['navbar-wrap']}>
            <ul className={'navbar-menu ' + styles['navbar-menu']}>
              <li>
                <a href='#'>О нас</a>
              </li>
              <li>
                <a href='#'>Новости</a>
              </li>
              <li>
                <a href='#'>Контакты</a>
              </li>
              <li>
                <NavLink to='/adding'>Разместить объявление</NavLink>
              </li>
            </ul>
            <NavLink to='/profile' className={'profile ' + styles['profile']}>
              Личный кабинет
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
