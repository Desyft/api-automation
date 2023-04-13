import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

const weatherApi = axios.create({
    baseURL: "https://api.weatherbit.io/v2.0",
    params: {
      key: process.env.API_KEY,
    },
  });

const currentWeather = ({ lat, lon }) =>
  weatherApi.get("current", {
    params: { lat, lon },
  });

export default { currentWeather };
