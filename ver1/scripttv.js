//TMDB 
//  https://api.themoviedb.org/3/discover/series?sort_by=popularity.desc&api_key=7a31ef8faf51733740c3af33cdc42c4a

const API_KEY = 'api_key=7a31ef8faf51733740c3af33cdc42c4a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const APIS_URL = BASE_URL + '/discover/tv?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const main = document.getElementById('main');
const formSearch =  document.getElementById('formSearch');
const search = document.getElementById('search');

getMovies(APIS_URL);



function getMovies(url) 
{
    fetch(url).then(res => res.json()).then(data => {

        console.log(data.results)
        localStorage.setItem("locdata",data.results);
        const locdata = data.results;
        console.log(locdata); 

        showMovies(data.results);
    })
}


function showMovies(data) {
   main.innerHTML = '';

    data.forEach(movie => {
        const {id,name, poster_path, overview} = movie;

        //var myemail="xyz@gmail.com";
        //localStorage.setItem("email",myemail);
        const movieEl = document.createElement('div');
        movieEl.classList.add('box');
        movieEl.innerHTML = `
            

            <img src="${IMG_URL+poster_path}" alt="${name}">
            <div class="in-box">

            <center><span>${name}</span> <br> 
            <button class="btndl" id="${id}" onClick="reply_click(this.id)" > <a href="dload.html" target="_blank"> <i class="fa fa-download"></i> Download </a></button>
            </center>

            </div>
            
             
            
        `
        main.appendChild(movieEl);
                        })
}

function reply_click(clicked_id)
  {
    localStorage.setItem("locid",clicked_id);
    console.log(locid);    
  }



formSearch.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) { 
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(APIS_URL);
    }

})





