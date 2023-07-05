import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';
import { useLocation, NavLink, matchPath } from "react-router-dom";
import { FC } from 'react';

const AppHeader: FC = () => {
  const activeStyle = {
    color: '#f2f2f3',
  };

  const location = useLocation();

  const isMainActive = matchPath(location.pathname, "/");
  const isFeedActive = matchPath(location.pathname, "/feed");
  const isProfileActive = matchPath(location.pathname, "/profile");

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <ul className={styles.header__list}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`text text_type_main-default text_color_inactive ${styles.header__list_button}`}>
            <BurgerIcon type={isMainActive ? "primary" : "secondary"} />
            Конструктор
          </NavLink>
          <NavLink
            to="/feed"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`text text_type_main-default text_color_inactive ${styles.header__list_button}`}>
            <ListIcon type={isFeedActive ? "primary" : "secondary"} />
            Лента заказов
          </NavLink>
        </ul>
        <div className={styles.header__logo}>
          <Logo />
        </div>
        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className={`text text_type_main-default text_color_inactive ${styles.header__list_button}`}>
          <ProfileIcon type={ isProfileActive ? "primary" : "secondary"} />
          Личный кабинет
        </NavLink>
      </div>
    </header>
  );
}

export default AppHeader;
