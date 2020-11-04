import React, { useContext, useEffect, useReducer } from "react";
import {
  BrowserRouter,
  Link,
  Redirect,
  Route,
  RouteProps,
  Switch,
} from "react-router-dom";
import { fetchGet } from "./fetch";
import { UserContext } from "./contexts/UserContext";
import { userReducer } from "./reducers/User";
import { Home, Private, SignIn, SignOut } from "./routes";

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { user } = useContext(UserContext);
  const isSignedIn = user.name !== "";
  return isSignedIn ? <Route {...props} /> : <Redirect to="/signin" />;
};

export const App: React.FC = () => {
  const [user, dispatch] = useReducer(userReducer, { name: "" });

  useEffect(() => {
    (async () => {
      const res = await fetchGet("/user");
      if (res.ok) {
        const text = await res.text();
        dispatch({ type: "SET", name: text });
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signout">Sign Out</Link>
          </li>
          <li>
            <Link to="/private">Private</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signout">
            <SignOut />
          </Route>
          <PrivateRoute exact path="/private">
            <Private />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};
