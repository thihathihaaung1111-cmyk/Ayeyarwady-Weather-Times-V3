// ======================================
// Ayeyarwady Weather Times V3
// notification.js
// ======================================

"use strict";


// ======================================
// Notification Variables
// ======================================

let notificationPermission = "default";


// ======================================
// Initialize Notification
// ======================================

async function initNotifications() {

    if (!("Notification" in window)) {

        console.warn("Notification Not Supported");

        return;

    }

    notificationPermission = Notification.permission;

    if (notificationPermission === "default") {

        notificationPermission = await Notification.requestPermission();

    }

    console.log("Notification:", notificationPermission);

}


// ======================================
// Show Notification
// ======================================

function showNotification(title, message) {

    if (notificationPermission !== "granted") {

        return;

    }

    new Notification(title, {

        body: message,

        icon: "assets/icons/icon-192.png",

        badge: "assets/icons/icon-192.png"

    });

}


// ======================================
// Weather Notification
// ======================================

function notifyWeather(message) {

    showNotification(

        "🌦️ Weather Alert",

        message

    );

}


// ======================================
// River Notification
// ======================================

function notifyRiver(message) {

    showNotification(

        "🌊 River Alert",

        message

    );

}


// ======================================
// Tide Notification
// ======================================

function notifyTide(message) {

    showNotification(

        "🌙 Tide Alert",

        message

    );

}


// ======================================
// Cyclone Notification
// ======================================

function notifyCyclone(message) {

    showNotification(

        "🌀 Cyclone Alert",

        message

    );

}


// ======================================
// Emergency Notification
// ======================================

function notifyEmergency(message) {

    showNotification(

        "🚨 Emergency Warning",

        message

    );

}
