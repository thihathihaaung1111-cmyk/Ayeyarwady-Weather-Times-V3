// ======================================
// Ayeyarwady Weather Times V3
// storage.js
// ======================================

"use strict";

// Storage Key
const STORAGE_KEY = "awt_v3";

// ======================================
// Initialize Storage
// ======================================

function initStorage() {

    console.log("Storage Module Ready");

}

// ======================================
// Save Data
// ======================================

function saveStorage(key, value) {

    try {

        const storage = getStorage();

        storage[key] = value;

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(storage)

        );

    } catch (error) {

        console.error(error);

    }

}

// ======================================
// Load Data
// ======================================

function loadStorage(key, defaultValue = null) {

    try {

        const storage = getStorage();

        if (storage[key] !== undefined) {

            return storage[key];

        }

        return defaultValue;

    } catch (error) {

        console.error(error);

        return defaultValue;

    }

}

// ======================================
// Remove Data
// ======================================

function removeStorage(key) {

    const storage = getStorage();

    delete storage[key];

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(storage)

    );

}

// ======================================
// Clear Storage
// ======================================

function clearStorage() {

    localStorage.removeItem(

        STORAGE_KEY

    );

}

// ======================================
// Get Storage
// ======================================

function getStorage() {

    const data = localStorage.getItem(

        STORAGE_KEY

    );

    if (!data) {

        return {};

    }

    return JSON.parse(data);

}

// ======================================
// Favorite Locations
// ======================================

function saveFavorite(location) {

    const favorites = loadStorage(

        "favorites",

        []

    );

    favorites.push(location);

    saveStorage(

        "favorites",

        favorites

    );

}

function getFavorites() {

    return loadStorage(

        "favorites",

        []

    );

}

// ======================================
// Recent Searches
// ======================================

function saveRecent(location) {

    let recent = loadStorage(

        "recent",

        []

    );

    recent = recent.filter(

        item => item.name !== location.name

    );

    recent.unshift(location);

    if (recent.length > 10) {

        recent.length = 10;

    }

    saveStorage(

        "recent",

        recent

    );

}

function getRecent() {

    return loadStorage(

        "recent",

        []

    );

}
