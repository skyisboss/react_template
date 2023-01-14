import { combineReducers } from "@reduxjs/toolkit";
import { AUTH } from "./actionType";
import auth from "./slices/auth.slice";
const modules = {
  [AUTH]: auth,
};
const reducer = combineReducers(modules);
export default reducer;