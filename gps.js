// =====================================
// Ayeyarwady Weather Times V3
// gps.js
// =====================================

function initGPS() {

    const gpsBtn = document.getElementById("gpsBtn");

    if (!gpsBtn) return;

    gpsBtn.addEventListener("click", getCurrentLocation);

}

// Get current location
function getCurrentLocation() {

    if (!navigator.geolocation) {

        alert("❌ သင့် Browser မှာ GPS မရနိုင်ပါ။");
        return;

    }

    gpsBtnLoading(true);

    navigator.geolocation.getCurrentPosition(

        position => {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log("Latitude :", lat);
            console.log("Longitude:", lon);

            gpsBtnLoading(false);

            // နောက်ပိုင်း api.js ထဲက Weather API ကို ခေါ်မယ်
            if (typeof getWeatherByLocation === "function") {
                getWeatherByLocation(lat, lon);
            }

        },

        error => {

            gpsBtnLoading(false);

            alert("📍 Location Permission ပေးပြီး ထပ်စမ်းကြည့်ပါ။");

            console.error(error);

        },

        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }

    );

}

// GPS Button Loading
function gpsBtnLoading(status) {

    const btn = document.getElementById("gpsBtn");

    if (!btn) return;

    if (status) {

        btn.disabled = true;
        btn.textContent = "⏳";

    } else {

        btn.disabled = false;
        btn.textContent = "📍";

    }

      }
