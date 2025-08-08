import { movies } from './../assets/data/data.js';
import renderMovies from "./RenderMovieCard.js";

document.addEventListener('DOMContentLoaded', () => {
    renderMovies(movies, document.getElementById('moviesGrid'));
});
