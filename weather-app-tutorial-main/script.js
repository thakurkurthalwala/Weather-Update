let weather = {
  apiKey: "6356ae438e8ca2b26852a4bb13659dad",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { visibility } = data;
    // const { uvi } = data;
    document.querySelector(".city").innerText =  name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C" ;
    document.querySelector(".humidity").innerText = "Humidity:- " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed:- " + speed + " km/h";
    document.querySelector(".visibility").innerText = "Visibility:- " + visibility + " m"; 
    // document.querySelector(".uvi").innerText = "UVI:- " + uvi ;
    document.querySelector(".weather").classList.remove("loading");
    // document.body.style.backgroundImage =
    // "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Abu Dhabi");
























/*BMI Js goes here



var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
function validateForm() {
    if (
        age.value == "" ||
        height.value == "" ||
        weight.value == "" ||
        (male.checked == false && female.checked == false)
    ) {
        alert("All fields are required!");
        document
            .getElementById("submit")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }
    form.reset();
    var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
    var result = "";
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
        result = "Overweight";
    } else if (30 <= bmi && bmi <= 34.9) {
        result = "Obese";
    } else if (35 <= bmi) {
        result = "Extremely obese";
    }
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var t = document.createTextNode(result);
    var b = document.createTextNode("BMI: ");
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.getElementById("submit").removeEventListener("click", countBmi);
    document
        .getElementById("submit")
        .removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);



*/