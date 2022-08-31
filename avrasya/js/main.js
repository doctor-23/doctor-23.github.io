$(document).ready(function() {

	$('.burgerMenu').on("click", function(){ 
		$(this).toggleClass('open');
		$('#menu').toggleClass('menu-scale');
	});

	$(".item__gallery").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay : 300,
		mainClass : 'mfp-fade'
	});

	$('.slider-results').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav',
		draggable: false,
		prevArrow: '<div class = "arrow-left"></div>',
		nextArrow: '<div class = "arrow-right"></div>'
	});

	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-results',
		dots: false,
		arrows: false,
		variableWidth: true,
		speed: 150
	});

	$(function(){
		$(".before-after").twentytwenty();
	});

	$('video__item a').on('click', function() {
		$('head').html('<link rel="stylesheet" href="css/jquery.fancybox.min.css">')
	});

	$('.accordion').accordion({
		multiExpand: true
	});

	$('.show-more').on('click' , function() {
		$('.video__item2, .video__item3').toggle();
		if (!$(this).data('status')) {
	  		$(this).html('Скрыть');
	  		$(this).data('status', true);
		}
		else {
	  		$(this).html('Показать еще');
	  		$(this).data('status', false);
		}
	})

	$('button.btn-more').click( function(event){
	    event.preventDefault();
	    $('#overlay').fadeIn(215,	function(){
	      $('#modal') 
	      .css('display', 'block')
	      .animate({opacity: 1}, 100);
	    });
  	});

	$('.btn-cost').click( function(event){
	    event.preventDefault();
	    $('#overlay').fadeIn(215,	function(){
	      $('#modal') 
	      .css('display', 'block')
	      .animate({opacity: 1}, 100);
	    });
  	});

	$('button.footer-btn').click( function(event){
	    event.preventDefault();
	    $('#overlay').fadeIn(215,	function(){
	      $('#modal') 
	      .css('display', 'block')
	      .animate({opacity: 1}, 100);
	    });
  	});

	$('#modal__close, #overlay').click( function(){
	    $('#modal').animate({opacity: 0}, 100, function(){
	      $(this).css('display', 'none');
	      $('#overlay').fadeOut(215);
	    });
  	});

  	$('.btn.btn-more, .group__btn.btn-one, .group__btn.btn-two, .btn-cost, .footer-btn').click(function(){
  		var parent = $(this).attr('data-parent');
  		var modal = $(this).attr('data-target')
  		$(modal).find('input[name=target]').val(parent);
  	});

  	$(".all-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".all-form").trigger("reset");
		});
		return false;
	});
});