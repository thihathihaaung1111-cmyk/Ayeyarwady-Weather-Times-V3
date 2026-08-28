// ======================================
// Ayeyarwady Weather Times V3
// product.js
// ======================================

let productData = [];

// Google Sheet URL
const PRODUCT_URL = "";

// Initialize
function initProducts() {

    loadProducts();

}

// Load Products
async function loadProducts() {

    try {

        if (PRODUCT_URL === "") {

            console.log("Product Sheet URL not set.");

            return;

        }

        productData = await loadSheet(PRODUCT_URL);

        renderProducts();

    } catch (error) {

        console.error("Product Error :", error);

    }

}

// Render Products
function renderProducts() {

    const box = document.getElementById("productList");

    if (!box) return;

    box.innerHTML = "";

    productData.forEach(item => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img src="${item.image}" alt="${item.name}">

            <h3>${item.name}</h3>

            <p>💰 ${item.price}</p>

            <p>${item.description}</p>

            <p>📍 ${item.location}</p>

            <p>📞 ${item.phone}</p>

            <button onclick="window.open('${item.link}')">
                အသေးစိတ်ကြည့်ရန်
            </button>

        `;

        box.appendChild(card);

    });

}
