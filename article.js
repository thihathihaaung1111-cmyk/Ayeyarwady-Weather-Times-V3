// ======================================
// Ayeyarwady Weather Times V3
// article.js
// ======================================

let articles = [];

// Google Sheet JSON URL
const ARTICLE_URL = "";

// Initialize
function initArticles() {

    loadArticles();

}

// Load Articles
async function loadArticles() {

    try {

        if (ARTICLE_URL === "") {

            console.log("Google Sheet URL မထည့်ရသေးပါ။");

            return;

        }

        const response = await fetch(ARTICLE_URL);

        articles = await response.json();

        renderArticles();

    } catch (error) {

        console.error(error);

    }

}

// Render
function renderArticles() {

    const box = document.getElementById("articleList");

    if (!box) return;

    box.innerHTML = "";

    articles.forEach(article => {

        const card = document.createElement("div");

        card.className = "article-card";

        card.innerHTML = `

            <img src="${article.image}" alt="">

            <h3>${article.title}</h3>

            <p>${article.summary}</p>

            <button onclick="window.open('${article.link}')">

                ဖတ်ရန်

            </button>

        `;

        box.appendChild(card);

    });

          }
