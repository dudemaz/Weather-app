// import { domEl } from '../ui/dom/domel';
// let city = domEl.searchInput.value;
export async function GetCitylatlon(city) {
  try {
    const API_KEY = 'api';
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.length === 0) {
      throw new Error('City not found');
    }
    return { lat: data[0].lat, lon: data[0].lon };
  } catch (error) {
    throw new Error('error dosnt work funct');
  }
}
let data = await GetCitylatlon('Москва');
export async function LoadWeatherData(lat, lon) {
  try {
    const API_KEY = 'api';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to get weather data: ' + error.message);
  }
}
console.log(await LoadWeatherData(data.lat, data.lon));
