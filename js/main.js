//Textillate Options
$(function () {
$('.tlt').textillate({
  // the default selector to use when detecting multiple texts to animate
  selector: '.texts',

  // enable looping
  loop: true,

  // sets the minimum display time for each text before it is replaced
  minDisplayTime: 500,

  // sets the initial delay before starting the animation
  // (note that depending on the in effect you may need to manually apply
  // visibility: hidden to the element before running this plugin)
  initialDelay: 0,

  // set whether or not to automatically start animating
  autoStart: true,

  // custom set of 'in' effects. This effects whether or not the
  // character is shown/hidden before or after an animation
  inEffects: [],

  // custom set of 'out' effects
  outEffects: [ 'pulse' ],

  // in animation settings
  in: {
    // set the effect name
    effect: 'fadeInRightBig',

    // set the delay factor applied to each consecutive character
    delayScale: 2.5,

    // set the delay between each character
    delay: 220,

    // set to true to animate all the characters at the same time
    sync: false,

    // randomize the character sequence
    // (note that shuffle doesn't make sense with sync = true)
    shuffle: false,

    // reverse the character sequence
    // (note that reverse doesn't make sense with sync = true)
    reverse: false,

    // callback that executes once the animation has finished
    callback: function () {}
  },

  // out animation settings.
  out: {
    effect: 'pulse',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },

  // callback that executes once textillate has finished
  callback: function () {},

  // set the type of token to animate (available types: 'char' and 'word')
  type: 'word'
});
});

// When the user clicks on the link, open the Menu modal
$(document).ready(function() {
    $('#triggerMenuModal').click(function() {
        $('.modal').removeClass('hide');
        $(".modalHeader").html("<h3>Menu</h3>");
        $('.menuModalBody').removeClass('hide');
    });
});

// When the user clicks on <span> (x), close the modal
$(document).ready(function() {
    $('.closeModal').click(function() {
        $('.modal').addClass('hide');
        $('.menuModalBody').addClass('hide');
    });
});

//Generate a Google Map object for the locations link
      var map,
        initMap = function(){
        // Constructor creates a new map - only center and zoom are required.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 33.762909, lng: -84.3880},
          zoom: 13
        });
        var littleFivePoints = {lat: 33.7644, lng: -84.3496},
            lFivePoints = new google.maps.Marker({
          position: littleFivePoints,
          map: map,
          title: 'Little Five Points Store'
      }),
            midTown = {lat: 33.7833, lng: -84.3831},
            mTown = new google.maps.Marker({
          position: midTown,
          map: map,
          title: 'Midtown Store'
        });
    };

      // When the user clicks on the link, open the Locations modal
      $(document).ready(function() {
          $('#triggerLocationsModal').click(function() {
              $('.modal').removeClass('hide');
              $(".modalHeader").html("<h3>Locations</h3>");
              $('.locationsModalBody').removeClass('hide');
              initMap(); //initialize map after the div is displayed to avoid conflict loading blank map
          });
      });

      // When the user clicks on <span> (x), close the modal
      $(document).ready(function() {
          $('.closeModal').click(function() {
              $('.modal').addClass('hide');
              $('.locationsModalBody').addClass('hide');
          });
      });


// When the user clicks on the link, open the Specials modal
$(document).ready(function() {
    $('#triggerSpecialsModal').click(function() {
        $('.modal').removeClass('hide');
        $(".modalHeader").html("<h3>Specials</h3>");
        $('.specialsModalBody').removeClass('hide');
    });
});

// When the user clicks on <span> (x), close the modal
$(document).ready(function() {
    $('.closeModal').click(function() {
        $('.modal').addClass('hide');
        $('.specialsModalBody').addClass('hide');
    });
});

// When the user clicks on the link, open the Catering modal
$(document).ready(function() {
    $('#triggerCateringModal').click(function() {
        $('.modal').removeClass('hide');
        $(".modalHeader").html("<h3>Catering</h3>");
        $('.cateringModalBody').removeClass('hide');
    });
});

// When the user clicks on <span> (x), close the modal
$(document).ready(function() {
    $('.closeModal').click(function() {
        $('.modal').addClass('hide');
        $('.cateringModalBody').addClass('hide');
    });
});

// When the user clicks on the link, open the Careers modal
$(document).ready(function() {
    $('#triggerCareersModal').click(function() {
        $('.modal').removeClass('hide');
        $(".modalHeader").html("<h3>Careers</h3>");
        $('.careersModalBody').removeClass('hide');
    });
});

// When the user clicks on <span> (x), close the modal
$(document).ready(function() {
    $('.closeModal').click(function() {
        $('.modal').addClass('hide');
        $('.careersModalBody').addClass('hide');
    });
});

//Control Header Scroll Animations
$(document).on("scroll", function() {
    if ($(document).scrollTop() > 100 && winWidth > 645) {

        $("h1").removeClass("flipInX");
        $("h1").addClass("fadeOutUp");
        $("h1").css("opacity", "0");
        $("nav").addClass('translateUp');
        $(".navLogo").css("opacity", "1");
        $(".menuItem").css("margin", "1vh 3vw 1vh 3vw");
    } else if ($(document).scrollTop() > 100 && winWidth > 600) {

        $("h1").removeClass("flipInX");
        $("h1").addClass("fadeOutUp");
        $("h1").css("opacity", "0");
        $("nav").addClass('translateUp600');
        $(".navLogo").css("opacity", "1");
        $(".menuItem").css("margin", "1vh 3vw 1vh 3vw");
    } else if ($(document).scrollTop() > 100 && winWidth < 500){

        $("h1").removeClass("flipInX");
        $("h1").addClass("fadeOutUp");
        $("h1").css("opacity", "0");
        $("nav").addClass('translateUpMobile');
        $(".navLogo").css("opacity", "1");
        $(".menuItem").css("margin", "1vh 3vw 1vh 3vw");
    } else
    {
        $("h1").removeClass("fadeOutUp");
        $("h1").addClass("flipInX");
        $("h1").css("opacity", "1");
        $("nav").removeClass('translateUp');
        $("nav").removeClass('translateUpMobile');
        $(".navLogo").css("opacity", "0");
        $(".menuItem").css("margin", "1vh 2vw 1vh 2vw");
    }
});
var winWidth = $(window).width();

// Controls appearance of footer
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 80) {
        $("footer").addClass("animated");
        $("footer").css("height", "auto");
        $("footer").removeClass("slideOutDown");
        $("footer").addClass("slideInUp");
    } else {
        $("footer").removeClass("slideInUp");
        $("footer").addClass("slideOutDown");

        $("footer").removeClass("animated");
        $("footer").css("height", "2vh");
    }
});
