import fetchCityData from '../cityData';
import { forecastURL, appID } from '../apiURL';

const fetchForecast = async () => {
  const { lat, lon } = await fetchCityData();

  const response = await fetch(`${forecastURL}lat=${lat}&lon=${lon}${appID}`)
    .then((res) => res.json())
    .then((data) => {
      const dateArray = data.list;
      const temperatureArray = data.list.map((d) => d.main.temp);
      const maxTemperatureArray = data.list.map((d) => d.main.temp_max);
      const minTemperatureArray = data.list.map((d) => d.main.temp_min);
      const iconArray = data.list.map((d) => d.weather[0].icon);
      const descriptionArray = data.list.map((d) => d.weather[0].description);
      return {
        dateArray,
        temperatureArray,
        maxTemperatureArray,
        minTemperatureArray,
        iconArray,
        descriptionArray,
      };
    });
  console.log(response);
  return response;
};

export default fetchForecast;
