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




})
