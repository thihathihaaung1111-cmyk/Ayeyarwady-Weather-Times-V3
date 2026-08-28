// ======================================
// Ayeyarwady Weather Times V3
// common.js
// ======================================

// Load Google Sheet JSON
async function loadSheet(url) {

    try {

        const response = await fetch(url);

        if (!response.ok) {

            throw new Error("Network Error");

        }

        return await response.json();

    } catch (error) {

        console.error("Google Sheet Error :", error);

        return [];

    }

}

// Format Date
function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString("my-MM", {

        year: "numeric",

        month: "long",

        day: "numeric"

    });

}

// Open Link
function openLink(url) {

    window.open(url, "_blank");

}
