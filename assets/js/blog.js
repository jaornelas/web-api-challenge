// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector("main");
const backButton = document.querySelector("#back");


// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(tag, text, className, id) {
    const el = document.createElement(tag);
    el.textContent = text;
    if (className) {
      el.className = className;
    } 
    if (id) {
      el.id = id;
    }
    return el; // Ensure the created element is returned
  }


// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    buildEl('No blog posts are available', 'h2', main);
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

const blogPosts = JSON.parse(localStorage.getItem('formData'));
console.log(blogPosts);
console.log(blogPosts.username);


const renderBlogList = function(formData) {
  const article = buildElement("article", "", "card");
  const titleEl = buildElement("h2", formData.title);
  const contentEl = buildElement("blockquote", formData.content);
  const nameEl = buildElement("p", `Posted by: ${formData.username}`);

  article.appendChild(titleEl);
  article.appendChild(contentEl);
  article.appendChild(nameEl);

  main.appendChild(article);
};

document.addEventListener('DOMContentLoaded', function () {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      const formData = JSON.parse(storedFormData);
      renderBlogList(formData);
    } else {
      console.log("No form data found in local storage.");
    }
  });


// TODO: Call the `renderBlogList` function
//renderBlogList();


backButton.addEventListener('click', function() {
    let redirectURL = '';

    const redirectPage = function(url) {
        redirectURL = url;
        location.assign(url);
    };

redirectPage('index.html')
});


