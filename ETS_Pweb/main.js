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
          <div class="mt-4 p-5 jumbotron-custom">
              <p>${movieData.Plot}</p>

          </div>
        `;
                movieContainer.appendChild(movieElement);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});



