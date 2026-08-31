// ======================================
// alert.js
// ======================================

"use strict";

let alertData = null;

// ======================================
// Initialize
// ======================================

function initAlert() {

    loadAlerts();

}

// ======================================
// Load Alerts
// ======================================

async function loadAlerts() {

    try {

        // TODO:
        // Google Sheet / API နဲ့ ချိတ်မယ်

        alertData = {

            flood: {

                level: "Normal",

                message: "ရေကြီးနိုင်မှု မရှိသေးပါ"

            },

            cyclone: {

                level: "None",

                message: "မုန်တိုင်းသတိပေးချက် မရှိပါ"

            },

            river: {

                level: "Safe",

                message: "မြစ်ရေ အခြေအနေ ပုံမှန်"

            }

        };

        renderAlerts();

    }

    catch (error) {

        console.error(error);

    }

}

// ======================================
// Render Alerts
// ======================================

function renderAlerts() {

    if (!alertData) return;

    const flood =
        document.getElementById("floodAlert");

    const cyclone =
        document.getElementById("cycloneAlert");

    const river =
        document.getElementById("riverAlert");

    if (flood) {

        flood.innerHTML =
        `🌊 <strong>${alertData.flood.level}</strong><br>${alertData.flood.message}`;

    }

    if (cyclone) {

        cyclone.innerHTML =
        `🌀 <strong>${alertData.cyclone.level}</strong><br>${alertData.cyclone.message}`;

    }

    if (river) {

        river.innerHTML =
        `🚩 <strong>${alertData.river.level}</strong><br>${alertData.river.message}`;

    }

                                }
