import '../../styles/main.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ProfilePage from '../../pages/profile/profile';
import MainPage from '../../pages/main/main';
import AppHeader from '../AppHeader/AppHeader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { checkUserAccess } from '../../services/actions/userForm';
import IngredientPage from '../../pages/ingredient/ingredient';
import getItems from '../../services/actions/ingredients';
import Modal from '../Modals/Modal/Modal';
import IngredientDetails from '../Modals/IngredientDetails/IngredientDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAccess());
    dispatch(getItems());
  }, [dispatch]);

  const storeSelector = useSelector((state) => state);
  const location = useLocation();
  const background = location.state?.locationIngredient || location;

  return (
    <>
      <AppHeader />
      <Routes location={background}>
        <Route path="/" element={<MainPage />} />
        <Route path="ingredients/:id" element={<IngredientPage />} />
        <Route
          path="login"
          element={
            <ProtectedRoute onlyUnAuth={true} >
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute onlyUnAuth={true} >
              <RegisterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <ProtectedRoute onlyUnAuth={true} >
              <ForgotPasswordPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="reset-password"
          element={
            <ProtectedRoute onlyUnAuth={true} >
              <ResetPasswordPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute onlyUnAuth={false} >
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="ingredients/:id" element={<IngredientPage />} />
      </Routes>
      {location.state?.locationIngredient && (
        <Routes>
          <Route
            path="ingredients/:id"
            element={
              <Modal>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
