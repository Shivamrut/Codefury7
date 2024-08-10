import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDzgLAIvTBAedjtOGwq6JR3YFD_uWRU8XQ",
    authDomain: "auth-cd42d.firebaseapp.com",
    databaseURL: "https://auth-cd42d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "auth-cd42d",
    storageBucket: "auth-cd42d.appspot.com",
    messagingSenderId: "1474594142",
    appId: "1:1474594142:web:b16f0c80c064f18b05bbcf"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const findMyCoordinates = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        alert("Location fetched:" + position.coords.latitude+" and "+ position.coords.longitude);
        alert("Updated to database!")
        saveLocation(position.coords);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        alert("Error getting geolocation:", error);
        
        // Handle geolocation error here, e.g., display an error message to the user
      }
    );
  } else {
    console.error("Geolocation not supported by browser");
    // Handle browser not supporting geolocation
  }
};

// Function to save location
const saveLocation = (coords) => {
  const locationRef = ref(database, 'locations'); // Correct reference to 'locations'
  const newLocationRef = push(locationRef); // Create a new child under location node

  set(newLocationRef, {
    latitude: coords.latitude,
    longitude: coords.longitude,
  })
  .then(() => {
    console.log("Location saved successfully");
    document.querySelector("#communication").textContent = "Location saved successfully!";
  })
  .catch((error) => {
    console.error("Error saving location:", error);
    document.querySelector("#communication").textContent = "Error saving location: " + error.message;
  });
};

document.querySelector("#share").addEventListener("click", findMyCoordinates);
