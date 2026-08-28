// ======================================
// Ayeyarwady Weather Times V3
// transport.js
// ======================================

let transportData = [];

// Google Sheet URL
const TRANSPORT_URL = "";

// Initialize
function initTransport() {

    loadTransport();

}

// Load Data
async function loadTransport() {

    try {

        if (TRANSPORT_URL === "") {
            console.log("Transport Sheet URL not set.");
            return;
        }

        transportData = await loadSheet(TRANSPORT_URL);

        renderTransport();

    } catch (error) {

        console.error("Transport Error :", error);

    }

}

// Render
function renderTransport() {

    const box = document.getElementById("transportList");

    if (!box) return;

    box.innerHTML = "";

    transportData.forEach(item => {

        const card = document.createElement("div");

        card.className = "transport-card";

        card.innerHTML = `
            <h3>🚤 ${item.route}</h3>

            <p>📍 ${item.from} ➜ ${item.to}</p>

            <p>🕒 ${item.departure}</p>

            <p>💰 ${item.price}</p>

            <p>📞 ${item.phone}</p>

            <p>📢 ${item.status}</p>
        `;

        box.appendChild(card);

    });

}
