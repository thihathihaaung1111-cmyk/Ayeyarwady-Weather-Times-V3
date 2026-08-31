// ======================================
// notification.js
// ======================================

"use strict";

let notificationPermission = false;

// ======================================
// Initialize
// ======================================

async function initNotifications() {

    if (!("Notification" in window)) {

        console.warn("Notification Not Supported");

        return;

    }

    if (Notification.permission === "granted") {

        notificationPermission = true;

        return;

    }

    if (Notification.permission !== "denied") {

        const permission = await Notification.requestPermission();

        notificationPermission = permission === "granted";

    }

}

// ======================================
// Show Notification
// ======================================

function showNotification(title, message, icon = "icon-192.png") {

    if (!notificationPermission) return;

    new Notification(title, {

        body: message,

        icon: icon,

        badge: icon,

        vibrate: [200, 100, 200],

        tag: "awt-v3"

    });

}

// ======================================
// Flood Alert
// ======================================

function notifyFlood(message) {

    showNotification(

        "🌊 Flood Alert",

        message

    );

}

// ======================================
// Cyclone Alert
// ======================================

function notifyCyclone(message) {

    showNotification(

        "🌀 Cyclone Alert",

        message

    );

}

// ======================================
// Weather Alert
// ======================================

function notifyWeather(message) {

    showNotification(

        "🌦 Weather Alert",

        message

    );

}

// ======================================
// Test
// ======================================

function testNotification() {

    showNotification(

        "Ayeyarwady Weather",

        "Notification System Ready"

    );

        }
