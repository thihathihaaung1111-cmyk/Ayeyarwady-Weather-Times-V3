// ======================================
// Ayeyarwady Weather Times V3
// news.js
// ======================================

let newsData = [];

// Google Sheet URL
const NEWS_URL = "";

// Initialize
function initNews() {

    loadNews();

}

// Load News
async function loadNews() {

    try {

        if (NEWS_URL === "") {

            console.log("News Sheet URL not set.");

            return;

        }

        newsData = await loadSheet(NEWS_URL);

        renderNews();

    } catch (error) {

        console.error("News Error :", error);

    }

}

// Render News
function renderNews() {

    const box = document.getElementById("newsList");

    if (!box) return;

    box.innerHTML = "";

    newsData.forEach(news => {

        const card = document.createElement("div");

        card.className = "news-card";

        card.innerHTML = `

            <img src="${news.image}" alt="${news.title}">

            <h3>${news.title}</h3>

            <small>${news.date}</small>

            <p>${news.summary}</p>

            <button onclick="window.open('${news.link}')">

                ဖတ်ရန်

            </button>

        `;

        box.appendChild(card);

    });

}
