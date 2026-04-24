export async function LoadWeatherData(lat, lon) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=API_KEY&units=metric`;
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
LoadWeatherData(35.6895, 139.6917);
