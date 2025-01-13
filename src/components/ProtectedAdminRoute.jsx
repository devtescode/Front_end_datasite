import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
  // Check if the admin token exists in localStorage
  const adminToken = localStorage.getItem('adminToken');

  if (!adminToken) {
    // If not authenticated, redirect to the admin login page
    return <Navigate to="/adminlogin" replace />;
  }

  // If authenticated, render the child component
  return children;
};

export default ProtectedAdminRoute;
