let box = document.getElementById('box');
let imgUrl = 'https://image.tmdb.org/t/p/w500/';
async function showMovies(){
    let id = localStorage.getItem("id");
    try{
        let res = await fetch(`
        
https://api.themoviedb.org/3/tv/on_the_air?api_key=fad7ba1a836913088b4258c5a60e253c&language=en-US&page=1
        `);
        let data = await res.json();
        data.results.forEach(item=>{
            if(item.id == id){
                box.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt=""/>
                `
                
            }
        })
        
        
    }
    catch(err){
        console.log(err)
    }
}

showMovies()