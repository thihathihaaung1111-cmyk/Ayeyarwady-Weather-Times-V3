// ======================================
// transport.js
// ======================================

"use strict";

let transportData = null;

// ======================================
// Initialize
// ======================================

function initTransport() {

    loadTransport();

}

// ======================================
// Load
// ======================================

async function loadTransport() {

    try {

        // TODO:
        // Google Sheet / API နဲ့ချိတ်မယ်

        transportData = {

            status: "Open",

            message: "ရေကြောင်းသွားလာမှု ပုံမှန်ဖြစ်ပါသည်။",

            updated: new Date()

        };

        renderTransport();

    }

    catch (error) {

        console.error(error);

    }

}

// ======================================
// Render
// ======================================

function renderTransport() {

    const box = document.getElementById("transportInfo");

    if (!box) return;

    let color = "#22c55e";

    if (transportData.status === "Warning") {

        color = "#f59e0b";

    }

    if (transportData.status === "Closed") {

        color = "#ef4444";

    }

    box.innerHTML = `

        <div class="transport-card">

            <h3>🚤 Water Transport</h3>

            <p style="color:${color};">

                <strong>${transportData.status}</strong>

            </p>

            <p>${transportData.message}</p>

            <small>

                Updated :

                ${transportData.updated.toLocaleString()}

            </small>

        </div>

    `;

}
