// ======================================
// Ayeyarwady Weather Times V3
// notification.js
// ======================================

let notificationPermission = false;

// Initialize
async function initNotifications() {

    if (!("Notification" in window)) {

        console.log("Notification is not supported.");

        return;

    }

    if (Notification.permission === "granted") {

        notificationPermission = true;

    } else if (Notification.permission !== "denied") {

        const permission = await Notification.requestPermission();

        notificationPermission = permission === "granted";

    }

}

// Show Notification
function showNotification(title, message, icon = "icons/icon-192.png") {

    if (!notificationPermission) return;

    new Notification(title, {

        body: message,

        icon: icon,

        badge: icon,

        silent: false

    });

}

// Weather Alert
function notifyWeather(message) {

    showNotification(

        "🌦 Weather Alert",

        message

    );

}

// Cyclone Alert
function notifyCyclone(message) {

    showNotification(

        "🌀 Cyclone Warning",

        message

    );

}

// Flood Alert
function notifyFlood(message) {

    showNotification(

        "🌊 Flood Warning",

        message

    );

}

// Transport Alert
function notifyTransport(message) {

    showNotification(

        "🚤 Transport Notice",

        message

    );

}

// News Alert
function notifyNews(message) {

    showNotification(

        "📰 News Update",

        message

    );

}
