import createAsyncFetch from "../helper/createAsyncFetch";

const user = createAsyncFetch({
  name: "User",
  reducers: {
    fetchSuccess: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        state.isLogged = true;
      },
    },
  },
  configData: (token) => ({
    url: "https://dogsapi.origamid.dev/json/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }),
});
export const logout = user.LogoutAll;
export const userReducer = user.reducer;
export const fetchUser = user.fetchData;
export const { fetchLogout } = user.actions;
