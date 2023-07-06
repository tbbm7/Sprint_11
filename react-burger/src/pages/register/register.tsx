import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import { registerUser } from '../../services/actions/userForm';
import { useState } from 'react';
import { useDispatch} from '../../services/hooks';
import { ChangeEvent, FormEvent } from 'react';

export const RegisterPage = (): JSX.Element => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [registerForm, setregisterForm] = useState({ name: '', email: '', password: '' });

  const onRegisterFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setregisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  function regestrationFormSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(registerUser(registerForm, () => navigate('/login')));
  }

  return (
    <>
      <main className={styles.register__main}>
        <div className={styles.register__content}>
          <p className="text text_type_main-medium mb-6">Регистрация</p>
          <form className={styles.register_form} onSubmit={regestrationFormSubmit}>
            <Input placeholder="Имя" type="text" name="name" onChange={onRegisterFormChange} value={registerForm.name}/>
            <EmailInput name="email" onChange={onRegisterFormChange} value={registerForm.email}/>
            <PasswordInput name="password" onChange={onRegisterFormChange} value={registerForm.password}/>
            <div className={styles.register_button}>
              <Button htmlType="submit" type="primary" size="medium">
                Зарегистрироваться
              </Button>
            </div>
          </form>
          <div className={`mt-20 ${styles.register_links}`}>
            <p className="text text_type_main-default">
              Уже зарегистрированы?
              <Link to="/login" className="text text_type_main-default ml-1">
                Войти
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
