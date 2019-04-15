$(() => {

// create image CAROUSEL

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

// create variable for t= in ajax url
let movieName = '';

// event listener for 1985 button
$('.80sbtn').on('click',(event) => {
  movieName = 'out+of+africa';

// use AJAX to retrieve data from the omdb api
  $.ajax({
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=c55d5c9f&t=" + movieName
  }).then(
    (data) => {
      console.log(data);
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
});


//event listener for 1996 button
$('.90sbtn').on('click',(event) => {
  movieName = 'The+bridges+of+madison+county';

// use AJAX to retrieve data from the omdb api
  $.ajax({
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=c55d5c9f&t=" + movieName
  }).then(
    (data) => {
      console.log(data);
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
});

//event listener for 2006 button
$('.00sbtn').on('click',(event) => {
  movieName = 'The+devil+wears+Prada';

// use AJAX to retrieve data from the omdb api
  $.ajax({
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=c55d5c9f&t=" + movieName
  }).then(
    (data) => {
      console.log(data);
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
});

// event listner for 2011 button
$('.10sbtn').on('click',(event) => {
  movieName = 'iron+lady';

// use AJAX to retrieve data from the omdb api
  $.ajax({
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=c55d5c9f&t=" + movieName
  }).then(
    (data) => {
      console.log(data);
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
});

$('.right-side').on('click',() => {
  $('.movie-info').empty();
})

})
