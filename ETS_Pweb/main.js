document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "http://it-its.id/api/movies";
  const movieContainer = document.querySelector(".row");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((movieData) => {
        const ratings = movieData.Ratings.map((rating) => `${rating.Source}: ${rating.Value}`).join("<br>");

        const movieElement = document.createElement("div");
        movieElement.className = "col-6";
        movieElement.innerHTML = `
          <div class="mt-4 p-5 bg-primary text-white rounded">
              <h2>Title: ${movieData.Title}</h2>
              <p>Director: ${movieData.Director}</p>
              <p>Genre: ${movieData.Genre}</p>
              <p>Released: ${movieData.Released}</p>
              <p>IMDb Rating: ${movieData.imdbRating}</p>
              <p>Metascore: ${movieData.Metascore}</p>
              <p>${movieData.Plot}</p>
              <h2>Ratings</h2>
              <p>${ratings}</p>
          </div>
        `;
        movieContainer.appendChild(movieElement);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});



