import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoutes = (props) => {
  const { username, role, token } = useAuth();
  if (props.roleRequired) {
    return username && token && props.roleRequired === role ? (
      <Outlet />
    ) : (
      <Navigate to={"/login"} />
    );
  } else {
    return token ? <Outlet /> : <Navigate to={"/login"} />;
  }
};
