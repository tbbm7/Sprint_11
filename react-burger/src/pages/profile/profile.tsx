import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './profile.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';
import { useState } from 'react';
import { logoutUser, changeUserData } from '../../services/actions/userForm';
import { ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch} from '../../services/hooks';

export const ProfilePage = (): JSX.Element => {
  const activeStyle = {
    color: '#f2f2f3',
  };

  const { user } = useSelector((store) => store.userReducer);

  const [userData, setUserData] = useState(user);

  const [input, setInput] = useState({ name: false, email: false });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const refreshToken = getCookie('refreshToken');

  function profileFormSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(changeUserData(userData));
  }

  function onFormChange(e: ChangeEvent<HTMLInputElement>) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function checkButton() {
    return JSON.stringify(user) === JSON.stringify(userData);
  }

  function onFormReset() {
    setUserData({ name: user.name, email: user.email });
  }

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
                state={{ order: true }}
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
          <form className={styles.profile_form} onSubmit={profileFormSubmit}>
            <Input
              icon="EditIcon"
              placeholder="Имя"
              name="name"
              value={userData.name}
              disabled={input.name ? false : true}
              onChange={onFormChange}
              onIconClick={() => setInput({ ...input, name: !input.name })}
            />
            <Input
              icon="EditIcon"
              placeholder="Логин"
              name="email"
              value={userData.email}
              disabled={input.name ? false : true}
              onChange={onFormChange}
              onIconClick={() => setInput({ ...input, email: !input.email })}
            />
            <Input icon="EditIcon" disabled onChange={onFormChange} placeholder="Пароль" value="******" />
            <div className={styles.container__buttons}>
              <Button
                type="secondary"
                size="medium"
                htmlType="button"
                onClick={onFormReset}
                disabled={checkButton() ? true : false}>
                Отмена
              </Button>
              <Button
                type="primary"
                size="medium"
                htmlType="submit"
                disabled={checkButton() ? true : false}>
                Сохранить
              </Button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
