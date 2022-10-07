import createAsyncFetch from "../helper/createAsyncFetch";
import { getLocalStorageValue } from "../helper/getLocalStorageValue.js";

const token = createAsyncFetch({
  name: "Token",
  initialState: {
    data: {
      token: getLocalStorageValue("token", null),
    },
  },
  reducers: {
    fetchSuccess: {
      reducer(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: "token",
              value: payload.token,
            },
          },
        };
      },
    },
    eraseData(state) {
      state.data = null;
    },
  },
  configData: (user) => ({
    url: "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    },
  }),
});

export const { eraseData } = token.actions;
export const tokenReducer = token.reducer;
export const fetchToken = token.fetchData;
