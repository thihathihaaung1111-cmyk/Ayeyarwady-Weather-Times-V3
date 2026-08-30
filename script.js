// ======================================
// Ayeyarwady Weather Times V3
// Main Controller
// script.js
// ======================================

"use strict";


// ======================================
// Global Variables
// ======================================

const APP = {

    version: "3.0.0",

    name: "Ayeyarwady Weather Times",

    initialized: false,

    online: navigator.onLine,

    currentLocation: null,

    lastUpdate: null

};


// ======================================
// App Start
// ======================================

document.addEventListener(

    "DOMContentLoaded",

    () => {

        startApp();

    }

);


// ======================================
// Start App
// ======================================

async function startApp() {

    try {

        showLoading();

        await initModules();

        setupEvents();

        startClock();

        startAutoRefresh();

        updateNetworkStatus();

        APP.initialized = true;

        hideLoading();

        console.log("App Ready");

    } catch (error) {

        console.error(error);

    }

}


// ======================================
// Initialize Modules
// ======================================

async function initModules() {

    initSettings();

    initTheme();

    initNotifications();

    initGPS();

    initSearch();

    initWeather();

    initForecast();

    initRiver();

    initTide();

    initCyclone();

    initAlert();

    initArticles();

    initTransport();

    initProducts();

    initShops();

    initNews();

    initAgriculture();

    initAI();

}


// ======================================
// Event System
// ======================================

function setupEvents() {

    window.addEventListener(

        "online",

        handleOnline

    );

    window.addEventListener(

        "offline",

        handleOffline

    );

    document.addEventListener(

        "visibilitychange",

        handleVisibility

    );

    const refreshBtn = document.getElementById(

        "refreshBtn"

    );

    if (refreshBtn) {

        refreshBtn.addEventListener(

            "click",

            refreshAll

        );

    }

}


// ======================================
// Online
// ======================================

function handleOnline() {

    APP.online = true;

    updateNetworkStatus();

    console.log("Internet Connected");

    refreshAll();

}


// ======================================
// Offline
// ======================================

function handleOffline() {

    APP.online = false;

    updateNetworkStatus();

    console.log("Internet Disconnected");

}


// ======================================
// Visibility
// ======================================

function handleVisibility() {

    if (

        document.visibilityState === "visible"

    ) {

        refreshAll();

    }

}


// ======================================
// Refresh All
// ======================================

async function refreshAll() {

    try {

        showLoading();

        APP.lastUpdate = new Date();

        if (APP.online) {

            await loadWeather();

            await loadForecast();

            await loadRiver();

            await loadTide();

            await loadCyclone();

            await loadAlerts();

            await loadArticles();

            await loadTransport();

            await loadProducts();

            await loadShops();

            await loadNews();

            await loadAgriculture();

        }

        initAI();

        updateLastUpdate();

        hideLoading();

        console.log("Refresh Complete");

    } catch (error) {

        console.error(error);

        hideLoading();

    }

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

        APP.lastUpdate.toLocaleString();

}


// ======================================
// Show Loading
// ======================================

function showLoading() {

    const loading = document.getElementById(

        "loading"

    );

    if (loading) {

        loading.style.display = "flex";

    }

}


// ======================================
// Hide Loading
// ======================================

function hideLoading() {

    const loading = document.getElementById(

        "loading"

    );

    if (loading) {

        loading.style.display = "none";

    }

}

// ======================================
// Auto Refresh
// ======================================

function startAutoRefresh() {

    // 10 Minutes

    setInterval(() => {

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

    clock.textContent = now.toLocaleTimeString(

        "en-GB"

    );

}


// ======================================
// Network Status
// ======================================

function updateNetworkStatus() {

    const network = document.getElementById(

        "networkStatus"

    );

    if (!network) return;

    if (APP.online) {

        network.textContent = "🟢 Online";

    } else {

        network.textContent = "🔴 Offline";

    }

}
