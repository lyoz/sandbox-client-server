import React, { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

export const UserInfo: React.FC = () => {
  const { user } = useContext(UserContext);
  return <>Username: {user.name}</>;
};
