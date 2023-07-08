import styles from './profile.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import { logoutUser } from '../../services/actions/userForm';
import { useDispatch } from '../../services/hooks';
import { Outlet } from 'react-router';

export const ProfilePage = (): JSX.Element => {
  const activeStyle = {
    color: '#f2f2f3',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refreshToken = getCookie('refreshToken');

  return (
    <>
      <main className={styles.profile__main}>
        <div className={styles.profile__content}>
          <div className={styles.profile_navigation}>
            <nav className={styles.profile_nav}>
              <NavLink
                to="/profile"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={`text text_type_main-medium text_color_inactive ${styles.profile_link}`}
                end>
                Профиль
              </NavLink>
              <NavLink
                to="orders"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className={`text text_type_main-medium text_color_inactive ${styles.profile_link}`}
                // state={{ order: true }}
                end>
                История заказов
              </NavLink>
              <NavLink
                to="/login"
                onClick={() => dispatch(logoutUser(refreshToken, () => navigate('/login')))}
                className={`text text_type_main-medium text_color_inactive ${styles.profile_link}`}>
                Выход
              </NavLink>
            </nav>
            <p className="text text_type_main-default text_color_inactive mt-20">
              В этом разделе вы можете изменить свои персональные данные
            </p>
          </div>
          <div className={styles.profile_info}>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};
