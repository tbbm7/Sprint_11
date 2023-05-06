import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <ul className={styles.header__list}>
          <a href="##" type="button" className={styles.header__list_button}>
            <BurgerIcon type="primary" />
            Конструктор
          </a>
          <a href="##" type="button" className={styles.header__list_button}>
            <ListIcon />
            Лента заказов
          </a>
        </ul>
        <div className={styles.header__logo}>
          <Logo />
        </div>
        <a href="##" type="button" className={styles.header__list_button}>
          <ProfileIcon />
          Личный кабинет
        </a>
      </div>
    </header>
  );
}

export default AppHeader;
