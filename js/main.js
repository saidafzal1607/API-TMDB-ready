const apiKey = 'fad7ba1a836913088b4258c5a60e253c';
const imgUrl = 'https://image.tmdb.org/t/p/w500';
const reqMovie = 'https://api.themoviedb.org/3/movie/popular?api_key=fad7ba1a836913088b4258c5a60e253c&language=en-US&page=1';
const onTv = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=fad7ba1a836913088b4258c5a60e253c&language=en-US&page=1';
let pop_movie = document.querySelector('.popular__movies');

async function popularMovies(){
    try{
        let res = await fetch(onTv);
        let data = await res.json();

        let movies = ""
        for(let movie of data.results){
            // console.log(movie)
            movies += `
            <div class="popular__card"   id="${movie.id}" >
                <img  class="movie__img" onclick="getDetails(this)" src="${imgUrl}${movie.poster_path}" alt="movie"/>
                <span class="movie__percent">${movie.vote_average * 10}</span>
                <h3 class="movie__name">${movie.name}</h3>
                <p class="movie__date">${movie.first_air_date}</p>

            </div>
            `
            console.log(movie)
            pop_movie.innerHTML = movies;
        }
        
    }
    catch(err){
        console.log(err)
    }
}
popularMovies();


function searchMovies(e){
    event.preventDefault();
    localStorage.setItem("query",e.target.movie.value);
    location.pathname = '../search.html';
}    




function getDetails (e){
    localStorage.setItem("id", e.parentNode.id)
    console.log(e.parentNode.id)
    location.pathname = '../details.html';
}