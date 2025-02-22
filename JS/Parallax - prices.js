
$(window).scroll(function() {
    parallax();
  })

function parallax() {

    var wScroll = $(window).scrollTop()-2100;
    
    $('.parallax--bg').css('background-position', 'center '+(wScroll*0.2)+'px')
}