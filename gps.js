// ======================================
// Ayeyarwady Weather Times V3
// gps.js
// ======================================

"use strict";


// ======================================
// GPS Variables
// ======================================

let gpsWatcher = null;


// ======================================
// Initialize GPS
// ======================================

function initGPS() {

    if (!navigator.geolocation) {

        console.error("GPS Not Supported");

        return;

    }

    getCurrentLocation();

}


// ======================================
// Get Current Location
// ======================================

function getCurrentLocation() {

    navigator.geolocation.getCurrentPosition(

        onLocationSuccess,

        onLocationError,

        {

            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 300000

        }

    );

}


// ======================================
// Location Success
// ======================================

function onLocationSuccess(position) {

    APP.currentLocation = {

        latitude: position.coords.latitude,

        longitude: position.coords.longitude,

        accuracy: position.coords.accuracy

    };

    console.log(APP.currentLocation);

    refreshAll();

}


// ======================================
// Location Error
// ======================================

function onLocationError(error) {

    console.error(error);

}


// ======================================
// Watch Location
// ======================================

function startLocationWatcher() {

    gpsWatcher = navigator.geolocation.watchPosition(

        onLocationSuccess,

        onLocationError,

        {

            enableHighAccuracy: true,

            maximumAge: 300000

        }

    );

}


// ======================================
// Stop Watcher
// ======================================

function stopLocationWatcher() {

    if (gpsWatcher !== null) {

        navigator.geolocation.clearWatch(gpsWatcher);

    }

        }
