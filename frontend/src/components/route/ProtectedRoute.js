import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({
  isSuperAdmin,
  isAdmin,
  component: Component,
  ...rest
}) => {
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth);
  return (
    <>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Redirect to="/login" />;
            }
            // If user not an admin, he should not access this page
            if (isAdmin === true && user.role !== 'admin') {
              return <Redirect to="/" />;
            }
            if (isSuperAdmin === true && user.role !== 'super admin') {
              return <Redirect to="/dashboard" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </>
  );
};

export default ProtectedRoute;
