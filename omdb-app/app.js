$(() => {
/////////////////////////////////////////////////////////////////
///////////////// create image CAROUSEL   ///////////////////////

// variables need to be able to change.  have to use let instead of const
let picCount = 0;
let numberOfPics = $('.images').children().length - 1;
let $visiblePic = $('.images').children();

// create event listeners for BUTTONS

// next BUTTON
$('.next').on('click',() => {
  // hide current picture
  $visiblePic.eq(picCount).hide();
  // to show next picture, move up to the next index
  if (picCount < numberOfPics) {
    picCount++;
  } else {
    // when you reach the end, reset to the first index
    picCount = 0;
  }
  // show next picture
  $visiblePic.eq(picCount).show();
})

// previous BUTTON
$('.previous').on('click',() => {
  // hide current picture
  $visiblePic.eq(picCount).hide();
  // to show next picture, count down to previous index
  if (picCount > 0) {
    picCount--;
  } else {
    // reset picture number to last one in array
    picCount = numberOfPics;
  }
  // show the previous picture
  $visiblePic.eq(picCount).show();
})

/////////////////////////////////////////////////////////////////
////////////////////    create ajax method   ////////////////////
// make ajax a global function with a parameter of the movie name we want pulled.

const pullMovieData = (movieName) => {
  $.ajax({
    url: "https://www.omdbapi.com/?i=tt3896198&apikey=c55d5c9f&t=" + movieName
  }).then(
    (data) => {
      // console.log(data);
      // make sure no movie information is displayed
      $('.movie-info').empty();
      // create 4 divs for each piece of data we are pulling from the api
      let $title = $('<h3>').addClass('title').html(data.Title);
      let $plot = $('<div>').addClass('plot').html(data.Plot);
      let $director = $('<div>').addClass('director').html('Directed by: ' + (data.Director));
      let $stars = $('<div>').addClass('stars').html('Cast: ' + (data.Actors));
      // append the divs to the last div, movie-info, so they display at the bottom of the screen
      $('.movie-info').append($title);
      $('.movie-info').append($plot);
      $('.movie-info').append($director);
      $('.movie-info').append($stars);
    },
    () => {
      console.log('bad request');
    }
  )
}


//////////////////////////////////////////////////////////
//////////////    create event listeners    //////////////

// For the year buttons, pass the movie title as the parameter of pullMovieData().  This alters the ajax url everytime to display the correct info.

$('.80sbtn').on('click',(event) => {
  pullMovieData('out+of+africa');
});

$('.90sbtn').on('click',(event) => {
  pullMovieData('The+bridges+of+madison+county');
});

$('.00sbtn').on('click',(event) => {
  pullMovieData('The+devil+wears+Prada');
});

$('.10sbtn').on('click',(event) => {
  pullMovieData('iron+lady');
});

// create event listner to clear the movie information when you click anywhere in the 'right-side' class. (essentially the right side of the screen)

$('.right-side').on('click',() => {
  $('.movie-info').empty();
});


/////////////////////////////////////////////
////////////////   quizz   ///////////////////

// set player's score to zero
let playerScore = 0


// create a function that shows the quiz question and T/F buttons.  use parameters to identify the question number and the question text.  add in event listeners for answers.
const showQuestion = (qnumber, qtext) => {
  // create question
  let $quizQuestion = $('<p>').text(qnumber + '.  ' + qtext).addClass('questionaire');
  // create button for True and False
  let $optionTrue = $('<button>').text('True').addClass('qbtn');
  let $optionFalse = $('<button>').text('False').addClass('qbtn');
  // append question to the parent div (quiz)
  $('.quiz').append($quizQuestion);
  // append buttons to the question
  $quizQuestion.append($optionTrue);
  $quizQuestion.append($optionFalse);
  // set up event listener for True button
  $optionTrue.on('click',() => {
    // increase the player's score by 1
    playerScore++;
    // change background color to green if selected
    $optionTrue.css('background-color','#54AD91');
  });
  // set up event listener for False button
  $optionFalse.on('click',() => {
    // change background color to red if selected
    $optionFalse.css('background-color','red');
  })
}

// set up event listener to display quiz.  Create the arguments for the 5 questions that will be created//
$('.play').on('click', () => {
  showQuestion(1, "Meryl Streep was born in New Jersey.");
  showQuestion(2, "Meryl Streep won Academy Awards for her work in Kramer vs Kramer, Sophie's Choice, and The Iron Lady.");
  showQuestion(3, "Meryl Streep has acted one son and three daughters.");
  showQuestion(4, "Meryl Streep has been nominated for over 375 awards.");
  showQuestion(5, "Meryl Streep is well known for her ability to imitate accents.")
});

//////// create function to display score when quiz is done.



// event listener for show results button
$('.pull-results').on('click', () => {
  // create a div that writes out the final score.
  const $quizScore = $('<div>').text('You answered ' + playerScore + ' out of 5 correctly!').addClass('score');
  // create a button to restart the quiz
  const $resetQuiz = $('<div>').text("Restart quiz").addClass('restart');
  // append the div result to the parent div (final-score)
  $('.final-score').append($quizScore);
  // append the reset button to the paren div (final-score)
  $('.final-score').append($resetQuiz);
  // build in an event listner to reset the quiz
  $resetQuiz.on('click',() => {
    $('.quiz').empty();
    $quizScore.empty();
    $('.final-score').empty();
  })
});



});
