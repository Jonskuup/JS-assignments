'use strict';

const movies = [];

const numberOfMovies = Number(prompt("How many movies do you want to rate?"));

for (let i = 0; i < numberOfMovies; i++) {
    const title = prompt("Enter movie title: " + (i + 1) + ":");
    const rating = Number(prompt("Enter rating 1-5: "));
    
    const movie = {
        title: title,
        rating: rating
    };

    movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);

const output = document.querySelector("#output");

const heading = document.createElement("h2");
heading.textContent = "Movies sorted by rating:";
output.appendChild(heading);

for (const movie of movies) {
    const parahraph = document.createElement("p");
    parahraph.textContent = movie.title + " - Rating: " + movie.rating;
    output.appendChild(parahraph);
}

if (movies.length > 0) {
    const bestMovie = movies[0];

    const bestHeading = document.createElement("h2");
    bestHeading.textContent = "Highest-rated movie:";
    output.appendChild(bestHeading);

    const bestParahraph = document.createElement("p");
    bestParahraph.textContent = bestMovie.title + " - Rating: " + bestMovie.rating;
    output.appendChild(bestParahraph);
}