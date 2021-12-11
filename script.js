let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
// class Movie {
//class Movie(string title ,int rating, boolean haveWatched) {
class Movie {
    constructor (title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies...");
    for (let i = 0; i < allMovies.length; i += 1){
        //MAKE BETTER
        //console.log("The movie: " + String(allMovies[i].title) + " has a rating of: "+ String(allMovies[i].rating) + " and has been watched? " + String(allMovies[i].haveWatched) );
        //Spiderman, rating of 3, havewatched: false
        console.log(String(allMovies[i].title) + ", rating of "+ String(allMovies[i].rating) + ", havewatched: " + String(allMovies[i].haveWatched) );
    }
    console.log("");
    console.log("You have "+String(allMovies.length) + " movies in total");

    //console.log(allMovies.length);
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    let cunt = 0;
    //printing movie that has a rating higher than 3.5
    console.log("printing movie that has a rating higher than "+String(rating));
    for (let i = 0; i < allMovies.length; i += 1){
        //MAKE BETTER
        if (allMovies[i].rating > rating) {
            //console.log("The movie: " + String(allMovies[i].title) + " has a rating of: "+ String(allMovies[i].rating) + " and has been watched? " + String(allMovies[i].haveWatched) );
            console.log(String(allMovies[i].title) + " has a rating of "+ String(allMovies[i].rating));
            cunt += 1;
        }
    }
    console.log("");
    //In total, there are 2 matches
    console.log("In total, there are "+String(cunt) + " matches");
    //console.log(cunt);
}


//Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
    for (let i = 0; i < allMovies.length; i += 1){
        //MAKE BETTER
        if (allMovies[i].title == title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
            break;
        }
    }
    console.log("changing the status of the movie...");


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
