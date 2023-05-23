import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoutes = (props) => {
  const { user, role } = useAuth();
  if (props.roleRequired) {
    return user && props.roleRequired === role ? (
      <Outlet />
    ) : (
      <Navigate to={"/login"} />
    );
  } else {
    return user ? <Outlet /> : <Navigate to={"/login"} />;
  }
};
