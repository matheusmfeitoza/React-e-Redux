import createAsyncFetch from "../helper/createAsyncFetch";

const photos = createAsyncFetch({
  name: "Photos",
  configData: (page) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});
export const photosReducer = photos.reducer;
export const fetchFotos = photos.fetchData;
