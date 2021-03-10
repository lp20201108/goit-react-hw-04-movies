import axios from "axios";

const KEY = "4fbdbd8abdbcde78896e194e86813212";
const BaseURL = "https://api.themoviedb.org/3/";

const fetchTrending = async () => {
  try {
    const response = await axios.get(
      `${BaseURL}trending/all/day?api_key=${KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${BaseURL}search/movie?api_key=${KEY}&page=1&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BaseURL}movie/${movieId}?api_key=${KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCast = async (movieId) => {
  try {
    const response = await axios.get(
      `${BaseURL}movie/${movieId}/credits?api_key=${KEY}`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

const fetchReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `${BaseURL}movie/${movieId}/reviews?api_key=${KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

const fetchData = (movieId) => {
  const movieDetails = fetchDetails(movieId);
  const movieCast = fetchCast(movieId);
  const movieReviews = fetchReviews(movieId);

  return Promise.all([movieDetails, movieCast, movieReviews]);
};

export {
  fetchTrending,
  searchMovies,
  fetchDetails,
  fetchCast,
  fetchReviews,
  fetchData,
};
