import axios from 'axios';

const API_KEY = '02e89e469d8693e9ccd991306d4f68c0';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const BASE_URL_MOVIE = 'https://api.themoviedb.org/3';

export const FetchMovies = async (requestWord, pageNumber = 1) => {
  const params = {
    api_key: API_KEY,
    query: requestWord,
    page: pageNumber,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
};

export const fetchTrendMovies = async () => {
  const instance = axios.create({
    baseURL: BASE_URL_MOVIE,
  });
  const params = {
    api_key: API_KEY,
  };
  const response = await instance.get(`/trending/movie/day`, { params });
  return response.data;
};

export const FetchMovieById = async id => {
  const instance = axios.create({
    baseURL: BASE_URL_MOVIE,
  });
  const params = {
    api_key: API_KEY,
  };
  const response = await instance.get(`/movie/${id}`, { params });
  return response.data;
};

export const FetchCreditsById = async id => {
  const instance = axios.create({
    baseURL: BASE_URL_MOVIE,
  });
  const params = {
    api_key: API_KEY,
  };
  const response = await instance.get(`/movie/${id}/credits`, { params });
  return response.data;
};

export const FetchRewiewsById = async id => {
  const instance = axios.create({
    baseURL: BASE_URL_MOVIE,
  });
  const params = {
    api_key: API_KEY,
  };
  const response = await instance.get(`/movie/${id}/reviews`, { params });
  return response.data;
};
