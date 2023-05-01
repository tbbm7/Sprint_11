import { Logo, ProfileIcon, BurgerIcon, ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './AppHeader.module.css';

function AppHeader() {
    return (
        <header className={styles.header}>
          <div className={styles.header__container} >
            <ul className={styles.header__list}>
              <button type="button"  className={styles.header__list_button}>
                <BurgerIcon type="primary"/>
                Конструктор
              </button>
              <button type="button" className={styles.header__list_button}>
                <ListIcon/>
                Лента заказов
              </button>
          </ul>
          <div className={styles.header__logo}>
            <Logo/>
          </div>
          <button type="button" className={styles.header__list_button}>
            <ProfileIcon/>
            Личный кабинет
          </button>
        </div>
      </header>
    )
};

export default AppHeader