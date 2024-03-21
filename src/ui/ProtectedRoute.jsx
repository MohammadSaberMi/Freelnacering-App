import { useEffect } from 'react';
import useAuthorize from '../features/authentication/useAuthorize';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. load the authenticated use
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorize();
  console.log(isAuthorized);
  // 2. check if is authorized or not check is authenticated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/auth');
    if (!isAuthorized && !isLoading) navigate('/not-access', { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);
  // 3. while loading => show loading

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );
  // 4. if user authenticated and authorized => reder the app

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
