import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useLocalStorage("username", null);
  const [role, setRole] = useLocalStorage("role", null);
  const [token, setToken] = useLocalStorage("token", null);
  const [firstName, setFirstName] = useLocalStorage("firstName", null);
  const [lastName, setLastName] = useLocalStorage("lastName", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUsername(data.username);
    setRole(data.role);
    setToken(data.token);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUsername(null);
    setRole(null);
    setToken(null);
    setFirstName(null);
    setLastName(null);
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{ username, role, token, firstName, lastName, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
