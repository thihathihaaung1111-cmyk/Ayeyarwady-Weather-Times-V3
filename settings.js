// ======================================
// Ayeyarwady Weather Times V3
// settings.js
// ======================================

const DEFAULT_SETTINGS = {

    theme: "light",

    language: "my",

    notifications: true,

    autoLocation: true,

    temperatureUnit: "C",

    windUnit: "kmh",

    lastLocation: ""

};

// Initialize Settings
function initSettings() {

    loadSettings();

}

// Load Settings
function loadSettings() {

    const saved = localStorage.getItem("awt_settings");

    if (saved) {

        applySettings(JSON.parse(saved));

    } else {

        saveSettings(DEFAULT_SETTINGS);

        applySettings(DEFAULT_SETTINGS);

    }

}

// Save Settings
function saveSettings(settings) {

    localStorage.setItem(

        "awt_settings",

        JSON.stringify(settings)

    );

}

// Apply Settings
function applySettings(settings) {

    if (settings.theme === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

    console.log("Settings Loaded");

}

// Change Theme
function changeTheme(theme) {

    const settings = getSettings();

    settings.theme = theme;

    saveSettings(settings);

    applySettings(settings);

}

// Notification
function toggleNotification(enable) {

    const settings = getSettings();

    settings.notifications = enable;

    saveSettings(settings);

}

// Get Settings
function getSettings() {

    return JSON.parse(

        localStorage.getItem("awt_settings")

    );

}
