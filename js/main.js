"use strict";

$(document).ready(function () {
  // init custom select
  $('.common-select').select2({
    minimumResultsForSearch: Infinity
  });

  function fixedCalculator() {
    var fixed_calculator = $(document).find('.fixed-calculator'),
        calculator_offset = fixed_calculator.offset().top,
        calculator_height = fixed_calculator.outerHeight(),
        availableScreenHeight = window.screen.availHeight,
        not_fixed = calculator_offset - availableScreenHeight - calculator_height;
    $(window).scroll(function () {
      if ($(this).scrollTop() <= not_fixed) {
        fixed_calculator.addClass('fixed');
      } else {
        fixed_calculator.removeClass('fixed');
      }
    });
  }

  fixedCalculator();
});