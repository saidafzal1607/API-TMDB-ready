let list = document.querySelector('.main__list');
let imgUrl = 'https://image.tmdb.org/t/p/w500/';
async function findMovies(){
    let name = localStorage.getItem("query");
    try{
        let res = await fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=fad7ba1a836913088b4258c5a60e253c&language=en-US&query=${name}&page=1&include_adult=false`);
        let data = await res.json();
        for(let movie of data.results){
            console.log(movie);
            list.innerHTML += `
            <li class="card">
                <img class="movie__img" src="${imgUrl}${movie.poster_path}" alt="${movie.title}" />
                <div class="card-content" >
                    <h3 class="card__title">${movie.title}</h3>
                    <p class="card__date">${movie.release_date}</p>
                    <p class="card__text">${movie.overview}</p>
                </div>
            </li>`

            
        }
        
    }
    catch(err){
        console.log(err)
    }
}

findMovies()