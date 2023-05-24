import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const HomeLayout = () => {
  const { username, role, token } = useAuth();

  if (token && username) {
    return role === "candidate" ? (
      <Navigate to={"/candidate"} />
    ) : (
      <Navigate to={"/recruiter"} />
    );
  }
  return <Outlet />;
};

export default HomeLayout;
