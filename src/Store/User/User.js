import createAsyncFetch from "../helper/createAsyncFetch";

const user = createAsyncFetch({
  name: "User",
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
export const userReducer = user.reducer;
export const fetchUser = user.fetchData;
