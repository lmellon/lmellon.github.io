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
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=c55d5c9f&t=" + movieName
  }).then(
    (data) => {
      // console.log(data);
      $('.movie-info').empty();
      let $title = $('<h3>').addClass('title').html(data.Title);
      let $plot = $('<div>').addClass('plot').html(data.Plot);
      let $director = $('<div>').addClass('director').html('Directed by: ' + (data.Director));
      let $stars = $('<div>').addClass('stars').html('Cast: ' + (data.Actors));
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



})
