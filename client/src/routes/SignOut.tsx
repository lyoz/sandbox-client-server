import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { fetchPost } from "../fetch";
import { UserContext } from "../contexts/UserContext";

export const SignOut: React.FC = () => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const handleClick = async () => {
    const res = await fetchPost("/signout", {});
    if (res.ok) {
      dispatch({ type: "SET", name: "" });
      history.push("/");
    }
  };
  return (
    <>
      <h2>SignOut</h2>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        sign out
      </button>
    </>
  );
};
