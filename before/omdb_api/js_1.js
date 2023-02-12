// Query String, 문자를 갖고 검색
// 주소?속성=값&속성=값&속성=값

import axios from 'axios'

function fetchMovies() {
  axios
  .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
  .then(res => {
    console.log(res)
    const h1El = document.querySelector('h1')
    const imgEl = document.querySelector('img')
    h1El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster
  })
}

fetchMovies()