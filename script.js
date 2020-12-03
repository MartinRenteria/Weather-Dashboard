
// Saves city into local storage 
// var savedSearch = JSON.parse(localStorage.getItem("pastForecastHistory")) || [];

// for (i = 0; i < savedSearch.length; i++) {

//   var createBtn = $(`<button class="list-group-item" data-city="${savedSearch[i]}">${savedSearch[i]}</button>`);

//   $("#city-list").prepend(createBtn);
// }
// Displays search data of cities onto weather div container
function weatherDisplay(city) {

  var apiKey = "ded885a5140a03bceffcd25035fcab57"

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
  // Potential on click history 
//   $("#listButton").on("click", "button", function () {

//     var cities = $(this).data("city");

//     weatherDisplay(cities);
// });

// function fiveDayForecast() {
//   var city = $("#searchInput").val();
//   var apiKey = "ded885a5140a03bceffcd25035fcab57" 
//   var forecast5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cities + "&units=imperial&appid=" + apiKey;

// $.ajax({
//   url: forecast5,
//   method: "GET"
// }).then(function (response) {
// console.log(response);
 
// if (time === "15:00:00")
// $(".date").html("<h3>" + response.name + " " + todayDate + "</h3>");
// })}; 
// $("#searchBtn").on("click", function () {

//   var citySearched = titleCase($("#searchCity").val());

//   if (!savedSearch.includes(citySearched)) {

//       var createBtn = $(`<button class="list-group-item" data-city="${citySearched}">${citySearched}</button>`);

//       $("#city-list").prepend(createBtn);

//       savedSearch.push(citySearched);

//       localStorage.setItem("PreviousForecastSearches", JSON.stringify(savedSearch));
//   }

//   weatherDisplay(citySearched);
// });


// // Adds functionality to the buttons generated in the list group, uses the data-city value passed into each button to get value
// $("#cities-list").on("click", "button", function () {

//   var citySearched = $(this).data("city");

//   weatherDisplay(citySearched);
// });


//   var buttonSearch = "https://api.openweathermap.org/data/2.5/weather?q=" + listButton + "&APPID=" + apiKey;
// // Performing ajax call for single day weather data 
//   $.ajax({
//       url: buttonSearch,
//       method: "GET"
//   }).then(function (response) {
//   console.log(response);

//   var tempF = (response.main.temp - 273.15) * 1.80 + 32;
//   var todayDate = moment().format("MM/DD/YYYY");

//   // Draws APi Data to weather div container
//   $(".city").html("<h3>" + response.name + " " + todayDate + "</h3>");
//   $(".resultTemp").text("Temperature: " + tempF.toFixed(2) + " °F");
//   $(".resultHum").text("Humidity: " + response.main.humidity + "%");
//   $(".resultWind").text("Wind Speed: " + response.wind.speed + " MPH");

// })});
// // function UVforecast()

// When search button is clicken, the api will bring the data onto the screen 
$("#searchBtn").on("click", function() {
  console.log("it worked")
  weatherDisplay("seattle")
})

// document.getElementById("searchBtn").addEventListener("click", function() {
//   console.log("hi");
// })