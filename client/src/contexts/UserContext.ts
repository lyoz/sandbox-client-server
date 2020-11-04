import React from "react";

import { User, UserAction } from "../reducers/User";

export const UserContext = React.createContext(
  {} as { user: User; dispatch: React.Dispatch<UserAction> }
);
