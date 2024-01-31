type CurrentWeatherVariables =
  | "temperature_2m"
  | "relative_humidity_2m"
  | "precipitation"
  | "rain"
  | "weather_code"
  | "surface_pressure"
  | "wind_speed_10m"
  | "is_day";

export type ForecastItemProps = {
  id: number;
  latitude: number;
  longitude: number;
};

export type ForecastPayload = {
  latitude: number[];
  longitude: number[];
  current: CurrentWeatherVariables[] | null;
  timezone: "America/Sao_Paulo" | "America/New_York" | null;
};

export type WeatherDataProps = {
  time?: string;
  temperature2m: number;
  relativeHumidity2m: number;
  precipitation: number;
  rain: number;
  weatherCode: number;
  surfacePressure: number;
  windSpeed10m: number;
  longitude: number;
  latitude: number;
  timezone: string;
  timezoneAbbreviation: string;
  isDay: number;
};
