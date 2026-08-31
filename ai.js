// ======================================
// Ayeyarwady Weather Times V3
// ai.js
// ======================================

"use strict";

let aiMessage = "";

// ======================================
// Initialize
// ======================================

function initAI() {

    analyzeAll();

}

// ======================================
// Analyze
// ======================================

function analyzeAll() {

    let messages = [];

    // Weather
    if (typeof weatherData !== "undefined" && weatherData) {

        const temp = weatherData.current.temperature_2m;

        if (temp >= 38) {

            messages.push("🌡️ အပူချိန် အလွန်မြင့်နေပါသည်။");

        }

        else if (temp <= 20) {

            messages.push("🥶 အပူချိန် နိမ့်နေပါသည်။");

        }

        else {

            messages.push("🌤️ အပူချိန် ပုံမှန်ဖြစ်ပါသည်။");

        }

        const humidity = weatherData.current.relative_humidity_2m;

        if (humidity >= 85) {

            messages.push("💧 စိုထိုင်းဆ မြင့်နေပါသည်။");

        }

    }

    // River
    if (typeof riverData !== "undefined" && riverData) {

        if (riverData.level >= riverData.danger) {

            messages.push("🌊 မြစ်ရေ အန္တရာယ်အဆင့် ရောက်နေပါသည်။");

        }

        else {

            messages.push("🌊 မြစ်ရေ အခြေအနေ ပုံမှန်ဖြစ်ပါသည်။");

        }

    }

    // Tide
    if (typeof tideData !== "undefined" && tideData) {

        messages.push(

            "🌊 နောက် High Tide - " +

            tideData.nextHigh

        );

    }

    // Alerts
    if (typeof alertData !== "undefined" && alertData) {

        if (alertData.cyclone.level !== "None") {

            messages.push("🌀 မုန်တိုင်း သတိပေးချက် ရှိပါသည်။");

        }

        if (alertData.flood.level !== "Normal") {

            messages.push("⚠️ ရေကြီးနိုင်ခြေ ရှိပါသည်။");

        }

    }

    if (messages.length === 0) {

        messages.push(

            "📊 ဒေတာများကို စောင့်ဆိုင်းနေပါသည်..."

        );

    }

    aiMessage = messages.join("<br><br>");

    renderAI();

}

// ======================================
// Render
// ======================================

function renderAI() {

    const box = document.getElementById("aiText");

    if (!box) return;

    box.innerHTML = aiMessage;

                          }
