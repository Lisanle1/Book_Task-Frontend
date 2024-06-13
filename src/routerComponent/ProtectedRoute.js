import React from 'react';
import { Route, Link, Navigate } from 'react-router-dom';

// Define ProtectedRoute component
const ProtectedRoute = ({ element: Element, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated ? <Element /> : <Navigate to='/' />}
  />
);

export default ProtectedRoute;
