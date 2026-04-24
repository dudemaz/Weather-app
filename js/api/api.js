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
console.log('Testing LoadWeatherData function with coordinates for Tokyo:');
LoadWeatherData(35.6895, 139.6917);
