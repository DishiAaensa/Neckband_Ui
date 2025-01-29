import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("authenticated");
  return isAuthenticated ? children : <Navigate to="/l" />;
}

export default ProtectedRoute;
