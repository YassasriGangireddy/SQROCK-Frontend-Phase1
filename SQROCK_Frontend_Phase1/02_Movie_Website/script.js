// ================= SEARCH MOVIES =================

function searchMovies() {

    const searchInput = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(function(card) {

        const movieName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (movieName.includes(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// ================= SEARCH USING ENTER KEY =================

document
    .getElementById("searchInput")
    .addEventListener("keyup", function(event) {

        if (event.key === "Enter") {
            searchMovies();
        }

    });


// ================= FILTER BY GENRE =================

function filterMovies(selectedGenre) {

    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(function(card) {

        const genreElement = card.querySelector(".genre");

        if (!genreElement) {
            return;
        }

        const movieGenre = genreElement
            .textContent
            .trim();

        if (movieGenre === selectedGenre) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}


// ================= SHOW ALL MOVIES =================

function showAllMovies() {

    const movieCards = document.querySelectorAll(".movie-card");

    movieCards.forEach(function(card) {
        card.style.display = "block";
    });

}