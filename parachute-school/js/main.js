var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});

$(document).ready(function() {

	$('.burgerMenu').on("click", function(){ 
		$(this).toggleClass('open');
		$('#nav-menu').toggleClass('scale');
  });

  $('#nav-menu ul li').click( function(){
    $('.burgerMenu').toggleClass('open');
    $('#nav-menu').toggleClass('scale');
  });

    $(document).mouseup(function (e){
      var div = $("#nav-menu");
      var burger = $(".burgerMenu");
      if (!div.is(e.target)
          && div.has(e.target).length === 0) { 
        div.removeClass('scale');
        burger.removeClass('open');
      }
    });

  // плавный скролл

  $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
      e.preventDefault();
      var t = 1000;
      var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
      $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
  });

  if (window.matchMedia('(max-width: 767.99px)').matches)
    {
      $('.list__block img').wrap('<div class="block__item-1"></div>');
      $('.list__block:nth-child(2) img').after( $( ".list__block:nth-child(2) .period" ) );
      $('.list__block:nth-child(4) img').after( $( ".list__block:nth-child(4) .period" ) );
      $('.list__block:nth-child(6) img').after( $( ".list__block:nth-child(6) .period" ) );
      $('.list__block:nth-child(8) img').after( $( ".list__block:nth-child(8) .period" ) );
      $('.list__block:nth-child(10) img').after( $( ".list__block:nth-child(10) .period" ) );
      $('.list__block h4').wrap('<div class="block__item-2"></div>');
      $('.list__block:nth-child(2) h4').after( $( ".list__block:nth-child(2) p" ) );
      $('.list__block:nth-child(4) h4').after( $( ".list__block:nth-child(4) p" ) );
      $('.list__block:nth-child(6) h4').after( $( ".list__block:nth-child(6) p" ) );
      $('.list__block:nth-child(8) h4').after( $( ".list__block:nth-child(8) p" ) );
      $('.list__block:nth-child(10) h4').after( $( ".list__block:nth-child(10) p" ) );

      $('.partners a.partner-1').before( $( ".partners a.partner-4" ) );
      $('.partners a.partner-2').after( $( ".partners a.partner-1" ) );

    }

  if (window.matchMedia('(max-width: 449.99px)').matches) {
      $('#nav-menu ul li:last-child').after( $( '#header a[href="#mailpoet_form_1"]' ) );
      $( '#header a[href="#mailpoet_form_1"]' ).wrap('<li></li>')
  }

  // Маска для input

	$(function () {
		$('input[title="Телефон"]').inputmask({
	        mask: "+7 (X99) 999-99-99",
	        definitions: {
            'X': {
                validator: "9",
                placeholder: "9"
            }
	        }
	    });
    });
});