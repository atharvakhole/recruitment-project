import React from "react";
import { useAuth } from "../hooks/useAuth";

const CreateProfile = () => {
  const { user, role } = useAuth();
  return (
    <div>
      {user}
      <br />
      {role}
    </div>
  );
};

export default CreateProfile;
