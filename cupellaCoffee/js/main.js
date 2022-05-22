$(document).ready(function(){

  $('.menuBurger').on('click', function(){
    
    $('.menu').slideToggle(300, function(){
      
      if($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });

  $('.slider').bxSlider();

  $('#click-overlay').on("click", function(){ 
        $('.overlay-slide').toggle();
        $('#click-overlay.animated').toggleClass('pulse');
    });

  $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });


});

// Анимация сообщения о результате
var showmsg = new TimelineMax();
showmsg.add(TweenMax.to(".msg", 0.7, {opacity: 1,y: -40,ease: Expo.easeOut}));
showmsg.add(TweenMax.to(".msg", 0.7, {opacity: 0,y: 0,ease: Expo.easeOut,delay: 2}));
showmsg.pause();

// Анимация плашки слова "подождите"
var loadanim = TweenLite.to(".loading", 1, {autoAlpha: 0.8});
loadanim.pause();

// Отправка данных на сервер
$('#form').trigger('reset');
$(function() {
  'use strict';
  $('#form').on('submit', function(e) {
    $('.msg').removeClass('error success');
    $('input').removeClass('inputerror');
    loadanim.play();
    e.preventDefault();
    $.ajax({
      url: 'send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(this),
      success: function(msg) {
        console.log(msg);
        if (msg == 'ok') {
          $('#form').trigger('reset');
          $('.msg').text('Ваша заявка успешно отпралена. Спасибо, за обращение! Если письмо не пришло, то проверьте папку СПАМ!').addClass('success');
          showmsg.restart();loadanim.duration(1).reverse();
        } else {
          if (msg == 'mailerror') {
            $("#form_email").addClass('inputerror');
          }
          $('.msg').text('Ошибка. Сообщение не отправлено. Попробуйте снова.').addClass('error');
          showmsg.restart();loadanim.duration(1).reverse();
        }
      }
    });
  });
});

if (window.matchMedia('(max-width: 767.98px)').matches)
  {
    $('.menuBurger').on('click', function(){
  
      $('.contact').slideToggle(300, function(){
    
        if($(this).css('display') === 'none'){
        $(this).removeAttr('style');
        }
      });
    });
  };

$(document).mouseup(function (e) {
  if (window.matchMedia('(max-width: 991.98px)').matches)
    {
      var container = $(".menu, .contact");
        if (container.has(e.target).length === 0){
            container.hide(); 
      }
    }
});

if (window.matchMedia('(max-width: 991.98px)').matches)
    {
        $('.menu a').on("click", function(){ 
            $('.menu, .contact').toggle();
        });
    };