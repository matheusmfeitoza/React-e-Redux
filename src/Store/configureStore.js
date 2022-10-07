import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { localStorage } from "./middleware/LocalStorage";
import { userReducer } from "./User/User.js";
import { tokenReducer } from "./Token/Token.js";
import { photosReducer } from "./Photos/Photos.js";

const middleware = [...getDefaultMiddleware(), localStorage];
const reducer = combineReducers({ userReducer, tokenReducer, photosReducer });

const store = configureStore({ reducer, middleware });
export default store;
