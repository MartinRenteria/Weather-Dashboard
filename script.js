$("#searchBtn").on("click", weatherDisplay)

function weatherDisplay() {

var cities = $("#searchInput").val();

var apiKey = "ded885a5140a03bceffcd25035fcab57"


var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cities + "&APPID=" + apiKey;
var forecast5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cities + "&APPID=" + apiKey;

  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
  console.log(response);

  var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  var todayDate = moment().format("MM/DD/YYYY");
  var iconcode = response.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

  //transfer content to HTML
  $(".city").html("<h2>" + response.name + " " + todayDate + "</h2>");
  $("#wicon").attr("src", iconurl);
  $(".temp").text("Temperature: " + tempF.toFixed(2) + " °F");
  $(".humidity").text("Humidity: " + response.main.humidity + "%");
  $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
  })
}