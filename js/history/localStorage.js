export function saveToLocalStorage(city) {
  let cities = JSON.parse(localStorage.getItem('cities')) || [];
  if (!cities.includes(city)) {
    cities.push(city);
    localStorage.setItem('cities', JSON.stringify(cities));
  }
}
