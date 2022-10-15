let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
  constructor(title, rating, haveWatched){
    this.title = title;
    this.rating = rating;
    this.haveWatched = haveWatched;
  }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
  console.log("A new movie is added");
  allMovies.push(movie);
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
  console.log("Printing all movies....");
  for(let i=0; i<allMovies.length; i++)
  {
    console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched)
  }
  console.log("\n");
  console.log("You have "+ allMovies.length +" movies in total");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
  var counter = 0
  console.log("printing movie that has a rating higher than " + rating)
  for(let i=0; i<allMovies.length; i++)
  {
    if(allMovies[i].rating > rating)
    {
      counter++;
      console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating)
    }
  }
 
  console.log("\n");
  console.log("In total, there are "+ counter +" matches");
  console.log("\n");
}
//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
  console.log("changing the status of the movie...");
  for(let i=0; i<allMovies.length; i++)
  {
    if(allMovies[i].title === title)
      allMovies[i].haveWatched = !allMovies[i].haveWatched
  }
}

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);