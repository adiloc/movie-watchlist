import Movie from "./Movie.js"
import { removeWatchlist } from "./utilis.js"

const dataMovie = document.getElementById("data")
const start = document.getElementById("start")

render()

document.addEventListener("click", (e) => {
  if (e.target.dataset.remove) {
    removeWatchlist(e.target.dataset.remove)
    render()
  }
})

function render() {
  if (localStorage.length > 0) {
    start.style.display = "none"
  } else {
    start.style.display = "flex"
  }
  dataMovie.innerHTML = ""
  for (let imdbId in localStorage) {
    if (imdbId.startsWith("tt")) {
      const data = JSON.parse(localStorage.getItem(imdbId))
      dataMovie.innerHTML += new Movie(data).getWatchlistHtml()
    }
  }
}
