// ======================================
// Ayeyarwady Weather Times V3
// alert.js
// ======================================

let alertData = [];

// Initialize Alert
function initAlert() {

    loadAlerts();

}

// Load Alert Data
async function loadAlerts() {

    try {

        // နောက်ပိုင်း DMH API / JSON ဖြင့် အစားထိုးမယ်

        alertData = [

            {
                type: "weather",
                level: "Normal",
                title: "ရာသီဥတုပုံမှန်",
                message: "လက်ရှိတွင် အထူးသတိပေးချက် မရှိသေးပါ။"
            }

        ];

        updateAlertUI();

    } catch (error) {

        console.error("Alert Error :", error);

    }

}

// Update UI
function updateAlertUI() {

    const alertBox = document.getElementById("alertBox");

    if (!alertBox) return;

    alertBox.innerHTML = "";

    alertData.forEach(alert => {

        const card = document.createElement("div");

        card.className = "alert-card " + alert.level.toLowerCase();

        card.innerHTML = `

            <h3>${alert.title}</h3>

            <p>${alert.message}</p>

            <small>Level : ${alert.level}</small>

        `;

        alertBox.appendChild(card);

    });

}
