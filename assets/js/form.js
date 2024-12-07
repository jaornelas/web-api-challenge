// TODO: Create a variable that selects the form element
const form = document.querySelector("form");
//console.log(form);

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const handleFormSubmit = function(event) {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;

    if (!name || !comment) {
        alert("Please fill out all fields.");
        return;
    }

    const formData = { name, comment };
    localStorage.setItem('formData', JSON.stringify(formData));

    redirectPage('../blog.html');
}

// function formSubmission() {
//     event.preventDefault();
//     const name = document.querySelector('name')
//     const comment = document.querySelector('comment')


form.addEventListener("submit", handleFormSubmit);

let redirectURL = '';

const redirectPage = function(url) {
    redirectURL = url;
    location.assign(url);
}

