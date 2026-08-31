// ======================================
// Ayeyarwady Weather Times V3
// settings.js
// ======================================

"use strict";


// ======================================
// Default Settings
// ======================================

const DEFAULT_SETTINGS = {

    language: "my",

    theme: "auto",

    temperature: "C",

    wind: "kmh",

    distance: "km",

    pressure: "hPa",

    notifications: true,

    autoRefresh: true,

    refreshInterval: 10,

    gps: true

};


// ======================================
// Current Settings
// ======================================

let appSettings = {};


// ======================================
// Initialize
// ======================================

function initSettings() {

    loadSettings();

    applySettings();

}


// ======================================
// Load
// ======================================

function loadSettings() {

    const data = localStorage.getItem(

        "awt_settings"

    );

    if (data) {

        appSettings = JSON.parse(data);

    }

    else {

        appSettings = {

            ...DEFAULT_SETTINGS

        };

    }

}


// ======================================
// Save
// ======================================

function saveSettings() {

    localStorage.setItem(

        "awt_settings",

        JSON.stringify(appSettings)

    );

}


// ======================================
// Apply
// ======================================

function applySettings() {

    applyTheme();

    applyLanguage();

}


// ======================================
// Reset
// ======================================

function resetSettings() {

    appSettings = {

        ...DEFAULT_SETTINGS

    };

    saveSettings();

    applySettings();

}


// ======================================
// Get
// ======================================

function getSetting(key) {

    return appSettings[key];

}


// ======================================
// Set
// ======================================

function setSetting(key, value) {

    appSettings[key] = value;

    saveSettings();

}
