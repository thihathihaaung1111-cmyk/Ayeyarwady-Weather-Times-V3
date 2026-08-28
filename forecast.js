// ======================================
// Ayeyarwady Weather Times V3
// forecast.js
// ======================================

// 7-Day Forecast

function updateForecast(data) {

    const forecast = document.getElementById("forecast");

    if (!forecast) return;

    forecast.innerHTML = "";

    const daily = data.daily;

    for (let i = 0; i < daily.time.length; i++) {

        const card = document.createElement("div");

        card.className = "forecast-card";

        const date = new Date(daily.time[i]);

        const day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        card.innerHTML = `
            <h4>${day}</h4>

            <p>${daily.temperature_2m_max[i]}°</p>

            <p>${daily.temperature_2m_min[i]}°</p>

            <p>🌧 ${daily.precipitation_sum[i]} mm</p>
        `;

        forecast.appendChild(card);

    }

          }
