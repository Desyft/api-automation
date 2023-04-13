import api from "./api.js";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

try {
  for (let count = 0; count < 2; count++) {
    console.time("currentWeather");
    const currentWeather = await api.currentWeather({
      lat: "40.730610",
      lon: "-73.935242",
    });
    console.log(currentWeather.data.data[0].state_code);
    console.timeEnd("currentWeather");
    delay(6000);
  }
} catch (error) {
  console.log(error);
}
