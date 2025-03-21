let container = document.getElementById("container");
const url = 'https://iris-spice-uncle.glitch.me/result';
let loader = document.getElementById("loader-container");


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '931904d7abmshd1248ddd5d45fe5p196f73jsn0351504c085d',
		'x-rapidapi-host': 'imdb-top-1000-movies-series.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	
};


async function getData(){
try {
	const response = await fetch(url, options);
    if(!response.ok){
        throw new Error("Invalid or failed to fetch", response.status);
    }
	const result = await response.json();
	setTimeout(() => {
        displayData(result);
    }, 4000); // 4 seconds delay

} catch (err) {
    console.error(err.message);
}}


 function displayData(obj){
    console.log(obj)
    container.innerHTML = ""; 
obj.forEach((element, index) => {
      let item =   document.createElement("div");
      item.className = "item"    
      item.innerHTML= `
      <p>Movie Name:${element.Series_Title}</p>   
      <p>Movie Genre: ${element.Genre}</p> 
      <p>IMDB rating: ${element.IMDB_Rating}</p>
      <img src="${element.Poster_Link}">

      `;
      item.style.animationDelay = `${index * 0.1}s`;
      
      container.appendChild(item)
     
    }); 
    loader.remove();
}

window.addEventListener("DOMContentLoaded", function(){
    getData();
})
