import createAsyncFetch from "../helper/createAsyncFetch";

const photos = createAsyncFetch({
  name: "Photos",
  initialState: {
    list: [],
    page: 0,
    isInfinite: true,
  },
  reducers: {
    loadMorePhotos(state, action) {
      state.list.push(...action.payload);
      state.page++;
      if (action.payload.length === 0) state.isInfinite = false;
    },
    clearData(state) {
      state.list = [];
      state.page = 0;
      state.isInfinite = true;
      state.data = null;
    },
  },
  configData: (page = 1) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});
const { loadMorePhotos } = photos.actions;
export const { clearData } = photos.actions;
export const photosReducer = photos.reducer;
const fetchFotos = photos.fetchData;

export const fecthPhotosAndSaveListPhotos =
  (page = 1) =>
  async (dispatch) => {
    const { payload } = await dispatch(fetchFotos(page));
    await dispatch(loadMorePhotos(payload));
  };
