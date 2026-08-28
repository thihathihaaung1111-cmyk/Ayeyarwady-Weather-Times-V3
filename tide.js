// ======================================
// Ayeyarwady Weather Times V3
// tide.js
// ======================================

let tideData = null;

// Initialize Tide
function initTide() {

    loadTideData();

}

// Load Tide Data
async function loadTideData() {

    try {

        // နောက်ပိုင်း API / JSON ဖြင့် အစားထိုးမယ်

        tideData = {
            station: "Pathein",
            high_tide: "--:--",
            low_tide: "--:--",
            next: "--",
            height: "--",
            moon: "--"
        };

        updateTideUI();

    } catch (error) {

        console.error("Tide Error :", error);

    }

}

// Update Tide UI
function updateTideUI() {

    const tideInfo = document.getElementById("tideInfo");

    if (!tideInfo) return;

    tideInfo.innerHTML = `
        <h3>🌊 ${tideData.station}</h3>

        <p>⬆️ High Tide : ${tideData.high_tide}</p>

        <p>⬇️ Low Tide : ${tideData.low_tide}</p>

        <p>⏰ Next Tide : ${tideData.next}</p>

        <p>📏 Tide Height : ${tideData.height}</p>

        <p>🌙 Moon Phase : ${tideData.moon}</p>
    `;

                }
