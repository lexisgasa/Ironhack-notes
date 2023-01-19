// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directorsRaw = movies.map( movies => movies.director )
    let directorsFiltered = directorsRaw.filter((director, index) => directorsRaw.indexOf(director) === index);

    // Jarko approach
    // let directosFilteredAlt = [... new Set(directorsRaw)];
    // console.log(directosFilteredAlt);

    console.log(directorsFiltered);
    return directorsFiltered;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

    const dramaGenre = movies.filter( movie => {
        return ( movie.director === "Steven Spielberg" && movie.genre.includes("Drama") )
    } )
    console.log(dramaGenre)
    return dramaGenre.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

    function scoresAverage(movies) {
        const totalScore = movies.map((puntuation) => puntuation.score)
        console.log(totalScore);
    
        let sum = parseFloat(totalScore.reduce((a, b) => a + b));
        console.log(sum);


        let fixed = sum.toFixed(2)
        console.log(fixed)
        console.log(typeof fixed)
        let fixedNumber = Number(fixed)
        console.log( fixedNumber)

        let avg = fixed / totalScore.length
        console.log(avg)
        let avgFixed = parseFloat( avg.toFixed(2))
        console.log(avgFixed)


    
return avgFixed;
        // let avg = Number(sum) / totalScore.length;
  

        
    
      
    }
   


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

    let dramaMovies = movies.filter((movies) => {    
        return (movies.genre.includes("Drama"));
           });
    let dramaScores = dramaMovies.map(score => score.score )
    console.log(dramaScores)

    let sumScores = dramaScores.reduce((a, b) => a + b)
    console.log(sumScores)
    
    let avg = ( sumScores / dramaScores.length )
    console.log(avg)
    return avg;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
