$(window).on('scroll', function(){
	if($(window).scrollTop() > 500){
		$('nav').addClass('navScroll');
	}
	else {
		$('nav').removeClass('navScroll');
	}
})