# web-api-challenge
Learning how to traverse the DOM and calling objects using built-in web API's

# User Story
AS A marketing student <br>
I WANT a personal blog <br>
SO THAT I can showcase my thoughts and experiences. <br>

# Acceptance Criteria 
GIVEN a personal blog <br>
WHEN I load the app <br>
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content <br>
WHEN I try to submit a form without a username, title, or content <br>
THEN I am presented with a message that prompts me to complete the form. <br>
WHEN I submit the form <br>
THEN blog post data is stored to local storage <br>
WHEN the form submits <br>
THEN I am redirected to the posts page <br>
WHEN I view the posts page <br>
THEN I am presented with a header, a light mode/dark mode toggle, and a "Back" button <br>
WHEN I click the light mode/dark mode toggle <br>
THEN the page content's styles update to reflect the selection <br>
WHEN I click the "Back" button <br>
THEN I am redirected back to the landing page where I can input more blog entries <br>
WHEN I view the main content <br>
THEN I am presented with a list of blog posts that are pulled from local storage <br>
WHEN I view local storage <br>
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content <br>
WHEN I take a closer look at a single blog entry in the list <br>
THEN I can see the title, the content, and the author of the post <br>
