const API_KEY = 'api_key=7a31ef8faf51733740c3af33cdc42c4a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;
const APIS_URL = BASE_URL + '/discover/tv?sort_by=popularity.desc&'+API_KEY;

let mvObj = {} ;

const mvurl = localStorage.getItem("locmvurl");
getmvinfo(mvurl);
function getmvinfo(url) 
{
console.log(url);
//tryOne
fetch(url)
.then(function(response){
return response.json(); 
})
.then(function(data){
  console.log(data);
  // Setting-up  varibles
  mvname = data.title;
  mvtime=data.runtime;
  mvObj = data;
  showmvinfo();
});
//tryOne ends
}

function showmvinfo(data){
    for (let prop in mainObj){
        
        console.log(mainObj[prop]);
    }

    main.innerHTML="";
    const movieEl = document.createElement('div');
    movieEl.classList.add('inmain');
    movieEl.innerHTML = ` <p>${mvObj.title}</p>
    <img src="${IMG_URL+mvObj.poster_path}" alt="${mvObj.title}">
    
    
    `
        main.appendChild(movieEl);
  }






  // Original
 /* 
 fetch(url)
  .then(response => response.json())
  .then(data => {console.log(data)
  console.log(typeof(data)); //object fixx
  thename=data.title;
  thetime=data.runtime;
  showmvinfo(data);                              
                          })
*/
  //