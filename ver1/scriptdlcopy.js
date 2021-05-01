const mvurl = localStorage.getItem("locmvurl");
getmvinfo(mvurl);

function getmvinfo(url) 
    {
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(data => {console.log(data) })
        
        showmvinfo(data);

}

function showmvinfo(){
    main.innerHTML = '';


        const {id,title, poster_path} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('inmain');
        movieEl.innerHTML = `
            
        <p>${id}</p>
     
            
        `
        main.appendChild(movieEl);
                    



}