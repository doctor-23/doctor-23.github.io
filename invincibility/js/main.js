$(document).ready(function() {

  // Бургер меню 

  $('.burgerMenu').on('click', function()  {
    $('.burgerMenu').toggleClass('open');
    $('.burgerMenu span').toggleClass('open');
    $('#header nav').toggleClass('scale');
  });


  if (window.matchMedia('(max-width: 991.99px)').matches) {
    $(document).mouseup(function (e) {
      var $target = $(e.target);
      if ($target.closest("#header nav").length == 0 && $target.closest("#header nav").length == 0) {
        $("#header nav").removeClass("scale");
        $(".burgerMenu span").removeClass("open");
        $(".burgerMenu").removeClass("open");
      }
    });
    
    $('.menu__item').on('click', function() {
      $("#header nav").removeClass("scale");
      $(".burgerMenu span").removeClass("open");
      $(".burgerMenu").removeClass("open");
    });
  }


  // скролл шапки

  function nav_scroll() {
		var $wrap = $('#header');
		if ($(window).scrollTop() > 1)
	  		$wrap.addClass('nav_scroll');
		else
	  		$wrap.removeClass('nav_scroll');
		}

	$(window).scroll(nav_scroll);
	nav_scroll();

  // слайдер главного экрана

  $('.coach-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    dots: false,
    arrows: true,
    prevArrow: '<a class = "arrow-left"><svg width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3.22577" y="7.14954" width="2" height="24.065" transform="rotate(-90 3.22577 7.14954)" fill="#E49A00"/><path d="M0.718995 6.14954C3.72712 6.64954 6.2339 9.64954 7.73796 11.6495L4.22848 6.14954L7.73797 0.649537C6.2339 2.64954 3.72713 5.64954 0.718995 6.14954Z" fill="#E49A00" stroke="#E49A00" stroke-linejoin="round"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="24.6793" y="5.1496" width="2" height="24.065" transform="rotate(90 24.6793 5.1496)" fill="#E49A00"/><path d="M27.1862 6.1496C24.178 5.6496 21.6713 2.6496 20.1672 0.649597L23.6767 6.1496L20.1672 11.6496C21.6713 9.6496 24.178 6.6496 27.1862 6.1496Z" fill="#E49A00" stroke="#E49A00" stroke-linejoin="round"/></svg></a>',
    swipe: true,
    responsive: [
      {
        breakpoint: 575.98,
        settings: {
          dots: true,
          arrows: false,
          dotsClass: 'dots-slider'
        }
      }
    ]
  });

  // слайдер участников

  $('.visitors__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    dots: false,
    prevArrow: '<a class = "arrow-left"><svg width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3.22577" y="7.14954" width="2" height="24.065" transform="rotate(-90 3.22577 7.14954)" fill="#E49A00"/><path d="M0.718995 6.14954C3.72712 6.64954 6.2339 9.64954 7.73796 11.6495L4.22848 6.14954L7.73797 0.649537C6.2339 2.64954 3.72713 5.64954 0.718995 6.14954Z" fill="#E49A00" stroke="#E49A00" stroke-linejoin="round"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="28" height="13" viewBox="0 0 28 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="24.6793" y="5.1496" width="2" height="24.065" transform="rotate(90 24.6793 5.1496)" fill="#E49A00"/><path d="M27.1862 6.1496C24.178 5.6496 21.6713 2.6496 20.1672 0.649597L23.6767 6.1496L20.1672 11.6496C21.6713 9.6496 24.178 6.6496 27.1862 6.1496Z" fill="#E49A00" stroke="#E49A00" stroke-linejoin="round"/></svg></a>',
    swipe: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 769.98,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
          dotsClass: 'dots-slider'
        }
      }
    ]
  });

  // Блок темы занятий кнопка "показать все темы"

  $(function() {
    $(".themes__list").each(function() {
      let $list = $(this).find("li");
      if( $list.length <= 6 ) return;

      $list.slice(6).hide();    
      $(this).append('<button class="see-more pointer upper">показать все темы</button>');
    });
    
    $(".themes__list").on("click", ".see-more", function() {
      $(this).siblings("li").show().end().remove();    
    });
  });

  $('#btn-answer').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(215,	function(){
      $('.popup-form') 
      .css('display', 'block')
      .animate({opacity: 1}, 100);
    });
  });
  
  $('#modal_close, #overlay').click( function(){
    $('.popup-form').animate({opacity: 0}, 100, function(){
      $(this).css('display', 'none');
      $('#overlay').fadeOut(215);
    });
  });

  // плавный скролл

  $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });

  // кнопка возврата наверх из футера

  $(function(){
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop: 0}, 600);
      return false;
    });
  });

  // Анимация сообщения о результате
  var showmsg = new TimelineMax();
  showmsg.add(TweenMax.to(".msg", 3, {opacity: 1,y: -40,ease: Expo.easeOut}));
  showmsg.add(TweenMax.to(".msg", 5, {opacity: 0,y: 0,ease: Expo.easeOut,delay: 2}));
  showmsg.pause();

  // Анимация плашки слова "подождите"
  var loadanim = TweenLite.to(".loading", 1, {autoAlpha: 0.8});
  loadanim.pause();

  // Отправка данных на сервер
  $('#register__form').trigger('reset');

  // Отправка формы регистрации

  $(function() {
    'use strict';
    $('#register__form').on('submit', function(e) {
      $('.msg').removeClass('error success');
      $('input').removeClass('inputerror');
      loadanim.play();
      e.preventDefault();
      $.ajax({
        url: 'php/send.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: new FormData(this),
        success: function(msg) {
          console.log(msg);
          if (msg == 'ok') {
            $('#register__form').trigger('reset');
            $('.msg').text('Ваша заявка успешно отпралена. Спасибо, за обращение! Если письмо не пришло, то проверьте папку СПАМ!').addClass('success');
            showmsg.restart();loadanim.duration(1).reverse();
          } else {
            if (msg == 'mailerror') {
              $("#reg_email").addClass('inputerror');
            }
            $('.msg').text('Ошибка. Сообщение не отправлено. Попробуйте снова.').addClass('error');
            showmsg.restart();loadanim.duration(1).reverse();
          }
        }
      });
    });
  });

  // Отправка popup формы

  $(function() {
    'use strict';
    $('#ask__form').on('submit', function(e) {
      $('.msg').removeClass('error success');
      $('input').removeClass('inputerror');
      loadanim.play();
      e.preventDefault();
      $.ajax({
        url: 'php/sendAsk.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: new FormData(this),
        success: function(msg) {
          console.log(msg);
          if (msg == 'ok') {
            $('#ask__form').trigger('reset');
            $('.msg').text('Ваша заявка успешно отпралена. Спасибо, за обращение! Если письмо не пришло, то проверьте папку СПАМ!').addClass('success');
            showmsg.restart();loadanim.duration(1).reverse();
          } else {
            if (msg == 'mailerror') {
              $("#ask_mail").addClass('inputerror');
            }
            $('.msg').text('Ошибка. Сообщение не отправлено. Попробуйте снова.').addClass('error');
            showmsg.restart();loadanim.duration(1).reverse();
          }
        }
      });
    });
  });
});