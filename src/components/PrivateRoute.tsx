import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    return <Navigate to="/" />; 
  }

  return <>{element}</>; 
};

export default PrivateRoute;
