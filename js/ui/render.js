import { GetCitylatlon, LoadWeatherData } from '../api/api.js';
import { domEl } from './dom/domel.js';

export async function renderData() {
  let inputCity = domEl.searchInput.value;
  let coordinates = await GetCitylatlon(inputCity);
  let data = await LoadWeatherData(coordinates.lat, coordinates.lon);

  let city = (domEl.cityName.textContent = data.name);
  domEl.weatherContainer.innerHTML = '';
  let container = document.createElement('div');
  let text = document.createElement('p');

  text.textContent = `Температура: ${data.main.temp}°C`;

  container.appendChild(text);
  domEl.weatherContainer.appendChild(container);
}
