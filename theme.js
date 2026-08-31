// ======================================
// Ayeyarwady Weather Times V3
// theme.js
// ======================================

"use strict";


// ======================================
// Initialize Theme
// ======================================

function initTheme() {

    applyTheme();

    watchSystemTheme();

}


// ======================================
// Apply Theme
// ======================================

function applyTheme() {

    const theme = getSetting("theme");

    if (theme === "light") {

        document.body.setAttribute("data-theme", "light");

        return;

    }

    if (theme === "dark") {

        document.body.setAttribute("data-theme", "dark");

        return;

    }

    applySystemTheme();

}


// ======================================
// Apply System Theme
// ======================================

function applySystemTheme() {

    const dark = window.matchMedia(

        "(prefers-color-scheme: dark)"

    ).matches;

    document.body.setAttribute(

        "data-theme",

        dark ? "dark" : "light"

    );

}


// ======================================
// Toggle Theme
// ======================================

function toggleTheme() {

    const current = getSetting("theme");

    let next = "light";

    if (current === "light") {

        next = "dark";

    }

    else if (current === "dark") {

        next = "auto";

    }

    setSetting(

        "theme",

        next

    );

    applyTheme();

}


// ======================================
// Watch System Theme
// ======================================

function watchSystemTheme() {

    const media = window.matchMedia(

        "(prefers-color-scheme: dark)"

    );

    media.addEventListener(

        "change",

        () => {

            if (

                getSetting("theme") === "auto"

            ) {

                applySystemTheme();

            }

        }

    );

}
