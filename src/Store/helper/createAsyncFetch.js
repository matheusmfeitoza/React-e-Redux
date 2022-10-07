import { createSlice } from "@reduxjs/toolkit";

/**
 *
 * @param {object} config
 * @param {string} config.name
 * @param {object} config.initialState
 * @param {object} config.reducers
 * @param {Function} config.configData
 * @returns
 */

const createAsyncFetch = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      isLogged: false,
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      ...config.reducers,
    },
    fetchLogout(state) {
      state.loading = false;
      state.data = null;
      state.error = null;
      state.isLogged = false;
    },
  });

  const { fetchError, fetchStarted, fetchSuccess, fetchLogout } = slice.actions;

  const fetchData = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const { url, options } = config.configData(payload);
      const response = await fetch(url, options);
      const data = await response.json();
      return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchError(error.message));
    }
  };

  const LogoutAll = () => async (dispatch) => {
    await dispatch(fetchLogout);
  };

  return { ...slice, fetchData, LogoutAll };
};

export default createAsyncFetch;
