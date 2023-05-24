import React from "react";
import { useAuth } from "../hooks/useAuth";

const CreateProfile = () => {
  const { user, role } = useAuth();
  return <div>Create Profile</div>;
};

export default CreateProfile;
