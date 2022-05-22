$(document).ready(function() {

  // слайдер главного экрана

  $('.bg-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    dots: false,
		prevArrow: '<a class = "arrow-left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.204123 9.50852C0.0734844 9.63916 0 9.81879 0 10.0025C0 10.1903 0.0734844 10.3658 0.204123 10.4965L5.82568 16.118C6.0992 16.3916 6.54419 16.3916 6.81772 16.118C7.09124 15.8445 7.09124 15.3995 6.81772 15.126L2.38824 10.7047H19.2978C19.6857 10.7047 20 10.3903 20 10.0025C20 9.61467 19.6857 9.3044 19.2978 9.3044H2.38824L6.81364 4.87492C7.08716 4.60139 7.08716 4.1564 6.81364 3.88288C6.54011 3.60935 6.09512 3.60935 5.8216 3.88288L0.204123 9.50852Z" fill="black"/></svg></a>',
    nextArrow: '<a class = "arrow-right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7959 10.4915C19.9265 10.3608 20 10.1812 20 9.9975C20 9.8097 19.9265 9.63416 19.7959 9.50352L14.1743 3.88196C13.9008 3.60843 13.4558 3.60843 13.1823 3.88196C12.9088 4.15548 12.9088 4.60047 13.1823 4.874L17.6118 9.29531L0.702183 9.29531C0.314349 9.29531 5.86834e-07 9.60966 5.52929e-07 9.9975C5.19023e-07 10.3853 0.314349 10.6956 0.702183 10.6956L17.6118 10.6956L13.1864 15.1251C12.9128 15.3986 12.9128 15.8436 13.1864 16.1171C13.4599 16.3906 13.9049 16.3906 14.1784 16.1171L19.7959 10.4915Z" fill="black"/></svg></a>',
    swipe: true,
    responsive: [
      {
        breakpoint: 769.99,
        settings: {
          dots: true,
          arrows: false,
          dotsClass: 'dots-slider'
        }
      }
    ]
  });

  // слайдер товаров

  $('.product__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    speed: 300,
    draggable: false,
    dots: false,
    prevArrow: '<a class = "arrow-left product-arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.204123 9.50852C0.0734844 9.63916 0 9.81879 0 10.0025C0 10.1903 0.0734844 10.3658 0.204123 10.4965L5.82568 16.118C6.0992 16.3916 6.54419 16.3916 6.81772 16.118C7.09124 15.8445 7.09124 15.3995 6.81772 15.126L2.38824 10.7047H19.2978C19.6857 10.7047 20 10.3903 20 10.0025C20 9.61467 19.6857 9.3044 19.2978 9.3044H2.38824L6.81364 4.87492C7.08716 4.60139 7.08716 4.1564 6.81364 3.88288C6.54011 3.60935 6.09512 3.60935 5.8216 3.88288L0.204123 9.50852Z" fill="white"/></svg></a>',
    nextArrow: '<a class = "arrow-right product-arrow"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.7959 10.4915C19.9265 10.3608 20 10.1812 20 9.9975C20 9.8097 19.9265 9.63416 19.7959 9.50352L14.1743 3.88196C13.9008 3.60843 13.4558 3.60843 13.1823 3.88196C12.9088 4.15548 12.9088 4.60047 13.1823 4.874L17.6118 9.29531L0.702183 9.29531C0.314349 9.29531 5.86834e-07 9.60966 5.52929e-07 9.9975C5.19023e-07 10.3853 0.314349 10.6956 0.702183 10.6956L17.6118 10.6956L13.1864 15.1251C12.9128 15.3986 12.9128 15.8436 13.1864 16.1171C13.4599 16.3906 13.9049 16.3906 14.1784 16.1171L19.7959 10.4915Z" fill="white"/></svg></a>',
    slide: '.slider__item',
    swipe: true,
    responsive: [
      {
        breakpoint: 1320.99,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992.99,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769.99,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 568.99,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          dotsClass: 'dots-slider'
        }
      }
    ]
  });

  // настройки выпадающего меню

  $('.burgerMenu').on("click", function(){ 
		$(this).toggleClass('open');
		$('.burgerMenu-wrapper').toggleClass('scale');
  });

  $('.arrow-link-wrapper').on("click", function(){ 
		$('.sub-menu').addClass('sub-menu__scale');
  });

  $('.item-back').on("click", function(){ 
    $('.sub-menu').removeClass('sub-menu__scale');
  });

  $('.search-icon').on("click", function(){ 
    $('.search-wrapper').toggleClass('search-scale');
  });
});