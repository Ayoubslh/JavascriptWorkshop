const API_KEY="11242955713d9eb4aab2ac2b11e46e09"
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';


async function fetchPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data.results); // Array of movie objects
  return data.results;
}
async function fetchMovieDetails(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data); // Movie details object
  return data;
}
fetchMovieDetails(755898)