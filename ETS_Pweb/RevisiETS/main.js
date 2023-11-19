const url = 'https://movie-database-alternative.p.rapidapi.com/?r=json&i=tt4154796';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9b4314a59cmshfcb5f3a27ccf87ep15975fjsn31ae75d32d34',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};

// Fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // Update the card content with the movie information
    document.getElementById('movieTitle').textContent = result.Title;
    document.getElementById('moviePlot').textContent = result.Plot;
  } catch (error) {
    console.error(error);
  }
}

// Call the fetchData function when the page is loaded
window.onload = fetchData;


