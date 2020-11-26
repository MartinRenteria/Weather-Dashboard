//When search button is clicken, the api will bring the data onto the screen 
$("#searchBtn").on("click", weatherDisplay)
// Displays search data of cities onto weather div container
function weatherDisplay(e) {
  e.preventDefault();

var cities = $("#searchInput").val();

var apiKey = "ded885a5140a03bceffcd25035fcab57"

// URL link to specific data of desired data
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cities + "&APPID=" + apiKey;
// Performing ajax call for single day weather data 
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
  console.log(response);

  var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  var todayDate = moment().format("MM/DD/YYYY");

  // Draws APi Data to weather div container
  $(".city").html("<h3>" + response.name + " " + todayDate + "</h3>");
  $(".resultTemp").text("Temperature: " + tempF.toFixed(2) + " °F");
  $(".resultHum").text("Humidity: " + response.main.humidity + "%");
  $(".resultWind").text("Wind Speed: " + response.wind.speed + " MPH");

  })};
  // Potential on click history 
//   $("#listButton").on("click", "button", function () {

//     var cities = $(this).data("city");

//     weatherDisplay(cities);
// });

function fiveDayForecast() {
  var cities = $("#searchInput").val();
  var apiKey = "ded885a5140a03bceffcd25035fcab57" 
  var forecast5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cities + "&units=imperial&appid=" + apiKey;

$.ajax({
  url: forecast5,
  method: "GET"
}).then(function (response) {
console.log(response);
 
if (time === "15:00:00")
$(".date").html("<h3>" + response.name + " " + todayDate + "</h3>");
})}; 

function listButtonSearch() {
  var listButton = $(this).text();
  console.log(listButton);

  var buttonSearch = "https://api.openweathermap.org/data/2.5/weather?q=" + listButton + "&APPID=" + apiKey;
// Performing ajax call for single day weather data 
  $.ajax({
      url: buttonSearch,
      method: "GET"
  }).then(function (response) {
  console.log(response);

  var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  var todayDate = moment().format("MM/DD/YYYY");

  // Draws APi Data to weather div container
  $(".city").html("<h3>" + response.name + " " + todayDate + "</h3>");
  $(".resultTemp").text("Temperature: " + tempF.toFixed(2) + " °F");
  $(".resultHum").text("Humidity: " + response.main.humidity + "%");
  $(".resultWind").text("Wind Speed: " + response.wind.speed + " MPH");

})};
// function UVforecast()