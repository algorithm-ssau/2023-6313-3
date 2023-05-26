import { NavLink } from 'react-router-dom';

import styles from './style.module.css';
import { useAccordion } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useLogoutUserMutation } from '../../redux/api/authApi';
import { logout } from '../../redux/slices/authSlice';

export default function Navbar() {
  const isAuth = useAuth();
  const dispath = useDispatch();
  return (
    <div>
      <div className={styles['hr']}></div>
      <nav className={'navbar ' + styles['navbar']}>
        <div className={'container ' + styles['container']}>
          <NavLink
            to='/cars'
            className={'navbar-brand ' + styles['navbar-brand']}
          >
            DIGITAL DRIVE
          </NavLink>
          <div className={'navbar-wrap ' + styles['navbar-wrap']}>
            <ul className={'navbar-menu ' + styles['navbar-menu']}>
              <li>
                <a href='/about'>О нас</a>
              </li>
              <li>
                <a href='#'>Новости</a>
              </li>
              <li>
                <a href='#contacts'>Контакты</a>
              </li>
              <li>
                <NavLink to='/adding'>Разместить объявление</NavLink>
              </li>
            </ul>
            <NavLink to='/profile' className={'profile ' + styles['profile']}>
              {isAuth ? 'Личный кабинет' : 'Войти'}
            </NavLink>
            {isAuth && (
              <NavLink
                to='/cars'
                className={'profile ' + styles['profile']}
                onClick={() => dispath(logout())}
              >
                {'Выйти'}
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
