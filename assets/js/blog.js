// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector("main");
const backButton = document.getElementById("back");

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
};
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {

    //get the list from local storage
    const blogPosts = JSON.parse(localStorage.getItem('formData')) || [];
    console.log(blogPosts);

    //set container element to display 
    const blogContainer = document.querySelector("article");

    blogContainer.innerHTML = '';
    console.log(blogPosts.length);

    //check to see if blog posts exist
    if (blogPosts.length > 0) {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');

            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            const contentElement = document.createElement('p');
            contentElement.textConent = post.content;

            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);

            blogListContainer.appendChild(postElement);

        })
    } else {
        noPosts();
    }
    
};




// TODO: Call the `renderBlogList` function
renderBlogList();
  // TODO: Implement the function body


  

backButton.addEventListener('click', function() {
   
    const redirectPage = function(url) {
        window.location.href = url;
    };
    redirectPage('../index.html');
});


