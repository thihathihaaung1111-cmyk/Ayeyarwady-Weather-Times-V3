// ======================================
// Ayeyarwady Weather Times V3
// tide.js
// ======================================

"use strict";


// ======================================
// Tide Variables
// ======================================

let tideData = null;


// ======================================
// Initialize Tide
// ======================================

function initTide() {

    console.log("Tide Module Ready");

}


// ======================================
// Load Tide
// ======================================

async function loadTide() {

    try {

        if (!APP.currentLocation) {

            console.warn("Location Not Found");

            return;

        }

        // TODO:
        // Load Tide API

    } catch (error) {

        console.error(error);

    }

}


// ======================================
// Render Tide
// ======================================

function renderTide(data) {

    tideData = data;

    updateTide(data);

}


// ======================================
// Update Tide
// ======================================

function updateTide(data) {

    const level = document.getElementById("tideLevel");

    const status = document.getElementById("tideStatus");

    const next = document.getElementById("nextTide");

    if (!level || !status || !next) return;

    level.textContent = data.level + " m";

    status.textContent = getTideStatus(data.type);

    next.textContent = data.next;

}


// ======================================
// Refresh Tide
// ======================================

async function refreshTide() {

    await loadTide();

}


// ======================================
// Tide Status
// ======================================

function getTideStatus(type) {

    switch (type) {

        case "HIGH":

            return "ဒီရေတက်";

        case "LOW":

            return "ဒီရေကျ";

        default:

            return "မသိ";

    }

        }
