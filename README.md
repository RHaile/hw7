## 1 Declare list of objects 
- ' let shows = {
    title:
    genre:
    seasons:
    rating:
    stream:
    image:
} '


## 2 Create variables using array methods
.filter()
- Genre
    - Action
    - Sitcom
    - Thriller
    - Sci-Fi
    - Drama
    - Horror
    - Romance
    
- Stream
    - Netflix
    - Max
    - Apple TV
    - Hulu
    - Amazon Prime
    - Disney+

.sort()
- ratings
- alphabetically

- ' let genreDrama = properties.filter(function(item){
  return item.genre = 'Drama'
}) '


## 3 Create empty space to display data
*HTML
- create empty element (section/div...) with a class name ""
- ' <section class="itemDisplay"></section> '

*JS
- call element and assign it to variable
- ' let itemDisplay = document.querySelector('.itemDisplay') '


## 4 Create/Define functions 
- for each array methods variables in #2 
- & one to dispaly all the whole list 'allShows
- ' function allProperities(){
  
itemDisplay.innerHTML = shows.map(function(item){
  return `
  <section class='propertyContainer animate__animated animate__zoomIn'>
  <img src="${item.image}" alt="" width='100%'>
  
  <h4>${item.title}</h4>
    <h5>${item.genre}</h5>
    <p>${item.rating}</p>  
</section>
  `
}).join('');
  
} '


## 5 HTML/CSS
- add subnavigation menu (W3schools)
  1. All Shows
  2. Genres:
    - Action
    - Sitcom
    - Thriller
    - Sci-Fi
    - Drama
    - Horror
    - Romance
  3. Streaming Platform
    - Netflix
    - Max
    - Apple TV
    - Hulu
    - Amazon Prime
    - Disney+
  4. Sort by
    - Alphabetically
    - Ratings

- Add CSS to liking



## Challenges 
Biggest difficulty was my 3 sort by functions (alphabetically/ratings/seasons). The three wouldn't work at the same time, only one button would work correctly and the other two would copy the working one. Took me a while but finally realized putting the sort() variable in each appropriate function instead of declaring it globally fixed the issue.