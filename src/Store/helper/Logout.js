import { clearData } from "../Photos/Photos.js";
import { eraseData } from "../Token/Token.js";
import { eraseUser } from "../User/User.js";

export const logout = () => (dispatch) => {
  try {
    dispatch(eraseData());
    dispatch(eraseUser());
    dispatch(clearData());
    window.localStorage.removeItem("token");
  } catch (error) {
    console.error(error);
  }
};
