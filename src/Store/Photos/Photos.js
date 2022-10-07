import createAsyncFetch from "../helper/createAsyncFetch";

const photos = createAsyncFetch({
  name: "Photos",
  configData: ({ page, total }) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=${total}&_user=0`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }),
});
export const photosReducer = photos.reducer;
export const fetchFotos = photos.fetchData;
