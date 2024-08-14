// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_key = "adec69cbf831e5c40bdddee464c88a3c";

const btnEL = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const formEl = document.querySelector(".myform");

const fetchData = async (input) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_key}&units=metric`
    );
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const getDate = new Date();

      let day = getDate.getUTCDate();
      let year = getDate.getUTCFullYear();
      let month = months[getDate.getUTCMonth()];
      document.querySelector(".date").innerHTML = day;
      document.querySelector(".month").innerHTML = month;
      document.querySelector(".year").innerHTML = year;
      document.querySelector(".cityName").innerHTML = data.name;
      document.querySelector(".type").innerHTML = data.weather[0].main;
      document.querySelector(".degree").innerHTML =
        Math.ceil(data.main.temp) + "&deg;C";
      document.querySelector(".lowval").innerHTML = data.main.temp_min;
      document.querySelector(".highval").innerHTML = data.main.temp_max;
      document.querySelector(
        ".imgSection"
      ).innerHTML = `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt="" />`;

      inputEl.value = "";
    }
  } catch (err) {
    console.log(err);
  }
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = inputEl.value;

  if (value !== "") {
    fetchData(value);
  } else {
    alert("Please enter your city name");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const getDate = new Date();

  let day = getDate.getUTCDate();
  let year = getDate.getUTCFullYear();
  let month = months[getDate.getUTCMonth()];

  console.log(day, year, month);
});
