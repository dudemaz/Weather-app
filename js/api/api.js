import { domEl } from '../ui/dom/domel';
let city = domEl.searchInput.value;
export async function GetCitylatlon(city) {
  try {
    const api_key = '';
    const url = ``;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.length === 0) {
      throw new Error('City not found');
    }
    console.log(data);
    return { lat: data[0].lat, lon: data[0].lon };
  } catch (error) {
    throw new Error('error dosnt work funct');
  }
}
export async function LoadWeatherData(lat, lon) {
  try {
    const API_KEY = '42f90f490fde6bd9aa84073cd6d3f5ee';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error('Failed to get weather data: ' + error.message);
  }
}

LoadWeatherData(GetCitylatlon('London').lat, GetCitylatlon('London').lon);
