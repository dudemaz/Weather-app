import { GetCitylatlon, LoadWeatherData } from '../api/api';
import { domEl } from './dom/domel';

export async function renderData() {
  let inputCity = domEl.searchInput.value;
  let coordinates = await GetCitylatlon(inputCity);
  let data = await LoadWeatherData(coordinates.lat, coordinates.lon);
}
