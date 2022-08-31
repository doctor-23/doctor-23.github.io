$(document).ready(function() {

	// init slick-slider главный экран

	$('.slider_first').slick({
		arrows: false,
		dots: true
	});

	// Бургер меню

	$('.burgerMenu').on('click', function(){
		$(this).toggleClass('open');
		$('.dropDown_menu_wrapper').toggleClass('menu-scale');
		$('.mob-header').toggleClass('static');
	});

	// выпадающее меню профиля

	$('.action_profile').on('click', function() {
		$('.profile_menu').toggleClass('scale');
	});

	// то что закрывается по клику по любой области
	
	$(document).mouseup(function (e) {
		var $target = $(e.target);
		if ($target.closest(".profile_menu").length == 0 && $target.closest(".action_profile").length == 0) {
			$(".profile_menu").removeClass("scale");
		}
		if ($target.closest(".dropDown_menu_wrapper").length == 0 && $target.closest(".burgerMenu").length == 0) {
			$(".dropDown_menu_wrapper").removeClass("menu-scale");
			$(".burgerMenu").removeClass("open");
		}
	});

	// конец кликов по любой области;)

	$('.sub-menu_item, .nav-menu_item').accordion({
		"transitionSpeed": 400
	});

	$('.filter__dropdown').accordion({
		"transitionSpeed": 400
	});

	// Ползунок цены на странице каталога

	var $range = $(".js-range-slider"),
		$inputFrom = $(".js-input-from"),
		$inputTo = $(".js-input-to"),
		instance,
		min = 0,
		max = 1531,
		from = 0,
		to = 0;

	$range.ionRangeSlider({
		skin: "round",
		type: "double",
		min: min,
		max: max,
		from: 0,
		to: 1531,
		onStart: updateInputs,
		onChange: updateInputs
	});
	instance = $range.data("ionRangeSlider");

	function updateInputs(data) {
		from = data.from;
		to = data.to;

		$inputFrom.prop("value", from);
		$inputTo.prop("value", to);
	}

	$inputFrom.on("input", function () {
		var val = $(this).prop("value");

		// validate
		if (val < min) {
			val = min;
		} else if (val > to) {
			val = to;
		}

		instance.update({
			from: val
		});
	});

	$inputTo.on("input", function () {
		var val = $(this).prop("value");

		// validate
		if (val < from) {
			val = from;
		} else if (val > max) {
			val = max;
		}

		instance.update({
			to: val
		});
	});

	// Конец ползунка

	// Вызов фильтра в мобильной версси на странице каталога

	$('.catalog__filter').on('click', function () {
		$('.filter-mob').toggleClass('scale');
	});

	// Конец вызова фильтра

	// init slick-slider страница каталога

	// $(".slider__photo").slick({
  //   // slidesToShow: 1,
  //   // slidesToScroll: 1,
  //   arrows: true,
  //   fade: true,
  //   asNavFor: ".slider__nav",
  //   prevArrow: '<div class = "arrow-left"></div>',
  //   nextArrow: '<div class = "arrow-right"></div>'
  // });

	// $('.slider__nav').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.slider__photo',
	// 	// focusOnSelect: true,
	// 	vertical: true,
	// 	centerMode: true
	// });

	$(function () {

		(function quantityProducts() {
			var $quantityArrowMinus = $(".quantity-arrow-minus");
			var $quantityArrowPlus = $(".quantity-arrow-plus");
			var $quantityNum = $(".quantity-num");

			$quantityArrowMinus.click(quantityMinus);
			$quantityArrowPlus.click(quantityPlus);

			function quantityMinus() {
				if ($quantityNum.val() > 1) {
					$quantityNum.val(+$quantityNum.val() - 1);
				}
			}

			function quantityPlus() {
				$quantityNum.val(+$quantityNum.val() + 1);
			}
		})();

	});

	// клик по иконке добавить в избранное на странице карточки товара

	$('.favorite-click').on('click', function() {
			$(".favorite-click .action_favorite").toggleClass(
        "action_favorite-active"
      );
	})

	// модальное окно "добавлено в корзину"

	$(".add-btn").click(function (event) {
    event.preventDefault();
    $("#overlay").fadeIn(215, function () {
      $("#popup-added").css("display", "block").animate({ opacity: 1 }, 100);
    });
  });

	$(".close, #overlay").click(function () {
		$("#popup-added, #popup-reg, #popup-login").animate({ opacity: 0 }, 100, function () {
      $(this).css("display", "none");
      $("#overlay").fadeOut(215);
    });
	});
	
	// модальное окно регситрации и входа

	$(".profile_menu li:first-child a").click(function (event) {
		event.preventDefault();
		$("#overlay").fadeIn(215, function () {
			$("#popup-login").css("display", "block").animate({ opacity: 1 }, 100);
		});
	});

	$(".profile_menu li:last-child a").click(function (event) {
		event.preventDefault();
		$("#overlay").fadeIn(215, function () {
			$("#popup-reg").css("display", "block").animate({ opacity: 1 }, 100);
		});
	});

	$(".popup-log-reg .login-first-text").click(function (event) {
		event.preventDefault();
		$("#overlay").fadeIn(215, function () {
			$("#popup-reg").css("display", "block").animate({ opacity: 1 }, 100);
		});

		$("#popup-login").animate({ opacity: 0 }, 100, function () {
			$(this).css("display", "none");
		});
	});

	$(".popup-log-reg .login-last-text").click(function (event) {
		event.preventDefault();
		$("#overlay").fadeIn(215, function () {
			$("#popup-login").css("display", "block").animate({ opacity: 1 }, 100);
		});

		$("#popup-reg").animate({ opacity: 0 }, 100, function () {
			$(this).css("display", "none");
		});
	});

	// информация о профиле поле с поролем

	$('#make-choice').click(function(){
		if ($(this).is(':checked')){
			$('.block-pass').show();
		} else {
			$('.block-pass').hide();
		}
	});

	// поиск мобильная и планшетная версии

	$('.fa-search').click(function(){
		$('#header .search').addClass('active-search');
	});

	$('.fa-search-back').click(function(){
		$('#header .search').removeClass('active-search');
	});

	$('.fa-search, .fa-search-back').click(function() {
		if ($('#header .search').hasClass('active-search')){
			$('#header .mob-header').css('position', 'static');
		} else {
			$('#header .mob-header').css('position', 'relative');
		}
	});
});


