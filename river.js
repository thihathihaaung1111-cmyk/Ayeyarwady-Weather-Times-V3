// ======================================
// river.js
// ======================================

"use strict";

let riverData = null;

function initRiver() {

    if (APP.currentLocation) {

        loadRiver();

    }

}

async function loadRiver() {

    if (!APP.currentLocation) return;

    try {

        // TODO:
        // နောက်ပိုင်း Hydro API နဲ့ ချိတ်မယ်။
        // အခု Sample Data သုံးထားတယ်။

        riverData = {

            station: APP.currentLocation.township,

            level: 3.25,

            danger: 6.00,

            status: "Normal",

            updated: new Date()

        };

        renderRiver();

    }

    catch (error) {

        console.error(error);

    }

}

function renderRiver() {

    if (!riverData) return;

    const box = document.getElementById("riverInfo");

    if (!box) return;

    let color = "#22c55e";

    if (riverData.level >= riverData.danger) {

        color = "#ef4444";

        riverData.status = "Danger";

    }

    box.innerHTML = `

        <div class="river-card">

            <h3>${riverData.station}</h3>

            <p>🌊 Water Level : <b>${riverData.level} m</b></p>

            <p>⚠ Danger Level : <b>${riverData.danger} m</b></p>

            <p style="color:${color}">

                ${riverData.status}

            </p>

            <small>

                Updated :

                ${riverData.updated.toLocaleString()}

            </small>

        </div>

    `;

}
