// ======================================
// Ayeyarwady Weather Times V3
// ai.js
// Part 1
// ======================================

"use strict";


// ======================================
// AI Variables
// ======================================

let aiResult = "";

let aiRisk = "LOW";

let aiData = {};


// ======================================
// Initialize AI
// ======================================

async function initAI() {

    await loadAIMessages();

    console.log("AI Module Ready");

}


// ======================================
// Analyze All
// ======================================

function analyzeAll() {

    aiResult = "";

    aiRisk = "LOW";

    analyzeWeather();

    analyzeRiver();

    analyzeTide();

    analyzeCyclone();

    renderAI();

}


// ======================================
// Weather Analysis
// ======================================

function analyzeWeather() {

    if (!window.weatherData) return;

    const temp = weatherData.current.temperature_2m;

    const rain = weatherData.current.rain;

    if (temp >= 38) {

        addAIMessage(
            "🌡️ အပူချိန်မြင့်မားနေပါသည်။ နေ့လယ်ပိုင်းတွင် အပြင်ထွက်လှုပ်ရှားမှုကို လျှော့ချပါ။"
        );

    }

    if (rain > 10) {

        addAIMessage(
            "🌧️ မိုးရွာနိုင်ခြေများပါသည်။ ထီး၊ မိုးကာများ ဆောင်ထားပါ။"
        );

    }

}


// ======================================
// River Analysis
// ======================================

function analyzeRiver() {

    if (!window.riverData) return;

    if (riverData.level >= 12) {

        aiRisk = "HIGH";

        addAIMessage(
            "🌊 မြစ်ရေ အန္တရာယ်အဆင့်သို့ ရောက်ရှိနေပါသည်။"
        );

    }

    else if (riverData.level >= 10) {

        aiRisk = "MEDIUM";

        addAIMessage(
            "⚠️ မြစ်ရေ တိုးလာနေပါသည်။"
        );

    }

}


// ======================================
// Add AI Message
// ======================================

function addAIMessage(message) {

    aiResult += "• " + message + "\n";

        }

// ======================================
// Tide Analysis
// ======================================

function analyzeTide() {

    if (!window.tideData) return;

    if (tideData.type === "HIGH") {

        addAIMessage(
            "🌊 ဒီရေတက်ချိန်ဖြစ်နေပါသည်။ မြစ်ကမ်းနှင့် ကမ်းရိုးတန်းအနီး သတိထားပါ။"
        );

    }

}


// ======================================
// Cyclone Analysis
// ======================================

function analyzeCyclone() {

    if (!window.cycloneData) return;

    if (cycloneData.level >= 3) {

        aiRisk = "HIGH";

        addAIMessage(
            "🌀 မုန်တိုင်းအန္တရာယ် မြင့်မားနေပါသည်။"
        );

    }

    else if (cycloneData.level >= 2) {

        if (aiRisk !== "HIGH") {

            aiRisk = "MEDIUM";

        }

        addAIMessage(
            "⚠️ မုန်တိုင်းကို ဆက်လက်စောင့်ကြည့်ပါ။"
        );

    }

}


// ======================================
// Render AI
// ======================================

function renderAI() {

    const result = document.getElementById("aiResult");

    const risk = document.getElementById("aiRisk");

    if (!result || !risk) return;

    if (aiResult === "") {

        aiResult =
            "✅ လက်ရှိအခြေအနေအရ ထူးခြားသော အန္တရာယ် မတွေ့ရှိရသေးပါ။";

    }

    result.textContent = aiResult;

    risk.textContent = aiRisk;

    risk.className = getRiskClass(aiRisk);

}


// ======================================
// Risk Class
// ======================================

function getRiskClass(level) {

    switch (level) {

        case "HIGH":
            return "danger";

        case "MEDIUM":
            return "warning";

        default:
            return "normal";

    }

}


// ======================================
// Refresh AI
// ======================================

function refreshAI() {

    analyzeAll();

            }

// ======================================
// AI Message Engine
// ======================================

let aiMessages = {};


// ======================================
// Load AI Messages
// ======================================

async function loadAIMessages() {

    try {

        const response = await fetch(

            "data/ai_messages.json"

        );

        aiMessages = await response.json();

    }

    catch (error) {

        console.error(error);

    }

}


// ======================================
// Get AI Message
// ======================================

function getAIMessage(category, key) {

    if (

        !aiMessages[category] ||

        !aiMessages[category][key]

    ) {

        return "";

    }

    const list = aiMessages[category][key];

    if (!Array.isArray(list)) {

        return "";

    }

    const index = Math.floor(

        Math.random() * list.length

    );

    return list[index];

}


// ======================================
// Add Smart Message
// ======================================

function addSmartMessage(category, key) {

    const message = getAIMessage(

        category,

        key

    );

    if (message !== "") {

        addAIMessage(message);

    }

        }
