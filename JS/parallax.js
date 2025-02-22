
$(window).scroll(function() {
    parallax();
  })

function parallax() {

    var wScroll = $(window).scrollTop()-1100;
    
    $('.parallax--bg').css('background-position', 'center '+(wScroll*0.1)+'px')
}