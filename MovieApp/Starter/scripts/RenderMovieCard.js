 function renderMovies(moviesToRender, parentElement) {
            const grid = parentElement;
            grid.innerHTML = '';
            
            moviesToRender.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                movieCard.innerHTML = `
                    <div class="movie-poster"><img src="${movie.poster}" alt="${movie.title}"></div>
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-info">
                        <span>${movie.year}</span>
                        <div class="movie-rating">⭐ ${movie.rating}</div>
                    </div>
                    <p class="movie-description">${movie.description}</p>
                `;
                
                movieCard.addEventListener('click', () => showMovieDetails(movie));
                grid.appendChild(movieCard);
            });
        }


export default renderMovies;