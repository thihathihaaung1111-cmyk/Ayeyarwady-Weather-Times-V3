// ======================================
// Ayeyarwady Weather Times V3
// agriculture.js
// ======================================

let agricultureData = [];

// Google Sheet URL
const AGRICULTURE_URL = "";

// Initialize
function initAgriculture() {

    loadAgriculture();

}

// Load Agriculture Data
async function loadAgriculture() {

    try {

        if (AGRICULTURE_URL === "") {

            console.log("Agriculture Sheet URL not set.");

            return;

        }

        agricultureData = await loadSheet(AGRICULTURE_URL);

        renderAgriculture();

    } catch (error) {

        console.error("Agriculture Error :", error);

    }

}

// Render Agriculture
function renderAgriculture() {

    const box = document.getElementById("agricultureList");

    if (!box) return;

    box.innerHTML = "";

    agricultureData.forEach(item => {

        const card = document.createElement("div");

        card.className = "agriculture-card";

        card.innerHTML = `

            <img src="${item.image}" alt="${item.title}">

            <h3>${item.title}</h3>

            <p>🌾 ${item.crop}</p>

            <p>${item.summary}</p>

            <small>${item.date}</small>

            <button onclick="window.open('${item.link}')">
                အသေးစိတ်ဖတ်ရန်
            </button>

        `;

        box.appendChild(card);

    });

}
