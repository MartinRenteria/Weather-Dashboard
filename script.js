var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=&APPID=" + searchForCity + "ded885a5140a03bceffcd25035fcab57";

  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {