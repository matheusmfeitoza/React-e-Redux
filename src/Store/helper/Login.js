import { fetchToken } from "../Token/Token.js";
import { fetchUser } from "../User/User.js";

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload) {
      const { token } = payload;
      await dispatch(fetchUser(token));
    }
  } catch (error) {
    console.log(error);
  }
};

export const autoLogin = (token) => async (dispatch) => {
  try {
    await dispatch(fetchUser(token));
  } catch (error) {
    console.error(error);
  }
};
