// ======================================
// Ayeyarwady Weather Times V3
// cyclone.js
// ======================================

let cycloneData = null;

// Initialize
function initCyclone() {

    loadCycloneData();

}

// Load Cyclone Data
async function loadCycloneData() {

    try {

        // နောက်ပိုင်း API / JSON နဲ့ အစားထိုးမယ်

        cycloneData = {

            status: "No Active Cyclone",

            name: "--",

            category: "--",

            wind_speed: "--",

            wind_direction: "--",

            pressure: "--",

            wave_height: "--",

            monsoon: "--",

            sea_condition: "--",

            advice: "Weather is normal."

        };

        updateCycloneUI();

    } catch (error) {

        console.error("Cyclone Error :", error);

    }

}

// Update UI
function updateCycloneUI() {

    const cycloneInfo = document.getElementById("cycloneInfo");

    if (!cycloneInfo) return;

    cycloneInfo.innerHTML = `

        <p>🌀 Status : ${cycloneData.status}</p>

        <p>📛 Name : ${cycloneData.name}</p>

        <p>🌪 Category : ${cycloneData.category}</p>

        <p>💨 Wind : ${cycloneData.wind_speed}</p>

        <p>🧭 Direction : ${cycloneData.wind_direction}</p>

        <p>🌡 Pressure : ${cycloneData.pressure}</p>

        <p>🌊 Wave Height : ${cycloneData.wave_height}</p>

        <p>🌧 Monsoon : ${cycloneData.monsoon}</p>

        <p>🚢 Sea : ${cycloneData.sea_condition}</p>

        <hr>

        <p><strong>⚠ Advice</strong></p>

        <p>${cycloneData.advice}</p>

    `;

      }
