// ======================================
// Ayeyarwady Weather Times V3
// search.js
// ======================================

"use strict";


// ======================================
// Search Variables
// ======================================

let locations = [];

let filteredLocations = [];


// ======================================
// Initialize Search
// ======================================

async function initSearch() {

    await loadLocations();

    setupSearch();

}


// ======================================
// Load Locations
// ======================================

async function loadLocations() {

    try {

        const response = await fetch(

            "locations.json"

        );

        locations = await response.json();

    } catch (error) {

        console.error(error);

    }

}


// ======================================
// Setup Search
// ======================================

function setupSearch() {

    const input = document.getElementById(

        "searchInput"

    );

    if (!input) return;

    input.addEventListener(

        "input",

        searchLocation

    );

}


// ======================================
// Search Location
// ======================================

function searchLocation(event) {

    const keyword = event.target.value

        .trim()

        .toLowerCase();

    if (keyword === "") {

        clearSearch();

        return;

    }

    filteredLocations = locations.filter(

        location =>

            location.name

            .toLowerCase()

            .includes(keyword)

    );

    renderSearchResults();

}


// ======================================
// Render Results
// ======================================

function renderSearchResults() {

    const list = document.getElementById(

        "searchResults"

    );

    if (!list) return;

    list.innerHTML = "";

    filteredLocations.forEach(location => {

        const item = document.createElement("div");

        item.className = "search-item";

        item.textContent = location.name;

        item.onclick = () => {

            selectLocation(location);

        };

        list.appendChild(item);

    });

}


// ======================================
// Select Location
// ======================================

function selectLocation(location) {

    APP.currentLocation = {

        latitude: location.latitude,

        longitude: location.longitude,

        name: location.name

    };

    clearSearch();

    refreshAll();

}


// ======================================
// Clear Search
// ======================================

function clearSearch() {

    const list = document.getElementById(

        "searchResults"

    );

    if (list) {

        list.innerHTML = "";

    }

        }
