import Movie from "./Movie.js"

let dataMovie = document.getElementById("data")


function alert() {
  console.log("mda")
}

document.addEventListener('click', (e) => {
  if (e.target.dataset.clean){
    alert(e.target.dataset.clean)
  }
  
})


document.getElementById('search-btn').addEventListener('click', () => {
  const searchEl =document.getElementById('search-el').value.replace(' ', '+')
  dataMovie.innerHTML = ''
  
  fetch(`https://www.omdbapi.com/?s=${searchEl}&apikey=398f3ed5`)
  .then((res) => res.json())
  .then((data) => {
    const moviesArray = data.Search
    
    moviesArray.forEach((movie) => {
      fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=398f3ed5`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        
        dataMovie.innerHTML += new Movie(data).getMovieHtml()
        
        })
      })
  })
})



