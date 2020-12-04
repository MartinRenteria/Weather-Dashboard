var apiKey = "ded885a5140a03bceffcd25035fcab57"

// Saves city into local storage 
var savedSearch = JSON.parse(localStorage.getItem("pastForecastHistory")) || [];

for (i = 0; i < savedSearch.length; i++) {

  var cityBtn = $(`<button class="list-group-item" data-city="${savedSearch[i]}">${savedSearch[i]}</button>`);

  $("#city-list").prepend(cityBtn);
}
// Displays search data of cities onto weather div container
function weatherDisplay(city) {

  // URL link to specific data of desired data
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
  // Performing ajax call for single day weather data 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
    console.log(response);

    var tempF = (response.main.temp);
    var todayDate = moment().format("MM/DD/YYYY");
    var weatherIcon = (response.weather[0].icon);
    var weatherURL = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";

    // Draws APi Data to weather div container
    $("#city").html("<h3>" + response.name + " " + todayDate + "</h3>");
    $("#weatherPicture").attr("src", weatherURL);
    $("#resultTemp").text("Temperature: " + tempF.toFixed(2) + " °F");
    $("#resultHum").text("Humidity: " + response.main.humidity + "%");
    $("#resultWind").text("Wind Speed: " + response.wind.speed + " MPH");

  })};

//   // Potential on click history 
//   $("#listButton").on("click", "button", function () {

//     var cities = $(this).data("city");

//     weatherDisplay(cities);
// });

function fiveDayForecast(city) {

  var forecast5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";

$.ajax({
  url: forecast5,
  method: "GET"
}).then(function (response5) {
console.log(response5);

var response5 = response5.list;

$(document).ready(function() {

  $("#date").text(`(${moment().format("l")})`);
  for (i = 1; i < 7; i++) {
      var forecastDate = $(`#date${i}`);
      forecastDate.text(moment().add(`${i}`, "d").format("l"));
  };
});

for (i = 0; i < response5.length; i++) {

  $("#weatherIcon" + i).attr("src", "https://openweathermap.org/img/wn/" + (response5[i].weather[0].icon) + "@2x.png");
  $("#temp" + i).text("Temp: " + Math.round(response5[i].main.temp) + " °F");
  $("#humid" + i).text("Humidity: " + response5[i].main.humidity + "%");


}

})};

// // function UVforecast()

// When search button is clicken, the api will bring the data onto the screen 
$("#searchBtn").on("click", function() {

    var cityName = $("#searchInput").val();

    if (savedSearch.includes(cityName)) {

    var cityBtn = $(`<button class="list-group-item" data-city="${cityName}">${cityName}</button>`);
  
    $("#city-list").prepend(cityBtn);

    savedSearch.push(cityName);

    localStorage.setItem("pastForecastHistory", JSON.stringify(savedSearch));
  }

    weatherDisplay(cityName);
    fiveDayForecast(cityName)

});

$("#cities-list").on("click", "button", function () {

    var cityName = $(this).data("city");

    weatherDisplay(cityName);
    fiveDayForecast(cityName)
});
