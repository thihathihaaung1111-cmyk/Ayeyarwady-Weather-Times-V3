// ======================================
// tide.js
// ======================================

"use strict";

let tideData = null;

// ======================================
// Initialize
// ======================================

function initTide() {

    if (APP.currentLocation) {

        loadTide();

    }

}

// ======================================
// Load Tide
// ======================================

async function loadTide() {

    if (!APP.currentLocation) return;

    try {

        // TODO:
        // နောက်ပိုင်း Tide API / Google Sheet နဲ့ချိတ်မယ်။

        tideData = {

            station: APP.currentLocation.township,

            highTide: "08:15 AM",

            lowTide: "02:40 PM",

            nextHigh: "08:55 PM",

            status: "High Tide",

            updated: new Date()

        };

        renderTide();

    }

    catch (error) {

        console.error(error);

    }

}

// ======================================
// Render
// ======================================

function renderTide() {

    if (!tideData) return;

    const box = document.getElementById("riverInfo");

    if (!box) return;

    box.innerHTML += `

        <div class="tide-card">

            <h3>🌊 Tide Information</h3>

            <p>📍 ${tideData.station}</p>

            <p>⬆ High Tide : ${tideData.highTide}</p>

            <p>⬇ Low Tide : ${tideData.lowTide}</p>

            <p>🔄 Next High : ${tideData.nextHigh}</p>

            <p><strong>${tideData.status}</strong></p>

            <small>

                Updated :

                ${tideData.updated.toLocaleString()}

            </small>

        </div>

    `;

            }
