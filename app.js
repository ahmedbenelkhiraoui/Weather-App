// init storage
const storage = new Storage();

// Get stored location data
const weatherLoation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLoation);

// init ui
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;

  // Change location
  weather.changeLocation(city);

  // Set location in LS
  storage.setLocationData(city);

  // get and display weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);

      ui.paint(results);
    })
    .catch(err => console.log(err));
}
