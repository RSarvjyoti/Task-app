// import { useAuth } from '../context/AuthContext';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;  // Optional: Show a loader or spinner during the auth check
  }

  return user ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
