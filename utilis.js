function addWatchlist(imdbId) {
  fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=398f3ed5`)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem(imdbId, JSON.stringify(data))
    })
}

function removeWatchlist(imdbId) {
  localStorage.removeItem(imdbId)
}

export { removeWatchlist, addWatchlist }
