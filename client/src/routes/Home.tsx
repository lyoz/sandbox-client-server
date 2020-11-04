import React, { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

export const Home: React.FC = () => {
  const { user } = useContext(UserContext);
  const isSignedIn = user.name !== "";
  return (
    <>
      <h2>Home</h2>
      {isSignedIn ? <>signed in (name: {user.name})</> : <>not signed in</>}
    </>
  );
};
