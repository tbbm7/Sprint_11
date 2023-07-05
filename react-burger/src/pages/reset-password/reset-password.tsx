import {
  Input,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import styles from './reset-password.module.css';
import {
  resetPassword,
} from "../../services/actions/userForm";
import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { useDispatch} from '../../services/hooks';


export const ResetPasswordPage = (): JSX.Element => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [resetPasswordForm, setresetPasswordFormValue] = useState({ password: '', token: '' });

  const onResetPasswordForm = (e: ChangeEvent<HTMLInputElement>) => {
    setresetPasswordFormValue({ ...resetPasswordForm, [e.target.name]: e.target.value });
  };

  function resetFormSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(resetPassword(resetPasswordForm, () => navigate("/login")));
  }

  return (
    <>
      <main className={styles.reset__main}>
        <div className={styles.reset__content}>
          <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
          <form className={styles.reset_form} onSubmit={resetFormSubmit}>
          <PasswordInput
              placeholder="Введите новый пароль"
              name="password"
              onChange={onResetPasswordForm}
              value={resetPasswordForm.password}
            />
            <Input
              placeholder="Введите код из письма"
              name="token"
              type="text"
              onChange={onResetPasswordForm}
              value={resetPasswordForm.token}
            />
            <div className={styles.reset_button}>
              <Button htmlType="submit" type="primary" size="medium">
                Восстановить
              </Button>
            </div>
          </form>
          <div className={`mt-20 ${styles.reset_links}`}>
            <p className="text text_type_main-default">
              Вспомнили пароль?
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
