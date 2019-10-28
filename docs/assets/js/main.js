$('.main-banner__content').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
});
$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: true,
	focusOnSelect: true
});

$('a[data-slide]').click(function (e) {
	e.preventDefault();
	var slideno = $(this).data('slide');
	$('.slider-nav').slick('slickGoTo', slideno - 1);
});
$('.main-banne-content__logos').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
});

// Menú fixed
$(window).scroll(function () {
	if ($(document).scrollTop() > 70 && ($(window).width() >= 0)) {
		$('.navbar-fixed-js').addClass('fixed-top');
		$('.nav-link').addClass('fixed-color');
		$('.btn-white').addClass('btn-blue');
		// $('.nav-top__header').addClass('nav-top__header--detele');
		// $('.hamburger-inner').addClass('js-hamburger');
		// $("#iso").addClass('img-size').attr('src', 'assets/img/Logo_CM.png').removeClass('scroll-up');

	} else {
		$('.navbar-fixed-js').removeClass('fixed-top');
		$('.nav-link').removeClass('fixed-color');
		$('.btn-white').removeClass('btn-blue');
		// $('.nav-top__header').removeClass('nav-top__header--detele');
		// $('.hamburger-inner').removeClass('js-hamburger');
		// $("#iso").removeClass('img-size').attr('src', 'assets/img/logo-color.png').removeClass('scroll-up');

	}
});