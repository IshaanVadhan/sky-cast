type TLocation = {
  label: string;
  value: {
    cityName: string;
    localityName: string;
    localityId: string;
    latitude: number;
    longitude: number;
    device_type: string;
  };
};

type TLocalityWeather = {
  temperature: number | null;
  humidity: number | null;
  wind_speed: number | null;
  wind_direction: number | null;
  rain_intensity: number | null;
  rain_accumulation: number | null;
};

type TApiResponse = {
  status: string;
  message: string;
  device_type: 1 | 2;
  locality_weather_data: TLocalityWeather | null;
};
