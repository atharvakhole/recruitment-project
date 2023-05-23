import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const HomeLayout = () => {
  const { user, role } = useAuth();

  if (user) {
    return role === "candidate" ? (
      <Navigate to={"/candidate"} />
    ) : (
      <Navigate to={"/recruiter"} />
    );
  }
  return <Outlet />;
};

export default HomeLayout;
