// ======================================
// Ayeyarwady Weather Times V3
// shop.js
// ======================================

let shopData = [];

// Google Sheet URL
const SHOP_URL = "";

// Initialize
function initShops() {

    loadShops();

}

// Load Shop Data
async function loadShops() {

    try {

        if (SHOP_URL === "") {

            console.log("Shop Sheet URL not set.");

            return;

        }

        shopData = await loadSheet(SHOP_URL);

        renderShops();

    } catch (error) {

        console.error("Shop Error :", error);

    }

}

// Render Shops
function renderShops() {

    const box = document.getElementById("shopList");

    if (!box) return;

    box.innerHTML = "";

    shopData.forEach(shop => {

        const card = document.createElement("div");

        card.className = "shop-card";

        card.innerHTML = `

            <img src="${shop.logo}" alt="${shop.name}">

            <h3>${shop.name}</h3>

            <p>🏷️ ${shop.category}</p>

            <p>📍 ${shop.address}</p>

            <p>📞 ${shop.phone}</p>

            <p>🕒 ${shop.open}</p>

            <button onclick="window.open('${shop.facebook}')">
                Facebook
            </button>

            <button onclick="window.open('${shop.map}')">
                Map
            </button>

        `;

        box.appendChild(card);

    });

}
