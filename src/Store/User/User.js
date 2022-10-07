import createAsyncFetch from "../helper/createAsyncFetch";

const user = createAsyncFetch({
  name: "User",
  reducers: {
    fetchSuccess: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
    },
    eraseUser(state) {
      state.data = null;
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
export const { eraseUser } = user.actions;
export const userReducer = user.reducer;
export const fetchUser = user.fetchData;
