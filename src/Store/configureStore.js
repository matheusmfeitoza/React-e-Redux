import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { localStorage } from "./middleware/LocalStorage";
import { userReducer } from "./User/User.js";
import { tokenReducer } from "./Token/Token.js";

const middleware = [...getDefaultMiddleware(), localStorage];
const reducer = combineReducers({ userReducer, tokenReducer });

const store = configureStore({ reducer, middleware });
export default store;
