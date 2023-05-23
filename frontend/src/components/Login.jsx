import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login({ user, role });
    navigate("/");
  };

  return (
    <div>
      <label>
        Username:{""}
        <input
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </label>
      <label>
        Role:{""}
        <input
          type="text"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
