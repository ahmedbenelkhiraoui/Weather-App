class Weather {
  constructor(city) {
    this.apiKey = "e75cce9421c24b7c28df29e8b8a8652a";
    this.city = city;
  }

  // Featch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.city
      }&units=metric&APPID=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
