import { fetchWeatherApi } from "openmeteo";
import * as T from "./Forecast.types";

export async function getForecastData(param: T.ForecastPayload) {
  const params: T.ForecastPayload = {
    // latitude: [53, 52.5244, -23.5475, -17.2186, -23.4339, 24],
    // longitude: [-8, 13.4105, -46.6361, -42.5903, -45.0711, 121],
    latitude: param.latitude,
    longitude: param.longitude,
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "precipitation",
      "rain",
      "weather_code",
      "surface_pressure",
      "wind_speed_10m",
      "is_day",
    ],
    timezone: "America/Sao_Paulo",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  const weatherData = responses.map((response): T.WeatherDataProps => {
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone() ?? "";
    const timezoneAbbreviation = response.timezoneAbbreviation() ?? "";
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current()!;

    return {
      time: new Date(
        (Number(current.time()) + utcOffsetSeconds) * 1000
      ).toLocaleDateString(),
      temperature2m: current.variables(0)!.value(),
      relativeHumidity2m: current.variables(1)!.value(),
      precipitation: current.variables(2)!.value(),
      rain: current.variables(3)!.value(),
      weatherCode: current.variables(4)!.value(),
      surfacePressure: current.variables(5)!.value(),
      windSpeed10m: current.variables(6)!.value(),
      longitude,
      latitude,
      timezone,
      timezoneAbbreviation,
      isDay: current.variables(7)!.value(),
    };
  });

  return weatherData;
}
