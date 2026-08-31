// ======================================
// forecast.js
// ======================================

"use strict";

let forecastData = null;

function initForecast() {

    if (APP.currentLocation) {

        loadForecast();

    }

}

async function loadForecast() {

    if (!APP.currentLocation) return;

    try {

        const lat = APP.currentLocation.latitude;
        const lon = APP.currentLocation.longitude;

        const url =
`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`;

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error("Forecast API Error");

        }

        forecastData = await response.json();

        renderForecast();

    }

    catch (error) {

        console.error(error);

    }

}

function renderForecast() {

    const box = document.getElementById("forecast");

    if (!box || !forecastData) return;

    box.innerHTML = "";

    const daily = forecastData.daily;

    for (let i = 0; i < daily.time.length; i++) {

        const item = document.createElement("div");

        item.className = "forecast-item";

        item.innerHTML = `
            <div>${daily.time[i]}</div>
            <div>${weatherCodeToText(daily.weather_code[i])}</div>
            <div>${daily.temperature_2m_max[i]}° / ${daily.temperature_2m_min[i]}°</div>
            <div>🌧 ${daily.precipitation_probability_max[i]}%</div>
        `;

        box.appendChild(item);

    }

}
