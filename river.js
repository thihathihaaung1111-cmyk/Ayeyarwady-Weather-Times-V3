// ======================================
// Ayeyarwady Weather Times V3
// river.js
// ======================================

"use strict";


// ======================================
// River Variables
// ======================================

let riverData = null;


// ======================================
// Initialize River
// ======================================

function initRiver() {

    console.log("River Module Ready");

}


// ======================================
// Load River
// ======================================

async function loadRiver() {

    try {

        if (!APP.currentLocation) {

            console.warn("Location Not Found");

            return;

        }

        // TODO:
        // River API

    } catch (error) {

        console.error(error);

    }

}


// ======================================
// Render River
// ======================================

function renderRiver(data) {

    riverData = data;

    updateRiver(data);

}


// ======================================
// Update River
// ======================================

function updateRiver(data) {

    const level = document.getElementById("riverLevel");

    const status = document.getElementById("riverStatus");

    if (!level || !status) return;

    level.textContent = data.level + " m";

    status.textContent = getRiverStatus(data.level);

    status.className = getRiverClass(data.level);

}


// ======================================
// Refresh River
// ======================================

async function refreshRiver() {

    await loadRiver();

}


// ======================================
// River Status
// ======================================

function getRiverStatus(level) {

    if (level >= 12) {

        return "အန္တရာယ်";

    }

    if (level >= 10) {

        return "သတိပေး";

    }

    return "ပုံမှန်";

}


// ======================================
// River Class
// ======================================

function getRiverClass(level) {

    if (level >= 12) {

        return "danger";

    }

    if (level >= 10) {

        return "warning";

    }

    return "normal";

    }
