import '../../styles/main.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LoginPage } from '../../pages/login/login';
import { RegisterPage } from '../../pages/register/register';
import { ResetPasswordPage } from '../../pages/reset-password/reset-password';
import { ForgotPassword } from '../../pages/forgot-password/forgot-password';
import { ProfilePage } from '../../pages/profile/profile';
import { MainPage } from '../../pages/main/main';
import { FeedPage } from '../../pages/feed-page/feed-page';
import AppHeader from '../AppHeader/AppHeader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { checkUserAccess } from '../../services/actions/userForm';
import { IngredientPage } from '../../pages/ingredient/ingredient';
import { OrderPage } from '../../pages/order-page/order-page';
import getItems from '../../services/actions/ingredients';
import Modal from '../Modals/Modal/Modal';
import { IngredientDetails } from '../Modals/IngredientDetails/IngredientDetails';
import { FeedPageDetails } from '../Modals/FeedPageDetails/FeedPageDetails';
import { useEffect, FC } from 'react';
import { useDispatch, useSelector } from '../../services/hooks';
import { UserOrderPage } from '../../pages/user-order-page/user-order-page';
import { ProfileUserInfo } from '../ProfileUserInfo/ProfileUserInfo';

const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAccess());
    dispatch(getItems());
  }, [dispatch]);

  const storeSelector = useSelector((state) => state);
  const location = useLocation();
  const background = location.state?.locationIngredient || location;
console.log(storeSelector)
  return (
    <>
      <AppHeader />
      <Routes location={background}>
        <Route path="/" element={<MainPage />} />
        <Route path="ingredients/:id" element={<IngredientPage />} />
        <Route path="feed/:id" element={<OrderPage />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="orders" element={<ProfilePage />} />
        <Route
          path="login"
          element={
            <ProtectedRoute onlyUnAuth={true}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute onlyUnAuth={true}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <ProtectedRoute onlyUnAuth={true}>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="reset-password"
          element={
            <ProtectedRoute onlyUnAuth={true}>
              <ResetPasswordPage />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="profile"
          element={
            <ProtectedRoute onlyUnAuth={false}>
              <ProfilePage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path={'profile'}
          element={
            <ProtectedRoute onlyUnAuth={false}>
              <ProfilePage />
            </ProtectedRoute>
          }>
          <Route index element={<ProfileUserInfo />} />
          <Route path={'orders'} element={<UserOrderPage />} />
        </Route>
      </Routes>
      {location.state?.locationIngredient && (
        <Routes>
          <Route
            path="ingredients/:id"
            element={
              <Modal isModalRoute={true}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
      {location.state?.locationFeed && (
        <Routes>
          <Route
            path="/feed/:id"
            element={
              <Modal isModalRoute={true}>
                <FeedPageDetails />
              </Modal>
            }
          />
        </Routes>
      )}
      {location.state?.locationProfile && (
        <Routes>
          <Route path="/profile/orders/:id" element={<Modal isModalRoute={true}></Modal>} />
        </Routes>
      )}
    </>
  );
};

export default App;
