// ======================================
// Ayeyarwady Weather Times V3
// alert.js
// ======================================

"use strict";


// ======================================
// Alert Variables
// ======================================

let alertList = [];


// ======================================
// Initialize Alert
// ======================================

function initAlert() {

    alertList = [];

    console.log("Alert Module Ready");

}


// ======================================
// Load Alerts
// ======================================

async function loadAlerts() {

    alertList = [];

    checkWeatherAlert();

    checkRiverAlert();

    checkTideAlert();

    checkCycloneAlert();

    renderAlerts();

}


// ======================================
// Render Alerts
// ======================================

function renderAlerts() {

    const container = document.getElementById("alertList");

    if (!container) return;

    container.innerHTML = "";

    if (alertList.length === 0) {

        container.innerHTML = `
            <div class="alert-normal">
                ✅ လက်ရှိတွင် အရေးပေါ်သတိပေးချက် မရှိပါ။
            </div>
        `;

        return;

    }

    alertList.forEach(alert => {

        const item = document.createElement("div");

        item.className = "alert-item";

        item.innerHTML = `
            <div class="alert-icon">⚠️</div>
            <div class="alert-text">${alert}</div>
        `;

        container.appendChild(item);

    });

}


// ======================================
// Weather Alert
// ======================================

function checkWeatherAlert() {

    // TODO:
    // Heavy Rain
    // Thunderstorm
    // Strong Wind

}


// ======================================
// River Alert
// ======================================

function checkRiverAlert() {

    // TODO:
    // River Rising
    // Flood Warning

}


// ======================================
// Tide Alert
// ======================================

function checkTideAlert() {

    // TODO:
    // High Tide

}


// ======================================
// Cyclone Alert
// ======================================

function checkCycloneAlert() {

    // TODO:
    // Cyclone Warning

}


// ======================================
// Add Alert
// ======================================

function addAlert(message) {

    alertList.push(message);

}
