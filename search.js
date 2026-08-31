// ======================================
// Ayeyarwady Weather Times V3
// search.js
// ======================================

"use strict";

let locations = [];

// ======================================
// Initialize Search
// ======================================

async function initSearch() {

    try {

        const response = await fetch("locations.json");

        if (!response.ok) {

            throw new Error("Cannot load locations.json");

        }

        locations = await response.json();

        console.log("Locations Loaded:", locations.length);

        setupSearch();

    } catch (error) {

        console.error(error);

    }

}

// ======================================
// Setup Search
// ======================================

function setupSearch() {

    const input = document.getElementById("searchInput");

    if (!input) return;

    input.addEventListener("input", function () {

        searchLocation(this.value);

    });

}

// ======================================
// Search
// ======================================

function searchLocation(keyword) {

    const resultBox = document.getElementById("searchResult");

    if (!resultBox) return;

    resultBox.innerHTML = "";

    keyword = keyword.trim().toLowerCase();

    if (keyword === "") return;

    const results = locations.filter(location => {

        return (

            location.township_mm.includes(keyword) ||

            location.village_mm.includes(keyword) ||

            location.township_en.toLowerCase().includes(keyword) ||

            location.village_en.toLowerCase().includes(keyword)

        );

    }).slice(0, 20);

    if (results.length === 0) {

        resultBox.innerHTML = "<div class='search-item'>မတွေ့ပါ</div>";

        return;

    }

    results.forEach(location => {

        const item = document.createElement("div");

        item.className = "search-item";

        item.innerHTML =

            "<strong>" +

            location.village_mm +

            "</strong><br>" +

            "<small>" +

            location.township_mm +

            "</small>";

        item.onclick = () => {

            selectLocation(location);

        };

        resultBox.appendChild(item);

    });

}

// ======================================
// Select Location
// ======================================

function selectLocation(location) {

    APP.currentLocation = {

        latitude: location.latitude,

        longitude: location.longitude,

        township: location.township_mm,

        village: location.village_mm

    };

    document.getElementById("locationName").textContent =

        location.village_mm;

    document.getElementById("searchInput").value =

        location.village_mm;

    document.getElementById("searchResult").innerHTML = "";

    if (typeof loadWeather === "function") {

        loadWeather();

    }

    if (typeof loadForecast === "function") {

        loadForecast();

    }

    if (typeof loadRiver === "function") {

        loadRiver();

    }

    if (typeof loadTide === "function") {

        loadTide();

    }

    console.log("Selected:", APP.currentLocation);

}
