// ======================================
// Ayeyarwady Weather Times V3
// river.js
// ======================================

// River Information
let riverData = null;

// Initialize
function initRiver() {

    loadRiverData();

}

// Load River Data
async function loadRiverData() {

    try {

        // နောက်ပိုင်း river.json သို့မဟုတ် API ဖြင့် အစားထိုးမယ်

        riverData = {
            station: "Pathein",
            river: "Ayeyarwady River",
            level: "--",
            danger: "--",
            trend: "unknown",
            update: "--"
        };

        updateRiverUI();

    } catch (error) {

        console.error("River Error:", error);

    }

}

// Update UI
function updateRiverUI() {

    const riverInfo = document.getElementById("riverInfo");

    if (!riverInfo) return;

    riverInfo.innerHTML = `
        <h3>🌊 ${riverData.river}</h3>

        <p>📍 Station : ${riverData.station}</p>

        <p>📏 Water Level : ${riverData.level}</p>

        <p>⚠ Danger Level : ${riverData.danger}</p>

        <p>📈 Trend : ${riverData.trend}</p>

        <small>Updated : ${riverData.update}</small>
    `;

                      }
