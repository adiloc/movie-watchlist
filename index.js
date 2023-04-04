import Movie from "./Movie.js"
import { removeWatchlist, addWatchlist } from "./utilis.js"
const searchEl = document.getElementById("search-el")
const searchBtn = document.getElementById("search-btn")
const dataMovie = document.getElementById("data")

document.addEventListener("click", (e) => {
  if (e.target.dataset.add) {
    document
      .getElementById(`${e.target.dataset.add}`)
      .classList.toggle("icon-remove")
    addWatchlist(e.target.dataset.add)
    removeWatchlist(e.target.dataset.add)
  }
})

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    searchBtn.click()
  }
})

searchBtn.addEventListener("click", () => {
  fetch(
    `https://www.omdbapi.com/?s=${searchEl.value.replace(
      " ",
      "+"
    )}&apikey=398f3ed5`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.Search) {
        dataMovie.innerHTML = `
      <div id="start" class="start">
      <h3>Sorry, we couldn't find what you're looking for.</h3>
      </div>
      `
      } else {
        dataMovie.innerHTML = ""
        const moviesArray = data.Search

        moviesArray.forEach((movie) => {
          fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=398f3ed5`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              if (data.Plot !== "N/A" && data.Poster !== "N/A") {
                dataMovie.innerHTML += new Movie(data).getMovieHtml()
              }
            })
        })
      }
    })
})
