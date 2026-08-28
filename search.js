// =====================================
// Ayeyarwady Weather Times V3
// search.js
// =====================================

let locations = [];
let filteredLocations = [];

// Load locations.json
async function loadLocations() {

    try {

        const response = await fetch("locations.json");

        locations = await response.json();

        console.log("Locations Loaded:", locations.length);

    } catch (error) {

        console.error("locations.json Error :", error);

    }

}

// Initialize Search
function initSearch() {

    const input = document.getElementById("searchInput");

    if (!input) return;

    input.addEventListener("input", function () {

        searchLocation(this.value);

    });

}

// Search
function searchLocation(keyword) {

    keyword = keyword.trim().toLowerCase();

    const resultBox = document.getElementById("searchResult");

    resultBox.innerHTML = "";

    if (keyword === "") return;

    filteredLocations = locations.filter(item => {

        return (

            item.village_mm?.includes(keyword) ||

            item.village_en?.toLowerCase().includes(keyword) ||

            item.township_mm?.includes(keyword) ||

            item.township_en?.toLowerCase().includes(keyword)

        );

    });

    filteredLocations.slice(0,10).forEach(item=>{

        const div=document.createElement("div");

        div.className="search-item";

        div.innerHTML=`
        <strong>${item.village_mm}</strong><br>
        <small>${item.township_mm}</small>
        `;

        div.onclick=()=>{

            document.getElementById("searchInput").value=item.village_mm;

            resultBox.innerHTML="";

            if(typeof getWeatherByLocation==="function"){

                getWeatherByLocation(
                    item.latitude,
                    item.longitude
                );

            }

        };

        resultBox.appendChild(div);

    });

}
