 import {MovieCarousel} from "./CarouselClass.js";
 import {movies} from "../assets/data/data.js";
 import renderMovies from "./RenderMovieCard.js";


 const carouselContainer = document.getElementById('carouselContainer');

 // Smooth scroll for navigation
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(link.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });

        // Movie card interactions
        document.querySelectorAll('.movie-card').forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('h3').textContent;
                console.log(`Playing: ${title}`);
            });
        });

        // Category interactions
        document.querySelectorAll('.category').forEach(category => {
            category.addEventListener('click', () => {
                const genre = category.querySelector('h3').textContent;
                console.log(`Browsing: ${genre}`);
            });
        });
        document.addEventListener('DOMContentLoaded', () => {

            const carousel = new MovieCarousel('carouselContainer');
            renderMovies(movies, document.getElementById('movieGrid'));
            renderMovies(movies, document.getElementById('recommendedMovies'));
            
            renderMovies(movies, document.getElementById('actionMovies'));
            renderMovies(movies, document.getElementById('comedyMovies'));
            renderMovies(movies, document.getElementById('dramaMovies'));

        });
