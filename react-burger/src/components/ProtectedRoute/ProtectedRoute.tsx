import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import { FC } from 'react';
import { IProtectedRoute } from '../../services/types/data';

const ProtectedRoute: FC<IProtectedRoute> = ({ onlyUnAuth = false, children }) => {
  const isLoggedIn = useSelector((store) => store.userReducer.isAuth);
  const location = useLocation();
  const from = location.state?.from || `/`;

  if (onlyUnAuth && isLoggedIn) {
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !isLoggedIn) {
    return <Navigate to={'/login'} state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
