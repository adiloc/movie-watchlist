class Movie {
  constructor(data) {
    Object.assign(this, data)
  }




  getMovieHtml = () => {
    const {Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID} = this
    return `
      <div class="movies" data-set="${imdbID}">
        <img class="poster" src=${Poster}"/>
        <div class="flex-container">
          <span>
            <p class="movie-title">${Title}</p>
            <p class="movie-rating">⭐ ${imdbRating}</p>
          </span>
          <span>
            <p class="movie-runtime">${Runtime}min</p>
            <p class="movie-genre">${Genre}</p>
            <span>
              <span class="icon-add" data-set=${imdbID}></span>
              <p class="watchlist">Watchlist</p>
            </span>
          </span>
          <p class="movie-plot">${Plot}</p>
        </div>
      </div>
      `
  }
}

export default Movie