import { eraseData } from "../Token/Token.js";
import { eraseUser } from "../User/User.js";

export const logout = () => (dispatch) => {
  try {
    dispatch(eraseData());
    dispatch(eraseUser());
    window.localStorage.removeItem("token");
  } catch (error) {
    console.error(error);
  }
};
