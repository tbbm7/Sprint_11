import { useSelector, useDispatch } from '../../services/hooks';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ProfileUserInfo.module.css';
import { useState } from 'react';
import { changeUserData } from '../../services/actions/userForm';
import { ChangeEvent, FormEvent } from 'react';

export function ProfileUserInfo(): JSX.Element {
  const { user } = useSelector((store) => store.userReducer);
  const [userData, setUserData] = useState(user);
  const [input, setInput] = useState({ name: false, email: false });
  const dispatch = useDispatch();

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
        <Input
          icon="EditIcon"
          disabled
          onChange={onFormChange}
          placeholder="Пароль"
          value="******"
        />
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
    </>
  );
}
