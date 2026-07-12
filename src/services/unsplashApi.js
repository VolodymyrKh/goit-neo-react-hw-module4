import axios from "axios";

const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com",
});

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchImages = async (query, page = 1, perPage = 12) => {
  const { data } = await unsplashApi.get("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
      orientation: "landscape",
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return data;
};
