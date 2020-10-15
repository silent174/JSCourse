"use strict";
 
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов? ", ""),
          b = prompt("На сколько оцените его? ", "");
         
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b; 
        console.log("done!"); 
    } else {
        console.log("erroe");
        i--;
    }
    
        }
        if (personalMovieDB.count < 10){
            console.log("просмотрено довольно мало фильмов");

        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("you're really like watching movies!");
        }
        else if (personalMovieDB.count >=50 ){
            console.log("You fucking Moviewatcher!");
        }
        else{
            console.log("WRONG");
        }
console.log(personalMovieDB);

