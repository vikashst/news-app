import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = (category) => {
  return axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      country: 'us',
      apiKey: API_KEY,
    },
  });
}