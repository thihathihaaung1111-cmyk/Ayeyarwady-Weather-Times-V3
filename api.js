// ======================================
// Ayeyarwady Weather Times V3
// api.js
// ======================================

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

// Weather by Latitude & Longitude
async function getWeatherByLocation(lat, lon) {

    try {

        const url =
        `${WEATHER_API}?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Asia/Yangon`;

        const response = await fetch(url);

        const data = await response.json();

        updateWeather(data);

    } catch (error) {

        console.error(error);

        alert("Weather API Error");

    }

}

// Update UI
function updateWeather(data){

    document.getElementById("temperature").textContent =
    Math.round(data.current.temperature_2m) + "°C";

    document.getElementById("humidity").textContent =
    data.current.relative_humidity_2m + "%";

    document.getElementById("wind").textContent =
    data.current.wind_speed_10m + " km/h";

    document.getElementById("rain").textContent =
    data.daily.precipitation_sum[0] + " mm";

    document.getElementById("weatherText").textContent =
    weatherDescription(data.current.weather_code);

}

// Weather Code
function weatherDescription(code){

    const weather = {

        0:"နေသာ",
        1:"တိမ်အနည်းငယ်",
        2:"တိမ်အသင့်အတင့်",
        3:"တိမ်ထူ",

        61:"မိုးရွာ",

        63:"မိုးအသင့်အတင့်",

        65:"မိုးသည်း",

        95:"မိုးကြိုး"

    };

    return weather[code] || "မသိ";

}
