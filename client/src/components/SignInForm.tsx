import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { fetchGet, fetchPost } from "../fetch";
import { UserContext } from "../contexts/UserContext";

export const SignInForm: React.FC = () => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchPost("/signin", { username });
    const res = await fetchGet("/user");
    if (res.ok) {
      const text = await res.text();
      dispatch({ type: "SET", name: text });
      history.push("/");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <button>sign in</button>
    </form>
  );
};
