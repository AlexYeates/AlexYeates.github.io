// SELECTOR VARIABLES:
const backgroundVideo = $('#background-video');
const button = $('.touch-button');
const slideOne = $('.slide-one');
const slideTwo = $('.slide-two');

// EVENT LISTENERS:
button.click(function () {
  slideOne.remove();
  backgroundVideo.remove();
  slideTwo.removeClass('hide');
});

// FUNCTIONS: