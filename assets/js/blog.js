// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector("main");
const backButton = document.querySelector(".back-button")

// TODO: Create a function that builds an element and appends it to the DOM
const buildElement = function (element, text, className) {
    const el = document.createElement(element);
    el.textContent = text;
    el.className = className;
    main.appendChild(el);
    }


// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = function () {
    buildElement('h3', 'No posts to dipslay', 'no-posts');
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlog = () => {
    const blogData = readLocalStorage();

    if (!blogData.length) {
        noPosts();
        return;
    }

    blogData.forEach((post) => {
        buildElement('h3', post.name, 'post-name');
        buildElement('p', post.comment, 'post-comment');
    });
};


// TODO: Call the `renderBlogList` function
renderBlogList();
  // TODO: Implement the function body


backButton.addEventListener('click', function() {
    redirectPage();
});
redirectPage()
