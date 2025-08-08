import { movies } from "../assets/data/data.js";
import RenderDetails from "./RenderMovieDetails.js";

document.addEventListener('DOMContentLoaded', () => {   

const params = new URLSearchParams(window.location.search);
const movieId = parseInt(params.get('id'), 10);

const movie = movies.find(m => m.id === movieId);
if (movie) {
  RenderDetails(movie);
}

});
