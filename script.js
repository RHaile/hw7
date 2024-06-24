// 1. List of objects of TV Shows

let tvShows = [
    {
        title: 'Succession',
        genre: 'Drama',
        seasons: 4,
        rating: 8.8,
        stream: 'Max',
        image: "./images/succession.png"
    },

    {
        title: 'Game of Thrones',
        genre: 'Drama',
        seasons: 8,
        rating: 9.2,
        stream: 'Max',
        image: "./images/got.png"
    },
    
    {
        title: '30 Rock',
        rating: 8.3,
        genre: 'Sitcom',
        seasons: 7,
        stream: 'Hulu',
        image: "./images/30rock.png"
    },
    
    {
        title: 'Arrested Devleopment',
        rating: 8.7,
        genre: 'Sitcom',
        seasons: 5,
        stream: 'Netflix',
        image: "./images/arrestedDev.png"
    },
  
    {
        title: 'The Sopranos',
        rating: 9.2,
        genre: 'Drama',
        seasons: 6,
        stream: 'Max',
        image: "./images/sopranos.png"
    },
  
    {
        title: 'Bridgerton',
        rating: 7.4,
        genre: 'Romance',
        seasons: 3,
        stream: 'Netflix',
        image: "./images/bridgerton.png"
    },

      
    {
        title: 'Curb Your Enthusiam',
        rating: 8.8,
        genre: 'Sitcom',
        seasons: 12,
        stream: 'Max',
        image: "./images/curb.png"
    },
  
    {
        title: 'Shameless',
        rating: 8.5,
        genre: 'Drama',
        seasons: 11,
        stream: 'Netflix',
        image: "./images/shameless.png"
    },
    
    {
        title: 'Seinfeld',
        rating: 8.9,
        genre: 'Sitcom',
        seasons: 9,
        stream: 'Netflix',
        image: "./images/seinfeld.png"
    },
   
    {
        title: "Stranger Things",
        genre: "Horror",
        rating: 8.7,
        seasons: 4,
        stream: 'Netflix',
        image: "./images/strangerThings.png"
    },

    {
        title: "The Witcher",
        genre: "Drama",
        rating: 8.0,
        seasons: 3,
        stream: 'Netflix',
        image: "./images/witcher.png"
    },

     {
        title: "Breaking Bad",
        genre: "Drama",
        rating: 9.5,
        seasons: 5,
        stream: 'Netflix',
        image: "./images/breakingBad.png"
    },

    {
        title: "Ted Lasso",
        genre: "Drama",
        rating: 9.0,
        seasons: 3,
        stream: 'Apple TV',
        image: "./images/tedLasso.png"
    },

    {
        title: "Black Mirror",
        genre: "Sci-Fi",
        rating: 8.7,
        seasons: 6,
        stream: 'Netflix',
        image: "./images/blackMirror.png"
    },

    {
        title: "Mr. Robot",
        genre: "Thriller",
        rating: 8.5,
        seasons: 4,
        stream: 'Amazon Prime',
        image: "./images/mrRobot.png"
    },

    {
        title: 'Friends',
        genre: 'Sitcom',
        seasons: 10,
        rating: 8.9,
        stream: 'Hulu',
        image: "./images/friends.png"
    },

     {
        title: "Them",
        genre: "Horror",
        seasons: 2,
        rating: 7.5,
        stream: 'Amazon Prime',
        image: "./images/them.png"
    },

    {
        title: "The Mandalorian",
        genre: "Action",
        seasons: 2,
        rating: 8.6,
        stream: 'Disney+',
        image: "./images/mandalorian.png"
    },

    {
        title: "American Horror Story",
        genre: "Horror",
        rating: 8.0,
        seasons: 12,
        stream: 'Hulu',
        image: "./images/ahs.png"
    },

    {
        title: 'Shining Girls',
        genre: 'Thriller',
        seasons: 1,
        rating: 7.4,
        stream: 'Apple TV',
        image: "./images/shiningGirls.png"
    }
]


// 2. Created vairables using array functions for each category

// a) Genres (action, drama, horror, romance, sci-fi, sitcom, thriller)

let genreAction = tvShows.filter(item => item.genre == 'Action');
let genreDrama = tvShows.filter(item => item.genre == 'Drama');
let genreHorror = tvShows.filter(item => item.genre == 'Horror');
let genreRomance = tvShows.filter(item => item.genre == 'Romance');
let genreSciFi = tvShows.filter(item => item.genre == 'Sci-Fi');
let genreSitcom = tvShows.filter(item => item.genre == 'Sitcom');
let genreThriller = tvShows.filter(item => item.genre == 'Thriller');

// b) Streaming Platforms (amazon prime, apple tv, disney+, hulu, max, netflix)

let streamAmazon = tvShows.filter(item => item.stream == "Amazon Prime");
let streamApple = tvShows.filter(item => item.stream == "Apple TV");
let streamDisney = tvShows.filter(item => item.stream == "Disney+");
let streamHulu = tvShows.filter(item => item.stream == "Hulu");
let streamMax = tvShows.filter(item => item.stream == "Max");
let streamNetflix = tvShows.filter(item => item.stream == "Netflix");




// 3. Create variable that calls html element
let itemDisplay = document.querySelector('.itemDisplay');



// 4. Creat & define functions for each category option

// b) Genre Functions
function actionFunction() {

    itemDisplay.innerHTML = genreAction.map((item) => 
     `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function dramaFunction() {

    itemDisplay.innerHTML = genreDrama.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function horrorFunction() {

    itemDisplay.innerHTML = genreHorror.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function romanceFunction() {

    itemDisplay.innerHTML = genreRomance.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function scifiFunction() {

    itemDisplay.innerHTML = genreSciFi.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function sitcomFunction() {

    itemDisplay.innerHTML = genreSitcom.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function thrillerFunction() {

    itemDisplay.innerHTML = genreThriller.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}


// c) Streaming Functions

function amazonFunction() {

    itemDisplay.innerHTML = streamAmazon.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');
}

function appleFunction() {

    itemDisplay.innerHTML = streamApple.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function disneyFunction() {

    itemDisplay.innerHTML = streamDisney.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function huluFunction() {

    itemDisplay.innerHTML = streamHulu.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function maxFunction() {

    itemDisplay.innerHTML = streamMax.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function netflixFunction() {

    itemDisplay.innerHTML = streamNetflix.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

// d) Sorting Functions

function alphaFunction() {

let sortAlpha = tvShows.sort((a, b) => a.title.localeCompare(b.title));
    
    itemDisplay.innerHTML = sortAlpha.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function ratingsFunction() {

let sortRatings = tvShows.sort((a, b) => b.rating - a.rating);

    itemDisplay.innerHTML = sortRatings.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

function seasonsFunction() {
    
let sortSeasons = tvShows.sort((a, b) => a.seasons - b.seasons);

    itemDisplay.innerHTML = sortSeasons.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}

// a) All Shows Function
function allShows() {

    itemDisplay.innerHTML = tvShows.map((item) =>
         `
    <div class="content">
  <img src="${item.image}" alt="" height='150px' width='150px'>

      <h4>${item.title}</h4>
      <h5>${item.genre}</p>
      <p>${item.seasons} Seasons</p> 
      <p>IMBD ${item.rating}/10</p>
      <p>Watch on: ${item.stream}</p>
    </div>
    `
    ).join('');

}