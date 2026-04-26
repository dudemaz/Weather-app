import { GetCitylatlon, LoadWeatherData } from '../api/api.js';
import { domEl } from './dom/domel.js';
import { weatherIcon } from './refDataIcons.js';

export async function renderData() {
  let inputCity = domEl.searchInput.value;
  let coordinates = await GetCitylatlon(inputCity);
  let data = await LoadWeatherData(coordinates.lat, coordinates.lon);
  let city = (domEl.cityName.textContent = data.name);
  domEl.weatherContainer.innerHTML = '';
  let container = document.createElement('div');
  let text = document.createElement('p');

  text.textContent = `Температура: ${data.main.temp}°C, Влажность: ${data.main.humidity}%`;

  container.appendChild(text);
  domEl.weatherContainer.appendChild(container);
  const iconCode = data.weather[0].icon;
  for (const [key, path] of Object.entries(weatherIcon)) {
    if (iconCode.includes(key)) {
      domEl.weatherIcon.setAttribute('src', path);
      break;
    }
  }
}
export function getUserLocation() {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;
    const data = await LoadWeatherData(latitude, longitude);
  });
}
