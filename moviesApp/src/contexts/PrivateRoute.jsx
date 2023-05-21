import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';

export const PrivateRoute = ({ children}) => {
  const { isAuthenticated } = useContext(UserContext);
      
  if (isAuthenticated) {
    return children
  }
    
  return <Navigate to="/login" />
}
