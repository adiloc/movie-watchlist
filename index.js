const dataMovie = document.getElementById("data")
console.log(dataMovie)

document.getElementById('watchlist-btn').addEventListener('click', () => {
  render()
  document.getElementById('start').style.display = "none"
})

function render () {

  fetch(`https://www.omdbapi.com/?s=blade&apikey=398f3ed5`)
  .then((res) => res.json())
  .then((data) => {
    const moviesArray = data.Search
    
    moviesArray.forEach((movie) => {
      fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=398f3ed5`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        console.log(data.Ratings[0])
        dataMovie.innerHTML += `
        <div class="movies">
        <img class="poster" src=${data.Poster}/>
        <div class="flex-container">
            <span>
              <p class="movie-title">${data.Title}</p>
              <p class="movie-rating">⭐ ${data.imdbRating}</p>
              </span>
              <span>
              <p class="movie-runtime">117 min</p>
              <p class="movie-genre">Action/Drama/Sci-fi</p>
              <span>
              <img id="watchlist-add-btn" class="icon-watchlist" src="/images/icon-1.png">
                <p class="watchlist">Watchlist</p>
              </span>
              </span>
              <p class="movie-plot">
              A blade runner must pursue and terminate four replicants who stole
              a ship in space, and have returned to Earth to find their creator.
              </p>
              </div>
          </div>
          `
        })
      })
  })

    }