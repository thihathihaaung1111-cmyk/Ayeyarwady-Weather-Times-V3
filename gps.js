// ======================================
// gps.js
// ======================================

"use strict";

function initGPS() {

    const button = document.getElementById("gpsBtn");

    if (!button) return;

    button.addEventListener("click", getCurrentLocation);

}

function getCurrentLocation() {

    if (!navigator.geolocation) {

        alert("GPS မရပါ");

        return;

    }

    navigator.geolocation.getCurrentPosition(

        position => {

            APP.currentLocation = {

                latitude: position.coords.latitude,

                longitude: position.coords.longitude,

                township: "Current Location",

                village: "Current Location"

            };

            document.getElementById("locationName").textContent =
                "Current Location";

            if (typeof loadWeather === "function") loadWeather();
            if (typeof loadForecast === "function") loadForecast();
            if (typeof loadRiver === "function") loadRiver();
            if (typeof loadTide === "function") loadTide();

        },

        error => {

            console.error(error);

            alert("GPS ရယူမရပါ");

        },

        {

            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

        }
