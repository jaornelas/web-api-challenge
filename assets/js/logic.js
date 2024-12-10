// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector("#toggle");
const theme = document.querySelector(".theme");

let mode = localStorage.getItem('theme') || "light";

if (mode === "dark") {
  theme.setAttribute("class", "dark");
  document.querySelector('#toggle').innerHTML = "🌒";
  document.documentElement.style.setProperty("--circle-color", "blue");
} else {
  theme.setAttribute("class", "light");
  document.querySelector('#toggle').innerHTML = "☀️";
  document.documentElement.style.setProperty("--circle-color", "#ffb100");
}

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

localStorage.setItem('theme', mode);
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const data = localStorage.getItem('formData');
  // //if data exists
  return data ? JSON.parse(data) : [];
};


//const myData = readLocalStorage();
//console.log(myData[0].username);

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newData) {
  const existingData = JSON.parse(localStorage.getItem('formData')) || [];

  existingData.push(newData);

  localStorage.setItem('formData', JSON.stringify(existingData));

};

// ! Use the following function whenever you need to redirect to a different page

// let redirectURL = '';

// const redirectPage = function (url) {
//   redirectURL = url;
//   location.assign(url);
// };

