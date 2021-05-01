const API_KEY = 'api_key=7a31ef8faf51733740c3af33cdc42c4a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
const APIS_URL = BASE_URL + '/discover/tv?sort_by=popularity.desc&'+API_KEY;




const mvurl = localStorage.getItem("locmvurl");
getmvinfo(mvurl);

function getmvinfo(url) 
    {
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data => {console.log(data)
        console.log(typeof(data)); //object fixx
        showmvinfo(data);
    })
}

function showmvinfo(data){
    main.innerHTML="";
    const movieEl = document.createElement('div');
    movieEl.classList.add('inmain');
    document.getElementById("inmain").innerHTML = 
    movieEl.innerHTML = ` <p> ${data.title} </p>
    
    
    `
        main.appendChild(movieEl);
  }
