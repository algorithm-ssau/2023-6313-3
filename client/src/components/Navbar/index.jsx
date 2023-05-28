import { NavLink } from 'react-router-dom';

import styles from './style.module.css';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useLogoutUserMutation } from '../../redux/api/authApi';
import { logout } from '../../redux/slices/authSlice';

export default function Navbar() {
  const isAuth = useAuth();
  const dispath = useDispatch();
  const [logoutUser] = useLogoutUserMutation();
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
                <NavLink to='/about'>О нас</NavLink>
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
              {isAuth ? 'Личный кабинет' : 'Войти'}
            </NavLink>
            {isAuth && (
              <NavLink
                to='/cars'
                className={'profile ' + styles['profile']}
                onClick={async () => {
                  try {
                    const res = await logoutUser().unwrap();
                    if (res.success) {
                      dispath(logout());
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }}
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
