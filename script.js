"use strict";
 

let numberOfFilms;

function start(){
   numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");

while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");
  
}

}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};

function remembermyfilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов? ", ""),
              b = prompt("На сколько оцените его? ", "");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log("done!");
        } else {
            console.log("error");
            i--;
        }
        }
}
remembermyfilms();

function detectpersonallevel(){
        
    if (personalMovieDB.count < 10){
        console.log("просмотрено довольно мало фильмов");

    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Судя по всему вы любите смотреть фильмы!");
    }
    else if (personalMovieDB.count >=50 ){
        console.log("Вы настоящий киноман!");
    }
    else{
        console.log("WRONG");
    }
}
detectpersonallevel();



function ShowMyBD(hidden){
    if (!hidden){
        console.log(personalMovieDB); 
    }
}

ShowMyBD(personalMovieDB.private);



function writeYourGeners(){
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр ${i}`);
        personalMovieDB.genres[i - 1] = genre;

    }
}
    
writeYourGeners();