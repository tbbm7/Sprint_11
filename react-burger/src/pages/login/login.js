import {
    EmailInput,
    PasswordInput,
    Button,
  } from '@ya.praktikum/react-developer-burger-ui-components';
  import { Link, useNavigate } from 'react-router-dom';
  import { useDispatch } from 'react-redux';
  import styles from './login.module.css';
  import { loginUser } from '../../services/actions/userForm';
  import { useState } from 'react';
  
  export default function LoginPage() {
    const dispatch = useDispatch();
  
    const navigate = useNavigate();
  
    const [loginForm, setloginFormValue] = useState({ email: '', password: '' });
  
    const onLoginFormChange = (e) => {
      setloginFormValue({ ...loginForm, [e.target.name]: e.target.value });
    };
  
    function loginFormSubmit(e) {
      e.preventDefault();
      dispatch(loginUser(loginForm, () => navigate('/')));
    }
  
    return (
      <>
        <main className={styles.login__main}>
          <div className={styles.login__content}>
            <p className="text text_type_main-medium mb-6">Вход</p>
            <form className={styles.login_form} onSubmit={loginFormSubmit}>
              <EmailInput name="email" onChange={onLoginFormChange} value={loginForm.email} />
              <PasswordInput name="password" onChange={onLoginFormChange} value={loginForm.password}/>
              <div className={styles.login_button}>
                <Button htmlType="submit" type="primary" size="medium">
                  Войти
                </Button>
              </div>
            </form>
            <div className={`mt-20 ${styles.login_links}`}>
              <p className="text text_type_main-default">
                Вы — новый пользователь?
                <Link to="/register" className="text text_type_main-default ml-1">
                  Зарегистрироваться
                </Link>
              </p>
              <p className="text text_type_main-default">
                Забыли пароль?
                <Link to="/forgot-password " className="text text_type_main-default ml-1">
                  Восстановить пароль
                </Link>
              </p>
            </div>
          </div>
        </main>
      </>
    );
  }
  