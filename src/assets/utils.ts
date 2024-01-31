const CLEAR_SKY = "Clear sky";
const MAINLY_CLEAR = "Mainly clear";
const PARTLY_CLOUDY = "Partly cloudy";
const OVERCAST = "Overcast";
const FOG = "Fog";
const DEPOSITING_RIME_FOG = "Depositing rime fog";

const LIGHT_DRIZZLE = "Light drizzle";
const MODERATE_DRIZZLE = "Moderate drizzle";
const DENSE_DRIZZLE = "Dense drizzle";

const DENSE_FREEZING_DRIZZLE = "Dense freezing drizzle";

const SLIGHT_RAIN = "Slight rain";
const MODERATE_RAIN = "Moderate rain";
const HEAVY_RAIN = "Heavy rain";
const LIGHT_FREEZING_RAIN = "Light freezing rain";
const HEAVY_FREEZING_RAIN = "Heavy freezing rain";

const SLIGHT_SNOW_FALL = "Slight snow fall";
const MODERATE_SNOW_FALL = "Moderate snow fall";
const HEAVY_SNOW_FALL = "Heavy snow fall";
const SNOW_GRAINS = "Snow grains";
const SLIGHT_RAIN_SHOWERS = "Slight rain showers";
const MODERATE_RAIN_SHOWERS = "Moderate rain showers";
const VIOLENT_RAIN_SHOWERS = "Violent rain showers";

const SLIGHT_SNOW_SHOWERS = "Slight snow showers";
const HEAVY_SNOW_SHOWERS = "Heavy snow showers";

const SLIGHT_THUNDERSTORM = "Slight thunderstorm";

const THUNDERSTORM_SLIGHT_HAIL = "Thunderstorm with slight hail";
const THUNDERSTORM_HEAVY_HAIL = "Thunderstorm with heavy hail";

export function WeatherCodeDescription(code: number): string {
  switch (code) {
    case 0:
      return CLEAR_SKY;
    case 1:
      return MAINLY_CLEAR;
    case 2:
      return PARTLY_CLOUDY;
    case 3:
      return OVERCAST;
    case 45:
      return FOG;
    case 48:
      return DEPOSITING_RIME_FOG;
    case 51:
      return LIGHT_DRIZZLE;
    case 53:
      return MODERATE_DRIZZLE;
    case 55:
      return DENSE_DRIZZLE;
    case 56:
      return LIGHT_DRIZZLE;
    case 57:
      return DENSE_FREEZING_DRIZZLE;
    case 61:
      return SLIGHT_RAIN;
    case 63:
      return MODERATE_RAIN;
    case 65:
      return HEAVY_RAIN;
    case 66:
      return LIGHT_FREEZING_RAIN;
    case 67:
      return HEAVY_FREEZING_RAIN;
    case 71:
      return SLIGHT_SNOW_FALL;
    case 73:
      return MODERATE_SNOW_FALL;
    case 75:
      return HEAVY_SNOW_FALL;
    case 77:
      return SNOW_GRAINS;
    case 80:
      return SLIGHT_RAIN_SHOWERS;
    case 81:
      return MODERATE_RAIN_SHOWERS;
    case 82:
      return VIOLENT_RAIN_SHOWERS;
    case 85:
      return SLIGHT_SNOW_SHOWERS;
    case 86:
      return HEAVY_SNOW_SHOWERS;
    case 95:
      return SLIGHT_THUNDERSTORM;
    case 96:
      return THUNDERSTORM_SLIGHT_HAIL;
    case 99:
      return THUNDERSTORM_HEAVY_HAIL;

    default:
      return "-";
  }
}
