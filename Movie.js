class Movie {
  constructor(data) {
    Object.assign(this, data)
  }
  getWatchlistHtml = () => {
    const { Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID } = this
    return `
      <div class="movies" data-set="${imdbID}">
        <img class="poster" src=${Poster}"/>
        <div class="flex-container">
          <span>
            <p class="movie-title">${Title}</p>
            <p class="movie-rating">⭐ ${imdbRating}</p>
          </span>
          <span>
            <p class="movie-runtime">${Runtime}</p>
            <p class="movie-genre">${Genre}</p>
            <span class="remove-btn">
              <span id="${imdbID}" class="icon-add icon-remove" data-remove=${imdbID}></span>
              <p class="watchlist">Watchlist</p>
            </span>
          </span>
          <p class="movie-plot">${Plot}</p>
        </div>
      </div>
      `
  }
  getMovieHtml = () => {
    const { Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID } = this
    return `
      <div class="movies" data-set="${imdbID}">
        <img class="poster" src=${Poster}"/>
        <div class="flex-container">
          <span>
            <p class="movie-title">${Title}</p>
            <p class="movie-rating">⭐ ${imdbRating}</p>
          </span>
          <span>
            <p class="movie-runtime">${Runtime}</p>
            <p class="movie-genre">${Genre}</p>
            <span class="add-btn remove-btn">
              <span id="${imdbID}" class="icon-add" data-add=${imdbID}></span>
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
