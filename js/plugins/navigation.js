

$( window ).resize(function() {
  checkSize();
});


function checkSize() {
	if ($(window).width() < 669) {
	   $('nav').removeClass('active-nav-tablet');
	}
}

$(function() {
	$('.tablet-bars').click(function(){
    $('nav').toggleClass('active-nav-tablet');
	});

	$('.mobile-bars').click(function(){
	    $('nav').toggleClass('active-nav-mobile');
	});

	checkSize();
});