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

function showmvinfo(){
    for (let prop in mvObj){
        
        console.log(mvObj[prop]);
    }

    main.innerHTML="";
    const movieEl = document.createElement('div');
    movieEl.classList.add('inmainbox');
    movieEl.innerHTML = ` 

    <div class="bgbox">
      <img src="${IMG_URL+mvObj.backdrop_path}" alt="imghor" id="backdrop">
      
    <div class="infobox">
      <img src="${IMG_URL+mvObj.poster_path}" alt="img" id="poster">
      <div class="infotextbox">
        <h1> ${mvObj.title}</h1>
        <span>${mvObj.release_date} , ${mvObj.runtime}Min</span> <br> 
        <span>User Rating : ${mvObj.vote_average} </span> <br> <br>
        <h3>OVERVEIW</h3> 
        <span>${mvObj.overview}</span>
        <br> <br> 
        <center>
        <button class="btndl"> <a href=""> <i class="fa fa-download"></i> Download 720p  </a></button>
        <button class="btndl"> <a href=""> <i class="fa fa-download"></i> Download 1080p </a></button>
        <button class="btndl"> <a href=""> <i class="fa fa-download"></i> Download <span style="font-size: 12px;color: whitesmoke;">from fastest server</span>  </a></button>   
      </center>
        
      </div>
    </div>
    
  </div> 





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