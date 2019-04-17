# Unit 1 Project: OMDb app


## Approach Taken
My goal was to showcase one actor's work, pulling movie information from the OMDb API. The site would include one complex UI item, and would be also be a responsive site usable on small or large screen sizes.


## Technologies Used
For an API, I chose to use **OMDb**. I set up several event listeners on buttons the user could select to list the different movie data pulled via **AJAX** requests.

My complex UI item is an **carousel**.  I pulled 4 images of the showcased actor and set up a carousel through which a user can flip forward and backward.

There are multiple *event listeners* throughout the page.  Each of one of these *button clicks* call *functions* and run code based on the user's selections.

A small quiz at the bottom of the page presents the user with five *Boolean* questions. The user will know immediately if his selection is correct based on the background-color shown after he clicks his answer.  At the end, the user's *total score will be displayed*, with an option to *restart the quiz* if he wants.

In order to make my site responsive, I used two main CSS tools:  **flexbox** and **@media query** to set sites that were similar to each other, yet more appropriate for given screen sizes.
To style my app, I referenced the [**Color Picker**](https://www.w3schools.com/colors.colors_picker.asp) on W3Schools' website.  I also used [**Google Fonts**](https://fonts.google.com) to identify the font families with which to style my app.

At the start of my project, I created a wireframe using **MockFlow**(https://mockflow.com).  I was able to draw up the elements needed to layout my app, both in mobile and desktop modes.  This was helpful to creating my HTML and CSS.


## UNSOLVED PROBLEMS
One of my stretch goals was to alter the AJAX request to pull all the movies the actor was in for a specific decade.  I tried to use the filters to draw more detailed and numerous data objects, however, I was unsuccessful.

Another problem I encountered was to during the creation of my quiz.  I attempted to learn how to create a multiple choice quiz via reading on [sitepoint](https://www.sitepoint.com/simple-javascript-quiz/) and [simplestepscode](https://simplestepscode.com/javascript-quiz-tutorial/#step1), but I was unsuccessful at implementing it.  Instead, I created a function that had two parameters which created numbered questions when called with corresponding arguments.  I intentionally made them Boolean and added a *true* and *false* buttons to them during the creation process of the question.  The problem I ran into was not being able to alternate correct responses between the questions.  I ended up making sure all the questions were true so that that was the only event listener that increased the user's score.


## Link to live site
My page is hosted on Github pages.  You can access it at[www.lmellon.github.io](https://lmellon.github.io).
