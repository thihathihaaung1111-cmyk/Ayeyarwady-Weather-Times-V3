// ======================================
// Ayeyarwady Weather Times V3
// Main Controller
// Part 1
// ======================================

"use strict";

const APP = {
    version: "3.0.0",
    name: "Ayeyarwady Weather Times",
    initialized: false,
    online: navigator.onLine,
    currentLocation: null,
    lastUpdate: null,
    refreshTimer: null
};

document.addEventListener("DOMContentLoaded", startApp);

async function startApp() {

    console.log("Starting App...");

    try {

        showLoading();

        await initModules();

        setupEvents();

        startClock();

        startAutoRefresh();

        updateNetworkStatus();

        APP.initialized = true;

        hideLoading();

        console.log("Application Ready");

    } catch (error) {

        console.error("Start Error:", error);

        hideLoading();

    }

}

async function initModules() {

    const modules = [

        "initStorage",
        "initSettings",
        "initTheme",
        "initNotifications",
        "initGPS",
        "initSearch",
        "initWeather",
        "initForecast",
        "initRiver",
        "initTide",
        "initCyclone",
        "initAlert",
        "initArticles",
        "initTransport",
        "initProducts",
        "initShops",
        "initNews",
        "initAgriculture",
        "initAI"

    ];

    for (const fn of modules) {

        if (typeof window[fn] === "function") {

            try {

                await window[fn]();

                console.log(fn + " OK");

            } catch (err) {

                console.error(fn, err);

            }

        } else {

            console.warn(fn + " Missing");

        }

    }

}

function setupEvents() {

    window.addEventListener("online", () => {

        APP.online = true;

        updateNetworkStatus();

        refreshAll();

    });

    window.addEventListener("offline", () => {

        APP.online = false;

        updateNetworkStatus();

    });

    document.addEventListener("visibilitychange", () => {

        if (document.visibilityState === "visible") {

            refreshAll();

        }

    });

}

function showLoading() {

    const splash = document.getElementById("splash");

    if (splash) {

        splash.style.display = "flex";

    }

}

function hideLoading() {

    const splash = document.getElementById("splash");

    if (splash) {

        setTimeout(() => {

            splash.style.display = "none";

        }, 800);

    }

            }

// ======================================
// Refresh All Data
// ======================================

async function refreshAll() {

    console.log("Refreshing...");

    APP.lastUpdate = new Date();

    const loaders = [

        "loadWeather",
        "loadForecast",
        "loadRiver",
        "loadTide",
        "loadCyclone",
        "loadAlerts",
        "loadArticles",
        "loadTransport",
        "loadProducts",
        "loadShops",
        "loadNews",
        "loadAgriculture"

    ];

    showLoading();

    for (const fn of loaders) {

        if (typeof window[fn] === "function") {

            try {

                await window[fn]();

                console.log(fn + " OK");

            }

            catch (error) {

                console.error(fn, error);

            }

        }

    }

    if (typeof analyzeAll === "function") {

        analyzeAll();

    }

    updateLastUpdate();

    hideLoading();

}


// ======================================
// Last Update
// ======================================

function updateLastUpdate() {

    const element = document.getElementById(

        "lastUpdate"

    );

    if (!element) return;

    element.textContent =

        APP.lastUpdate.toLocaleString("en-GB");

}


// ======================================
// Auto Refresh
// ======================================

function startAutoRefresh() {

    if (APP.refreshTimer) {

        clearInterval(APP.refreshTimer);

    }

    APP.refreshTimer = setInterval(() => {

        if (APP.online) {

            refreshAll();

        }

    }, 600000);

}


// ======================================
// Clock
// ======================================

function startClock() {

    updateClock();

    setInterval(updateClock, 1000);

}


function updateClock() {

    const clock = document.getElementById(

        "clock"

    );

    if (!clock) return;

    const now = new Date();

    clock.textContent =

        now.toLocaleTimeString();

}


// ======================================
// Network
// ======================================

function updateNetworkStatus() {

    const network = document.getElementById(

        "networkStatus"

    );

    if (!network) return;

    network.textContent =

        APP.online ?

        "🟢 Online"

        :

        "🔴 Offline";

}


// ======================================
// Restart App
// ======================================

function restartApp() {

    refreshAll();

}


// ======================================
// App Information
// ======================================

function getAppInfo() {

    return {

        name: APP.name,

        version: APP.version,

        online: APP.online,

        initialized: APP.initialized,

        location: APP.currentLocation,

        lastUpdate: APP.lastUpdate

    };

}


// ======================================
// Debug
// ======================================

window.APP = APP;

console.log(

    APP.name +

    " Version " +

    APP.version +

    " Loaded"

);
