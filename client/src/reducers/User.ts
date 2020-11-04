import React from "react";

export type User = { name: string };

export type UserAction = { type: "SET"; name: string };

export const userReducer: React.Reducer<User, UserAction> = (state, action) => {
  switch (action.type) {
    case "SET":
      return { name: action.name };
    default:
      return state;
  }
};
