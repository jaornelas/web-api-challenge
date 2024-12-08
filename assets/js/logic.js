// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector("#toggle");
const theme = document.querySelector(".theme");

let mode = "light";



toggle.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    theme.setAttribute("class", "dark");
    document.querySelector('#toggle').innerHTML = "🌒"
    document.documentElement.style.setProperty("--circle-color", "blue");

  } else {
    mode = "light";
    theme.setAttribute("class", "light");
    document.querySelector('#toggle').innerHTML = "☀️"
    document.documentElement.style.setProperty("--circle-color", "#ffb100");

  }

  
});

// mode = localStorage.setItem('theme', theme);
// const stored = localStorage.getItem('mode');

// const stringed = JSON.stringify(stored);
// console.log(stringed);






// const toggleButton = document.getElementById('toggle');
// //const container = document.querySelectorAll('.container');

// // check local storage for mode preferance
// const currentMode = localStorage.getItem('mode') || 'light';

// //apply saved mode on page
// document.body.classList.add(`${currentMode}-mode`);

// // Listen for a click event on toggle switch
// toggleButton.addEventListener('click', function () {


//   // const newMode = document.body.classList.contains('light-mode') ? 'dark' : 'light';

//   // //remove old mode and apply new 
//   // document.body.classList.remove('light', 'dark');

//   // document.body.classList.add(`${newMode}-mode`);
  
//   // localStorage.setItem('mode', newMode);
// });


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  // const data =localStorage.getItem(formData);

  // //if data exists
  // return data ? JSON.parse(data) : [];

};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage() {

};

// ! Use the following function whenever you need to redirect to a different page

// let redirectURL = '';

// const redirectPage = function (url) {
//   redirectURL = url;
//   location.assign(url);
// };

