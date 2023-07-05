import { Navigate } from 'react-router-dom';
import {useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({onlyUnAuth = false, children}) {

  const isLoggedIn = useSelector((store) => store.userReducer.isAuth);
  const location = useLocation();
  const from = location.state?.from || `/`;

  if (onlyUnAuth && isLoggedIn) {
    return <Navigate to={from}/>;
  }

  if (!onlyUnAuth && !isLoggedIn) {
    return <Navigate to={'/login'} state={{from: location}}/>;
  }

  return children;
}

