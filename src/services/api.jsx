import axios from 'axios';

const API_KEY = 'a68afe173cef30a4b341939976fb5342';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function moviesApi(movies) {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
        include_adult: false,
        query: movies,
      },
    });
    const review = response.data.results;
    return review;
  } catch (error) {
    console.error(error);
  }
}

export async function trendingApi() {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: {
        api_key: API_KEY,
      },
    });
    const results = response.data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}

export async function movieDetailsApi(id) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    const results = response.data;
    return results;
  } catch (error) {
    console.error(error);
  }
}

export async function castApi(id) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    const cast = response.data.cast;
    return cast;
  } catch (error) {
    console.error(error);
  }
}

export async function reviewsApi(id) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    const review = response.data.results;
    return review;
  } catch (error) {
    console.error(error);
  }
}
