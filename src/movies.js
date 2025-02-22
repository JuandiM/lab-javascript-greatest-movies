// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const directorsArr = movies.map(function(eachMovie){
    return eachMovie.director
  })
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter(function(spielbergMovies){return spielbergMovies.director === 'Steven Spielberg' && spielbergMovies['genre'].includes('Drama')})
return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  let totalAverage = movies.reduce((film1, film2) => {
    if (fiml1.score) {
      return film1 + film2.score;
    } else {
      return film1;
    }
  }, 0);

  return Number((totalAverage / movies.length).toFixed(2)); // return the average converted into a number and only two decimals
  // you can use Number(), parseInt() or simply plus + to convert a string into a number
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes("Drama");
});
return scoresAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  
    const ordered = movies.sort(function(filmA, filmB) {
      console.log(filmA.year);
  
      const firstFilm = Number(filmA.year);
      const secondFilm = Number(filmB.year);
  
      if (firstFilm < secondFilm) {
        return -1;
      } else {
        return 1;
      }
    });
    return ordered;
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
