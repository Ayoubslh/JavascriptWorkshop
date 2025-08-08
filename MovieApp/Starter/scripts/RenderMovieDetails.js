function RenderDetails(movie) {
  const container = document.getElementById("movie-detail-page");
  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero" style="background-image: url('${movie.background}'); width: 100%;">
      <div class="thumbnail">
        <img src="${movie.poster}" alt="${movie.title}" />
      </div>

    </section>

    <!-- Action Buttons -->
    <section class="action-buttons text-center" style="margin-top: 3rem;">
      <button class="watch-btn">▶️ Watch Now</button>
      <button class="watch-btn" style="background: rgba(255, 255, 255, 0.1); margin-left: 1rem;">➕ Add to List</button>
      <button class="watch-btn" style="background: rgba(255, 255, 255, 0.1); margin-left: 1rem;">💖 Favorite</button>
    </section>

    <!-- Info Section -->
    <section class="desc-section text-center">
      <h2>Movie Details</h2>
      <div class="movie-meta" style="display: flex; flex-direction: column; gap: 1rem; align-items: center; justify-content: center;">
    <h1 style="margin-top: 2rem; font-size: 3rem;">${movie.title}</h1>
      <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Duration:</strong> ${movie.duration || "N/A"} min</p>
        <p><strong>Rating:</strong> ⭐ ${movie.rating}/10</p>
      </div>
      <h2 style="margin-top: 3rem;">Description</h2>
      <p>${movie.description}</p>
    </section>
  `;

  container.scrollIntoView({ behavior: "smooth" });
}

export default RenderDetails;   
