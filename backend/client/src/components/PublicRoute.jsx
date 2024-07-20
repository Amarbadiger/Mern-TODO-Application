import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  return localStorage.getItem("token") ? (
    <Navigate to="/dashboard" />
  ) : (
    <>{children}</>
  );
};

export default PublicRoute;
