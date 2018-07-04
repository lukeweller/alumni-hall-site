$(function() {
  $(window).scroll(function() {

    //use this number to determine when to switch to fixed menu
    console.log($(window).scrollTop())

    if ($(window).scrollTop() > 55) $('#navbar').addClass('navbarFixed');

    if ($(window).scrollTop() < 56) $('#navbar').removeClass('navbarFixed');

  });
});
