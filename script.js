const apiKey = 'AERKNHNTSRN4HQVG5C5D3DXMB';

async function getWeather(location) { 
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?key=${apiKey} `
  try {
    const response = await fetch(url);
    const data = await response.json();
    const temperature = Math.floor((data.currentConditions.temp - 32) * 5/9);
    const conditions = data.currentConditions.conditions;
    document.getElementById('weather').innerHTML = `
    <h2>Weather for ${location}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Conditions: ${conditions}</p>
    `;
  } catch (error) {
    document.getElementById('weather').innerHTML = 'Error retrieving weather data.';
    console.error('Error:', error)
  }
}

document.getElementById('locationForm').addEventListener('submit', function(event) { 
  event.preventDefault();

  const location = document.getElementById('location').value;
  getWeather(location);
})