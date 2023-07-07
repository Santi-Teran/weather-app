export default async function getWeather(location) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7e27afc0701647c3b0a144233230407&q=${location}&days=8&aqi=yes&alerts=yes`);
  const data = await response.json();
  return data;
}
