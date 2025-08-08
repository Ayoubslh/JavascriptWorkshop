const API_KEY="11242955713d9eb4aab2ac2b11e46e09"
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';


async function fetchMovies() {
  const response = await fetch(`${BASE_URL}/movie/discover?api_key=${API_KEY}`);
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
async function fetchPopularMovies(){
   const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
   const data = await response.json();
   return data.results;
}

async function fetchTop5MoviesDrama(){
   const popularMovies = await fetchPopularMovies();
   return popularMovies.filter(movie => movie.genres.map(genre => genre.name).includes('Drama')).slice(0, 5);
}
async function fetchTop5MoviesAction(){
   const popularMovies = await fetchPopularMovies();
   return popularMovies.filter(movie => movie.genres.map(genre => genre.name).includes('Action')).slice(0, 5);
}
async function fetchTop5MoviesComedy(){
   const popularMovies = await fetchPopularMovies();
   return popularMovies.filter(movie => movie.genres.map(genre => genre.name).includes('Comedy')).slice(0, 5);
}



export { fetchPopularMovies, fetchMovieDetails, fetchTop5MoviesDrama, fetchTop5MoviesAction, fetchTop5MoviesComedy };