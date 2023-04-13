import api from "./api.js";

try {
  const currentWeather = await api.currentWeather({
    lat: "40.730610",
    lon: "-73.935242",
  });
  console.log(currentWeather.data.data[0].state_code);

  //   const forecastWeather = await weatherApi.get("forecast/3hourly", {
  //     params: { postal_code: "10001" },
  //   });
  //   console.log(forecastWeather.data);
  
} catch (error) {
  console.log(error);
}
