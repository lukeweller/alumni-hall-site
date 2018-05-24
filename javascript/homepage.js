// ------------------------------------------------ Set the height of the holding div

// Write the setHeight function and save as a variable
var setHeight = function () {
    
    var holderHeight = $(window).height();
    
    $(".hero-holder").css({"height": holderHeight});
    
};
 
// Call the setHeight function on window load
$( document ).ready( setHeight );
 
// Call the setHeight function on wondow resize
$(window).on( "resize", setHeight ).resize();

// ---------------------------------------------------------  Make the BG image cover the god damn screen

// This technique is pinched from: http://css-tricks.com/perfect-full-page-background-image/

$(window).on('load', function() {    

  var theWindow         = $(window),
      bg                = $(".hero-image"),
      aspectRatio       = bg.width() / bg.height();
                    
  function resizeBg() {
    
    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {

        bg.removeClass().addClass('hero-image-height');

        var marginLeft = bg.width()/2;

        bg.css({"margin-top": "0", "margin-left": -marginLeft});

    } else {

        bg.removeClass().addClass('hero-image-width');

        var marginTop = bg.height()/2;

        bg.css({"margin-left": "0", "margin-top": -marginTop});

    }
          
  }
                          
  theWindow.resize(resizeBg).trigger("resize");

});

$(document).ready(function() {

  $('html').animate({scrollTop:0}, 1);
  $('body').animate({scrollTop:0}, 1);

  window.sr = ScrollReveal();
  sr.reveal('.info-text', {duration: 1500});
  sr.reveal('.info-logo-left', {duration: 2500, origin: 'left', distance: '250px'});
  sr.reveal('.info-logo-right', {duration: 2500, origin: 'right', distance: '250px'});

  sr.reveal('.logo-holder', { duration: 3000, distance: '150px'});
  
  sr.reveal('.name', {duration: 2500, origin: 'top', distance: '250px'});
  sr.reveal('.bio-body', {duration: 2500, origin: 'right', distance: '250px'});
  sr.reveal('.test-btn', {duration: 2500, origin: 'bottom', distance: '250px'});

  sr.reveal('.cglogo', {duration: 1000, origin: 'left', distance: '50px', delay: '0', mobile: false});
  sr.reveal('.aboutme', {duration: 1000, origin: 'left', distance: '50px', delay: '50', mobile: false});
  sr.reveal('.education', {duration: 1000, origin: 'left', distance: '50px', delay: '100', mobile: false});
  sr.reveal('.experience', {duration: 1000, origin: 'left', distance: '50px', delay: '150', mobile: false});
  sr.reveal('.projects', {duration: 1000, origin: 'left', distance: '50px', delay: '200', mobile: false});
  sr.reveal('.interests', {duration: 1000, origin: 'left', distance: '50px', delay: '250', mobile: false});
  sr.reveal('.contact', {duration: 1000, origin: 'left', distance: '50px', delay: '300', mobile: false});

  sr.reveal('.email', {duration: 2500, origin: 'bottom', distance: '100px', delay: '0'});
  sr.reveal('.linkedin', {duration: 2500, origin: 'bottom', distance: '100px', delay: '300'});
  sr.reveal('.github', {duration: 2500, origin: 'bottom', distance: '100px', delay: '600'});


  $(window).scroll(function () {
    if (($(window).scrollTop() >= 100) && ($(window).width() >= 600)) {
      $('#navbar').css('background-color','rgba(255, 255, 255, 1.0)');
      $('.nav-link').css('color', '#106500');
      $('.navbar-logo').attr('src', 'images/dawg-green.jpg');
      $('#navbar').css('box-shadow', '0 8px 6px -4px');
    } else if($(window).width() < 600){
      $('#navbar').css('background-color','rgba(255, 255, 255, 1.0)');
      $('.nav-link').css('color', '#106500');
      $('.navbar-logo').attr('src', 'images/dawg-green.png');
      $('#navbar').css('box-shadow', '0 8px 6px -4px');
    } else {
      $('#navbar').css('background-color','rgba(2, 117, 216, 0)');
      $('.nav-link').css('color', 'rgb(255, 255, 255)');
      $('.navbar-logo').attr('src', 'images/dawg-white.png');
      $('#navbar').css('box-shadow', '0 0 0 0');
    }
  });


  $('body').scrollspy({ target: '#navbarNav' });



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  // Call the setHeight function on wondow resize
$(window).on( "resize", setHeight ).resize();

// ---------------------------------------------------------  Make the BG image cover the god damn screen

// This technique is pinched from: http://css-tricks.com/perfect-full-page-background-image/

$(window).load(function() {    

  var theWindow         = $(window),
      bg                = $(".hero-image"),
      aspectRatio       = bg.width() / bg.height();
                    
  function resizeBg() {
    
    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {

        bg.removeClass().addClass('hero-image-height');

        var marginLeft = bg.width()/2;

        bg.css({"margin-top": "0", "margin-left": -marginLeft});

    } else {

        bg.removeClass().addClass('hero-image-width');

        var marginTop = bg.height()/2;

        bg.css({"margin-left": "0", "margin-top": -marginTop});

    }
          
  }
                          
  theWindow.resize(resizeBg).trigger("resize");

});
});