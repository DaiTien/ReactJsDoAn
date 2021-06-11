jQuery(document).ready(function($){
	$('.open-close').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.level0').find('.submenu').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	$('.open-close-1').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.level1').find('.submenu1').stop().slideToggle();
		$(this).toggleClass('active')
		return false;
	});
	/* MOBILE */
	$('.navbar-toggle').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.main-menu').find('#mobile').stop().slideToggle();
		return false;
	});
	$('#best-product-slider .slider-items').owlCarousel({
		autoPlay:4000,
		navigation:true,
		navigationText : ["<a data-slide=\"prev\"><i class=\"fa fa-angle-double-left\"></i></a>","<a data-slide=\"next\"><i class=\"fa fa-angle-double-right\"></i></a>"],
		pagination:false,
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 2, //10 items above 1000px browser width
		itemsDesktop : [1000,2], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [768,2], //2 items between 600 and 0
		itemsMobile : [540,1] // itemsMobile disabled - inherit from itemsTablet option
	});
	$('#sale-product-slider .slider-items').owlCarousel({
		autoPlay:4000,
		navigation:true,
		navigationText : ["<a data-slide=\"prev\"><i class=\"fa fa-angle-double-left\"></i></a>","<a data-slide=\"next\"><i class=\"fa fa-angle-double-right\"></i></a>"],
		pagination:false,
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 3, //10 items above 1000px browser width
		itemsDesktop : [1000,2], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [768,2], //2 items between 600 and 0
		itemsMobile : [540,1] // itemsMobile disabled - inherit from itemsTablet option
	});
	$('#gif-product-slider .slider-items').owlCarousel({
		autoPlay:4000,
		navigation:true,
		navigationText : ["<a data-slide=\"prev\"><i class=\"fa fa-angle-double-left\"></i></a>","<a data-slide=\"next\"><i class=\"fa fa-angle-double-right\"></i></a>"],
		pagination:false,
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 3, //10 items above 1000px browser width
		itemsDesktop : [1000,2], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // betweem 900px and 601px
		itemsTablet: [768,2], //2 items between 600 and 0
		itemsMobile : [540,1] // itemsMobile disabled - inherit from itemsTablet option
	});
});