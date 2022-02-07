"use strict";

function banText() {
  var banText = parseFloat(event.key);

  if (isNaN(banText)) {
    event.preventDefault();
  } else {
    console.log(banText);
  }
}

$(document).ready(function () {
  // init custom select
  function selectInit(el) {
    $(el).select2({
      minimumResultsForSearch: Infinity
    });
  }

  selectInit('.common-select');

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
  var sight_brands = [{
    name: 'Bushnell',
    models: [{
      name: 'HDMR Elite Tactical 3.5-21x50 34mm',
      value: '60'
    }]
  }, {
    name: 'Schmidt & Bender',
    models: [{
      name: '12-50x56 PM II 34mm',
      value: '62'
    }, {
      name: '3-12x50 PM II 34mm',
      value: '57'
    }, {
      name: '3-20x50 PM II 34mm',
      value: '57'
    }, {
      name: '4-16x42 PM II 34mm',
      value: '50'
    }, {
      name: '4-16x50 PM II 34mm',
      value: '57'
    }, {
      name: '5-25x56 PM II 34mm',
      value: '62'
    }]
  }, {
    name: 'Nightforce',
    models: [{
      name: 'ATACR 5-25x56 34mm',
      value: '65'
    }, {
      name: 'NXS 12-42x56 30mm',
      value: '65'
    }, {
      name: 'NXS 3.5-15x50 30mm',
      value: '59'
    }, {
      name: 'NXS 3.5-15x56 30mm',
      value: '65'
    }, {
      name: 'NXS 5.5-22x50 30mm',
      value: '59'
    }, {
      name: 'NXS 5.5-22x56 30mm',
      value: '65'
    }, {
      name: 'NXS 8-32x56 30mm',
      value: '65'
    }, {
      name: 'NXS 8-32x56 30mm',
      value: '65'
    }]
  }, {
    name: 'Premier Reticles',
    models: [{
      name: '3-15x50 Tactical 34mm',
      value: '57'
    }, {
      name: '5-25x56 Tactical 34mm',
      value: '62'
    }]
  }, {
    name: 'Steiner',
    models: [{
      name: 'Military 5-25x56 34mm',
      value: '61.98'
    }]
  }, {
    name: 'US Optics',
    models: [{
      name: 'ER-25 5-25x58 34mm',
      value: '67.3'
    }, {
      name: 'MR-10 1.8-10x37 30mm',
      value: '47.37'
    }, {
      name: 'LR-17 3.2-17x44 30mm',
      value: '56.5'
    }]
  }, {
    name: 'Kahles',
    models: [{
      name: 'K624i 6-24x56 34mm',
      value: '61.72'
    }]
  }, {
    name: 'Leupold',
    models: [{
      name: 'Mark 4 ER/T 6.5-20x50 M5 30mm',
      value: '58.4'
    }, {
      name: 'Mark 4 ER/T 6.5-20x50 M5A2 34mm',
      value: '58.4'
    }, {
      name: 'Mark 4 ER/T 8.5-25x50 30mm',
      value: '58.4'
    }, {
      name: 'Mark 6 3-18x44 34mm',
      value: '53.34'
    }, {
      name: 'Mark 4 ER/T 4.5-14x50 30mm',
      value: '58.4'
    }]
  }, {
    name: 'Vortex',
    models: [{
      name: 'Viper PST Gen II 5-25x50 FFP 30mm',
      value: '58.42'
    }]
  }, {
    name: 'Athlon Optics',
    models: [{
      name: 'Ares ETR 4.5x30x56 APRS1 FFP IR 34mm',
      value: '61'
    }, {
      name: 'BTR 4.5-29x56 APLR FFP IR 34mm',
      value: '61'
    }]
  }],
      ring_brands = [{
    name: 'Vortex',
    models: [{
      name: 'Max-50 Ultra High 1.45" 30mm',
      value: '36.83'
    }, {
      name: '1 Piece Mount 1.49" 34mm',
      value: '37.846'
    }, {
      name: '1 Piece Mount Extended 1.49" 34mm',
      value: '37.846'
    }, {
      name: 'Ultra High (AR-15 flat top) 1.4" 30mm',
      value: '35.56'
    }, {
      name: 'Extra High (AR-10 & SR-25) 1.25" 30mm',
      value: '31.75'
    }, {
      name: 'Medium High 1.0" 30mm',
      value: '25.4'
    }, {
      name: 'High 1.125" 30mm',
      value: '28.575'
    }, {
      name: 'USMC DMR 1.031" 30mm',
      value: '26.1874'
    }, {
      name: 'USMC SASR 1.125" 30mm',
      value: '28.575'
    }, {
      name: 'USN EBR Mk14 Mod 0 1.250" 30mm',
      value: '28.575'
    }, {
      name: 'Medium 1 Piece Ring Mount .885" 30mm',
      value: '22.479'
    }, {
      name: 'Medium .885" 30mm',
      value: '22.479'
    }, {
      name: 'Standard .823" 30mm',
      value: '20.9042'
    }, {
      name: 'USMC M40A3 .886" 30mm',
      value: '22.5044'
    }, {
      name: 'AR Series 1.257" 34mm',
      value: '31.9278'
    }, {
      name: '1" 34mm',
      value: '25.4'
    }, {
      name: '1.375" 34mm',
      value: '34.925'
    }, {
      name: '1.125" 34mm',
      value: '28.575'
    }, {
      name: '1.49" 34mm',
      value: '37.846'
    }, {
      name: 'USMC M107 (SASR) 1.49" 34mm',
      value: '37.846'
    }, {
      name: 'USMC M40A3 1" 34mm',
      value: '25.4'
    }, {
      name: 'Medium 1.125" 35mm',
      value: '28.575'
    }, {
      name: 'Extra High 1.375" 35mm',
      value: '34.925'
    }, {
      name: 'Max-50 Standard 0.823" 30mm',
      value: '20.9042'
    }, {
      name: 'Max-50 Standard 1" 34mm',
      value: '25.4'
    }, {
      name: 'Max-50 High 1.125" 30mm',
      value: '28.575'
    }]
  }, {
    name: 'Spuhr',
    models: [{
      name: 'SP-4002 Picatinny 0MIL/0MOA 1.46" 34mm',
      value: '37'
    }, {
      name: 'SP-3001 Picatinny 0MIL/0MOA 1.18" 30mm',
      value: '30'
    }, {
      name: 'SP-3601 Picatinny 6MIL/20.6MOA 1.18"  30mm',
      value: '30'
    }, {
      name: 'SP-4602 Picatinny 6MIL/20.6MOA 1.46"  34mm',
      value: '37'
    }, {
      name: 'SP-4802 Picatinny 13MIL/44.4MOA 1.46"  34mm',
      value: '37'
    }, {
      name: 'SP-4902 Picatinny 9MIL/30MOA 1.5"  34mm',
      value: '38'
    }, {
      name: 'SP-4001 Picatinny 0MIL/0MOA 1.18" 30mm',
      value: '30'
    }, {
      name: 'SP-4601 Picatinny 6MIL/20.6MOA 1.18" 30mm',
      value: '30'
    }, {
      name: 'SP-4801 Picatinny 13MIL/44.4MOA 1.18" 30mm',
      value: '30'
    }]
  }, {
    name: 'Seekins',
    models: [{
      name: '1.45" AR High 30mm',
      value: '36.83'
    }, {
      name: '1.26" X High 30mm',
      value: '32.004'
    }, {
      name: '1" tube, 0.76" 25.4mm',
      value: '19.3'
    }, {
      name: '.82" Low 30mm',
      value: '20.828'
    }, {
      name: '.87" Medium 30mm',
      value: '22.098'
    }, {
      name: '.92" Medium High 30mm',
      value: '23.368'
    }, {
      name: '.97" High 30mm',
      value: '24.638'
    }, {
      name: '.92" Low 34mm',
      value: '23.368'
    }, {
      name: '1.00" High 34mm',
      value: '25.4'
    }, {
      name: '1.25" X High 34mm',
      value: '31.75'
    }, {
      name: '1.45" AR High 34mm',
      value: '36.83'
    }, {
      name: '.95" Low 35mm',
      value: '24.13'
    }, {
      name: '1.0" High 35mm',
      value: '25.4'
    }, {
      name: '1.25" X High 35mm',
      value: '31.75'
    }]
  }];
  $('#sight_brand').on('change', function () {
    var that = $(this),
        selected = that.find('option:selected').val(),
        sight_models_select = $('#sight_model'),
        option_selected = '<option value="" selected disabled>--Выберите--</option>',
        arrLength = sight_brands.length;

    for (var i = 0; i < arrLength; i++) {
      if (selected === sight_brands[i].name) {
        var models_length = sight_brands[i].models.length;
        sight_models_select.children().remove();
        sight_models_select.append(option_selected);

        for (var j = 0; j < models_length; j++) {
          var option = '<option value="' + sight_brands[i].models[j].value + '">' + sight_brands[i].models[j].name + '</option>';
          sight_models_select.append(option);
        } // selectInit('#sight_model');

      }
    }
  });
  $('#ring_brand').on('change', function () {
    var that = $(this),
        selected = that.find('option:selected').val(),
        sight_models_select = $('#ring_model'),
        option_selected = '<option value="" selected disabled>--Выберите--</option>',
        arrLength = ring_brands.length;

    for (var i = 0; i < arrLength; i++) {
      if (selected === ring_brands[i].name) {
        var models_length = ring_brands[i].models.length;
        sight_models_select.children().remove();
        sight_models_select.append(option_selected);

        for (var j = 0; j < models_length; j++) {
          var option = '<option value="' + ring_brands[i].models[j].value + '">' + ring_brands[i].models[j].name + '</option>';
          sight_models_select.append(option);
        } // selectInit('#sight_model');

      }
    }
  });
});