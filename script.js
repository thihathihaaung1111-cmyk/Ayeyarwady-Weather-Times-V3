// ===================================================
// Ayeyarwady Weather Times V3
// Main Script
// ===================================================

let locations = [];
let selectedLocation = null;

// ------------------------------
// App Start
// ------------------------------
window.addEventListener("DOMContentLoaded", async () => {

    showSplash();

    await loadLocations();

    setupTheme();

    setupSearch();

    setupGPS();

});

// ------------------------------
// Splash Screen
// ------------------------------
function showSplash(){

    setTimeout(()=>{

        const splash=document.getElementById("splash");

        splash.style.opacity="0";

        setTimeout(()=>{

            splash.style.display="none";

        },500);

    },1000);

}

// ------------------------------
// Load locations.json
// ------------------------------
async function loadLocations(){

    try{

        const response=await fetch("locations.json");

        locations=await response.json();

        if(locations.length){

            selectedLocation=locations[0];

            updateLocationName();

        }

    }catch(error){

        console.error(error);

    }

}

// ------------------------------
// Update Location
// ------------------------------
function updateLocationName(){

    if(!selectedLocation) return;

    document.getElementById("locationName").textContent =
        selectedLocation.village_mm || selectedLocation.village_en;

}

// ------------------------------
// Search
// ------------------------------
function setupSearch(){

    const input=document.getElementById("searchInput");

    input.addEventListener("input",()=>{

        const keyword=input.value.toLowerCase();

        const result=locations.find(item=>{

            return(
                item.village_mm?.includes(keyword) ||
                item.village_en?.toLowerCase().includes(keyword) ||
                item.township_mm?.includes(keyword) ||
                item.township_en?.toLowerCase().includes(keyword)
            );

        });

        if(result){

            selectedLocation=result;

            updateLocationName();

        }

    });

}

// ------------------------------
// GPS
// ------------------------------
function setupGPS(){

    document.getElementById("gpsBtn")
    .addEventListener("click",()=>{

        if(!navigator.geolocation){

            alert("GPS မရပါ");

            return;

        }

        navigator.geolocation.getCurrentPosition(position=>{

            console.log(position.coords);

            alert("GPS ရရှိပါပြီ။ Weather API ကို နောက်အဆင့်မှာ ချိတ်မယ်။");

        });

    });

}

// ------------------------------
// Theme
// ------------------------------
function setupTheme(){

    const btn=document.getElementById("themeBtn");

    btn.onclick=()=>{

        document.body.classList.toggle("dark");

        btn.textContent=
            document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";

    };

          }
