// ======================================
// Ayeyarwady Weather Times V3
// cyclone.js
// ======================================

"use strict";


// ======================================
// Cyclone Variables
// ======================================

let cycloneData = null;


// ======================================
// Initialize Cyclone
// ======================================

function initCyclone() {

    console.log("Cyclone Module Ready");

}


// ======================================
// Load Cyclone
// ======================================

async function loadCyclone() {

    try {

        if (!APP.currentLocation) {

            console.warn("Location Not Found");

            return;

        }

        // TODO:
        // Load Cyclone API

    } catch (error) {

        console.error(error);

    }

}


// ======================================
// Render Cyclone
// ======================================

function renderCyclone(data) {

    cycloneData = data;

    updateCyclone(data);

}


// ======================================
// Update Cyclone
// ======================================

function updateCyclone(data) {

    const status = document.getElementById("cycloneStatus");

    const wind = document.getElementById("windSpeed");

    const wave = document.getElementById("waveHeight");

    if (!status || !wind || !wave) return;

    status.textContent = getCycloneStatus(data.level);

    wind.textContent = data.wind + " km/h";

    wave.textContent = data.wave + " m";

}


// ======================================
// Refresh Cyclone
// ======================================

async function refreshCyclone() {

    await loadCyclone();

}


// ======================================
// Cyclone Status
// ======================================

function getCycloneStatus(level) {

    switch (level) {

        case 1:

            return "စောင့်ကြည့်";

        case 2:

            return "သတိပေး";

        case 3:

            return "အန္တရာယ်";

        default:

            return "ပုံမှန်";

    }

}
