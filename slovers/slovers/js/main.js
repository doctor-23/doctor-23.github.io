"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function banText(event) {
  var banText = parseFloat(event.key);

  if (isNaN(banText)) {
    event.preventDefault();
  }
}

function getStyle(elem) {
  if (window.getComputedStyle) return getComputedStyle(elem, null);else return elem.currentStyle;
}

var removeSpaces = function removeSpaces(str) {
  return str.replace(/\s+/g, '');
};

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
} // функция для сортировки массивов


function customSelect(container, title, content, label, radio, show) {
  document.querySelectorAll(container).forEach(function (item) {
    var labelHeight = item.querySelector(label).offsetHeight;
    item.querySelector(content).style.maxHeight = labelHeight * show + 16 + 'px';
  });
  $(container).on('click', label, function () {
    var content = $(this).find(radio).text(),
        mainParent = $(this).closest(container);
    mainParent.find(title).text(content);
    mainParent.removeClass('open');
  }).on('click', title, function () {
    if ($(this).closest(container).hasClass('open')) {
      $(container).removeClass('open');
    } else {
      $(container).removeClass('open');
      $(this).closest(container).addClass('open');
    }
  });
} // кастомный select;


function clickOutside(container, area, open) {
  $(function () {
    var i = 0;
    $(container).each(function () {
      i++;
      $(this).attr('data-name', 'wrapper__touch' + i);
    });
    $('[data-name="' + i + '"]').ready(function () {
      var thisAttr = $(this).find(area).parent();
      $(this).find('.wrapper__touch').click(function (event) {
        $('.wrapper__touch').not(this).parent().removeClass(open);
        $(this).parent().toggleClass(open);
      });
      $(document).on('click touchstart', function (e) {
        if (!$(e.target).closest(thisAttr).length) {
          thisAttr.removeClass(open);
        }
      });
    });
  }); // document.addEventListener('click', e => {
  //     let target = e.target;
  //     let its_sortPrice = target == sortPrice || sortPrice.contains(target);
  //     let its_sortPrice_is_open = sortPrice.hasAttribute('open');
  //
  //     if (!its_sortPrice && its_sortPrice_is_open) {
  //         $('.top_filter__select').removeAttr('open');
  //     }
  // });
} // клик вне элемента;


function offersSlider(el) {
  $(el).slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    draggable: false,
    arrows: true,
    infinite: true,
    variableWidth: true,
    prevArrow: '<a class = "arrow-left"></a>',
    nextArrow: '<a class = "arrow-right"></a>',
    swipe: true,
    responsive: [{
      breakpoint: 768.98,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 574.98,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        asNavFor: false,
        fade: false
      }
    }]
  });
} // слайдер предложений;


function phoneMask() {
  var phoneInput = $('[data-phone-mask=""]');
  phoneInput.inputmask({
    mask: '+7 (999) 999-99-99'
  });
} // маска номера телефона


function emailMask() {
  var emailInput = $('[data-email-mask=""]');
  emailInput.inputmask({
    mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
    greedy: false,
    onBeforePaste: function onBeforePaste(pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace('mailto:', '');
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: 'lower'
      }
    }
  });
} // маска email


function formNameValid(el, elCheck) {
  if (el.val().length < 2) {
    elCheck = false;
    el.addClass('validate-border');
    el.parent().find('.icon-wrapper')[0].style.display = 'none';
  } else {
    elCheck = true;
    el.removeClass('validate-border');
    el.parent().find('.icon-wrapper')[0].style.display = 'flex';
  }

  return elCheck;
} // функция валидации имени


function formPhoneValid(el, elCheck) {
  var validPhone = /_/;

  if (el.val().length === 0) {
    elCheck = false;
    el.addClass('validate-border');
    el.parent().find('.icon-wrapper')[0].style.display = 'none';
  } else {
    if (el.val().length > 0 && validPhone.test(el.val())) {
      elCheck = false;
      el.addClass('validate-border');
      el.parent().find('.icon-wrapper')[0].style.display = 'none';
    } else {
      if (el.val().length > 0 && !validPhone.test(el.val())) {
        elCheck = true;
        el.removeClass('validate-border');
        el.parent().find('.icon-wrapper')[0].style.display = 'flex';
      } else {
        elCheck = false;
      }
    }
  }

  return elCheck;
} // функция валидации телефона


function formEmailValid(el, elCheck) {
  var emailVal = el.val(),
      emailValid = emailVal.split('@');

  if (el.val().length > 0 && (el.val().match(/.+?\@.+\.+/g) || []).length === 1) {
    if (emailValid[0].length < 3) {
      el.addClass('validate-border');
      el.parent().find('.icon-wrapper')[0].style.display = 'none';
      elCheck = false;
    } else {
      el.removeClass('validate-border');
      el.parent().find('.icon-wrapper')[0].style.display = 'flex';
      elCheck = true;
    }
  } else {
    el.addClass('validate-border');
    el.parent().find('.icon-wrapper')[0].style.display = 'none';
    elCheck = false;
  }

  return elCheck;
} // функция валидации email;


function resetSortingTable() {
  $('.table').find('.table-head__item').each(function () {
    $(this).find('[name="table_sort"]').prop('checked', false);
    $(this).find('[name="table_sort"]').removeClass('onSorting');
  });
  return false;
} // сброс сортировки в таблице


function tablePagination(pagNum, pagNumOld, parent, onFilter, onSorting) {
  var that = parent,
      quantity = 0,
      defaultPag = pagNumOld - pagNum,
      pagNew = 0,
      onFilterPagArr = [],
      onFilterPagNum,
      currentSecond,
      tabOrder;
  that.find('.pagination__link.pag_next').removeClass('disable');
  that.find('.table-body .table-body__row').each(function (index) {
    // собираем пагинацию в зависимости от условий
    if (onSorting && onFilter) {
      // если выбраны, и фильтр, и сортировка
      if ($(this).hasClass('onFilter')) {
        onFilterPagArr.push(index);
        onFilterPagNum = onFilterPagArr.length;
        tabOrder = parseInt(this.style.order);

        if (tabOrder >= pagNum) {
          // сравниваем полученные значения order у элементов с классом onFilter с кол-вом отображаемым на одной странице
          $(this).hide();
        } else {
          if (window.matchMedia('(min-width: 768px)').matches) {
            this.style.display = 'grid';
          } else {
            this.style.display = 'flex';
          }
        }
      } else {
        $(this).hide();
      }
    } else if (onFilter) {
      // если выбран только фильтр
      if ($(this).hasClass('onFilter')) {
        onFilterPagArr.push(index);
        onFilterPagNum = onFilterPagArr.length;

        if (onFilterPagNum <= pagNum) {
          // сравниваем кол-во элементов после применения фильтра с кол-вом отображаемым на одной странице
          if (window.matchMedia('(min-width: 768px)').matches) {
            this.style.display = 'grid';
          } else {
            this.style.display = 'flex';
          }
        } else {
          $(this).hide();
        }
      }
    } else if (onSorting) {
      // если выбрана только сортировка
      quantity++;
      tabOrder = parseInt(this.style.order);

      if (tabOrder + 1 > pagNum) {
        $(this).hide();
      } else {
        if (window.matchMedia('(min-width: 768px)').matches) {
          this.style.display = 'grid';
        } else {
          this.style.display = 'flex';
        }
      }
    } else {
      quantity++;

      if (index + 1 > pagNum) {
        // сравниваем полученные значения order с кол-вом отображаемым на одной странице
        $(this).hide();
      } else {
        if (window.matchMedia('(min-width: 768px)').matches) {
          this.style.display = 'grid';
        } else {
          this.style.display = 'flex';
        }
      }
    }
  });

  if (onFilter) {
    onFilterPagNum > pagNum ? currentSecond = pagNum : currentSecond = onFilterPagNum;

    if (defaultPag === onFilterPagNum - 1 && defaultPag === currentSecond - 1 || onFilterPagNum === currentSecond) {
      that.find('.pagination__link').addClass('disable');
    }

    defaultPag === onFilterPagNum - 1 && (onFilterPagNum = onFilterPagNum - 1);
    defaultPag === currentSecond - 1 && (currentSecond = currentSecond - 1);
    that.find('.table-footer .pagination__text-total').text(onFilterPagNum);

    if (typeof currentSecond === 'undefined') {
      that.find('.table-pagination').hide();
    } else {
      that.find('.table-pagination').css('display', 'flex');
    }
  } else {
    quantity > pagNum ? currentSecond = pagNum : currentSecond = quantity;
    that.find('.table-footer .pagination__text-total').text(quantity);
  }

  that.find('.table-footer .pagination__text-current').text(defaultPag + '-' + currentSecond);
  that.find('.pagination__link').off('click');
  that.find('.pagination__link').on('click', function (e) {
    e.preventDefault();
    var pagItem = $(this);
    onFilterPagNum = onFilterPagArr.length;
    onFilterPagArr = [];

    if ($(this).hasClass('pag_next')) {
      pagNew = pagNumOld + pagNum;
      $(this).parent().find('.pag_prev').removeClass('disable');
      that.find('.table-body .table-body__row').each(function (index) {
        if (onSorting && onFilter) {
          if ($(this).hasClass('onFilter')) {
            onFilterPagArr.push(index);
            onFilterPagNum = onFilterPagArr.length;
            tabOrder = parseInt(this.style.order);

            if (pagNumOld <= tabOrder + 1 && tabOrder + 1 < pagNew) {
              if (window.matchMedia('(min-width: 768px)').matches) {
                this.style.display = 'grid';
              } else {
                this.style.display = 'flex';
              }
            } else {
              $(this).hide();
            }
          } else {
            $(this).hide();
          }
        } else if (onFilter) {
          if ($(this).hasClass('onFilter')) {
            onFilterPagArr.push(index);

            for (var i = 0; i < onFilterPagArr.length; i++) {
              var arrIndex = onFilterPagArr[i];
              var item = that.find('.table-body .table-body__row')[arrIndex];

              if (pagNumOld <= i + 1 && i + 1 < pagNew) {
                if (window.matchMedia('(min-width: 768px)').matches) {
                  item.style.display = 'grid';
                } else {
                  item.style.display = 'flex';
                }
              } else if (i + 1 < pagNumOld) {
                item.style.display = 'none';
              }
            }
          }
        } else if (onSorting) {
          tabOrder = parseInt($(this)[0].style.order);

          if (pagNumOld <= tabOrder + 1 && tabOrder + 1 < pagNew) {
            if (window.matchMedia('(min-width: 768px)').matches) {
              this.style.display = 'grid';
            } else {
              this.style.display = 'flex';
            }
          } else {
            $(this).hide();
          }

          quantity > pagNew - 1 ? currentSecond = pagNew - 1 : currentSecond = quantity;
          currentSecond === quantity && pagItem.addClass('disable');
          currentSecond !== quantity && pagItem.removeClass('disable');
        } else {
          if (pagNumOld <= index + 1 && index + 1 < pagNew) {
            if (window.matchMedia('(min-width: 768px)').matches) {
              $(this).css('display', 'grid');
            } else {
              $(this).css('display', 'flex');
            }
          } else if (index + 1 < pagNumOld) {
            $(this).hide();
          }
        }
      });

      if (onFilter) {
        onFilterPagNum > pagNew - 1 ? currentSecond = pagNew - 1 : currentSecond = onFilterPagNum;
        currentSecond === onFilterPagNum && pagItem.addClass('disable');
        currentSecond !== onFilterPagNum && pagItem.removeClass('disable');
      } else {
        quantity > pagNew - 1 ? currentSecond = pagNew - 1 : currentSecond = quantity;
        currentSecond === quantity && pagItem.addClass('disable');
        currentSecond !== quantity && pagItem.removeClass('disable');
      }

      that.find('.table-footer .pagination__text-current').text(pagNumOld + '-' + currentSecond);
      pagNumOld = pagNew;
    } // клик на кнопку следующая страница


    if ($(this).hasClass('pag_prev')) {
      pagNew = pagNumOld - pagNum;
      pagNumOld = pagNumOld - pagNum * 2;
      $(this).parent().find('.pag_next').removeClass('disable');
      that.find('.table-body .table-body__row').each(function (index) {
        if (onSorting && onFilter) {
          if ($(this).hasClass('onFilter')) {
            onFilterPagArr.push(index);
            onFilterPagNum = onFilterPagArr.length + 1;
            tabOrder = parseInt(this.style.order);

            if (pagNumOld <= tabOrder + 1 && tabOrder + 1 < pagNew) {
              if (window.matchMedia('(min-width: 768px)').matches) {
                this.style.display = 'grid';
              } else {
                this.style.display = 'flex';
              }
            } else {
              $(this).hide();
            }
          } else {
            $(this).hide();
          }
        } else if (onFilter) {
          if ($(this).hasClass('onFilter')) {
            onFilterPagArr.push(index);

            for (var i = 0; i < onFilterPagArr.length; i++) {
              var arrIndex = onFilterPagArr[i];
              var item = that.find('.table-body .table-body__row')[arrIndex];

              if (pagNumOld <= i + 1 && i + 1 < pagNew) {
                if (window.matchMedia('(min-width: 768px)').matches) {
                  item.style.display = 'grid';
                } else {
                  item.style.display = 'flex';
                }
              } else if (i + 1 >= pagNew) {
                item.style.display = 'none';
              }
            }
          }
        } else if (onSorting) {
          tabOrder = parseInt($(this)[0].style.order);

          if (pagNumOld <= tabOrder + 1 && tabOrder + 1 < pagNew) {
            if (window.matchMedia('(min-width: 768px)').matches) {
              this.style.display = 'grid';
            } else {
              this.style.display = 'flex';
            }
          } else {
            $(this).hide();
          }
        } else {
          if (pagNumOld <= index + 1 && index + 1 < pagNew) {
            if (window.matchMedia('(min-width: 768px)').matches) {
              $(this).css('display', 'grid');
            } else {
              $(this).css('display', 'flex');
            }
          } else if (index + 1 >= pagNew) {
            $(this).hide();
          }
        }
      });

      if (onFilter) {
        onFilterPagNum > pagNew - 1 ? currentSecond = pagNew - 1 : currentSecond = onFilterPagNum;
      } else {
        quantity > pagNew - 1 ? currentSecond = pagNew - 1 : currentSecond = quantity;
      }

      that.find('.table-footer .pagination__text-current').text(pagNumOld + '-' + currentSecond);
      currentSecond === pagNum && pagItem.addClass('disable');
      currentSecond !== pagNum && pagItem.removeClass('disable');
      pagNumOld = pagNew;
    } // клик на кнопку предыдущая страница

  });
}

;

function tabsSwitch(wrapper, item, isIndexTable, isCatalogTable) {
  var section = $(wrapper),
      parent = section.find('.tabs-container'),
      tabsOne = parent.find('.tabs-panel_one'),
      tabsTwo = parent.find('.tabs-panel_two'),
      // для ПК версии
  tabsSelect = parent.find('.tabs-panel__select'),
      // для мобильной версии
  status = tabsOne.find('input:checked').val(),
      space,
      foundItem;

  if (window.matchMedia('(min-width: 768px)').matches) {
    space = tabsTwo.find('input:checked').val();
  } else {
    space = tabsSelect.find('input:checked').val();
  }

  foundItem = section.find(item + '[data-status="' + status + '"][data-space="' + space + '"]');
  foundItem.show();

  if (isIndexTable && !isCatalogTable) {
    tablePagination(6, 7, foundItem, false, false); // перезапуск функции пагинации
  }

  tabsOne.on('change', 'input', function () {
    status = $(this).val();
    space = tabsTwo.find('input:checked').val();
    foundItem = section.find(item + '[data-status="' + status + '"][data-space="' + space + '"]');
    section.find(item).hide();
    foundItem.show();

    if (isIndexTable && !isCatalogTable) {
      tablePagination(6, 7, foundItem, false, false); // перезапуск функции пагинации
    }
  }); // отслеживание изменений табов для выбора здания

  tabsTwo.on('change', 'input', function () {
    space = $(this).val();
    status = tabsOne.find('input:checked').val();
    foundItem = section.find(item + '[data-status="' + status + '"][data-space="' + space + '"]');
    section.find(item).hide();
    foundItem.show();

    if (isIndexTable && !isCatalogTable) {
      tablePagination(6, 7, foundItem, false, false); // перезапуск функции пагинации
    }
  }); // отслеживание изменений табов для выбора помещения

  tabsSelect.on('change', 'input', function () {
    space = $(this).val();
    status = tabsOne.find('input:checked').val();
    foundItem = section.find(item + '[data-status="' + status + '"][data-space="' + space + '"]');
    section.find(item).hide();
    foundItem.show();

    if (isIndexTable && !isCatalogTable) {
      tablePagination(6, 7, foundItem, false, false); // перезапуск функции пагинации
    }
  }); // отслеживание изменений табов для выбора помещения
} // переключение табов на главной;


;
var commonObjColumn, commonObjList, mainTableArr;

function parametersCatalogCardColumns() {
  var object,
      priceArr = [],
      placeArr = [],
      statusArr = [],
      spaceArr = [],
      quadratureArr = [],
      indexArr = [];
  $('.catalog__list .catalog-card').each(function (index) {
    var priceNoSpaces = removeSpaces($(this).find('.catalog-card__price').text()),
        price = parseInt(priceNoSpaces),
        place = $(this).data('place'),
        status = $(this).data('status'),
        space = $(this).data('space'),
        quadrature = parseInt($(this).find('.catalog-card__quadrature').text()),
        indexCard = index + 1;
    priceArr.push(price);
    placeArr.push(place);
    statusArr.push(status);
    spaceArr.push(space);
    quadratureArr.push(quadrature);
    indexArr.push(indexCard);
  });
  object = {
    PRICE: priceArr,
    PLACE: placeArr,
    STATUS: statusArr,
    SPACE: spaceArr,
    QUADRATURE: quadratureArr,
    INDEX: indexArr
  };
  return object;
} // сбор данных из списка каталога при загрузке


function parametersCatalogCardList() {
  var object,
      priceArr = [],
      placeArr = [],
      statusArr = [],
      spaceArr = [],
      quadratureArr = [],
      floorArr = [],
      nameArr = [],
      indexArr = [];
  $('.catalog__table .table-body__row').each(function (index) {
    var _priceArr$push, _quadratureArr$push, _floorArr$push, _nameArr$push;

    var priceNoSpaces = removeSpaces($(this).find('.table-body__item_price').text()),
        price = parseInt(priceNoSpaces),
        place = $(this).data('place'),
        status = $(this).data('status'),
        space = $(this).data('space'),
        quadrature = parseInt($(this).find('.table-body__item_square').text()),
        name = removeSpaces($(this).find('.table-body__item_building').text()),
        floor = parseInt($(this).find('.table-body__item_floor').text()),
        indexCard = index;
    priceArr.push((_priceArr$push = {}, _defineProperty(_priceArr$push, 'index', indexCard), _defineProperty(_priceArr$push, 'value', price), _priceArr$push));
    quadratureArr.push((_quadratureArr$push = {}, _defineProperty(_quadratureArr$push, 'index', indexCard), _defineProperty(_quadratureArr$push, 'value', quadrature), _quadratureArr$push));
    floorArr.push((_floorArr$push = {}, _defineProperty(_floorArr$push, 'index', indexCard), _defineProperty(_floorArr$push, 'value', floor), _floorArr$push));
    nameArr.push((_nameArr$push = {}, _defineProperty(_nameArr$push, 'index', indexCard), _defineProperty(_nameArr$push, 'value', name), _nameArr$push)); // priceArr.push(price)

    placeArr.push(place);
    statusArr.push(status);
    spaceArr.push(space); // quadratureArr.push(quadrature)
    // floorArr.push(floor)
    // nameArr.push(name)

    indexArr.push(indexCard + 1);
  });
  object = {
    PRICE: priceArr,
    PLACE: placeArr,
    STATUS: statusArr,
    SPACE: spaceArr,
    QUADRATURE: quadratureArr,
    INDEX: indexArr,
    NAME: nameArr,
    FLOOR: floorArr
  };
  return object;
} // сбор данных из таблицы каталога при загрузке


function parametersMainTable() {
  var mainTableArray = [];
  $('.offers-inf__table').each(function (index) {
    var object,
        priceArr = [],
        placeArr = [],
        statusArr = [],
        spaceArr = [],
        quadratureArr = [],
        floorArr = [],
        nameArr = [],
        indexArr = [];
    $(this).find('.table-body__row').each(function (index) {
      var _priceArr$push2, _quadratureArr$push2, _floorArr$push2, _nameArr$push2;

      var priceNoSpaces = removeSpaces($(this).find('.table-body__item_price').text()),
          price = parseInt(priceNoSpaces),
          // place = $(this).data('place'),
      // status = $(this).data('status'),
      // space = $(this).data('space'),
      quadrature = parseInt($(this).find('.table-body__item_square').text()),
          name = removeSpaces($(this).find('.table-body__item_building').text()),
          floor = parseInt($(this).find('.table-body__item_floor').text()),
          indexCard = index;
      priceArr.push((_priceArr$push2 = {}, _defineProperty(_priceArr$push2, 'index', indexCard), _defineProperty(_priceArr$push2, 'value', price), _priceArr$push2)); // placeArr.push(place)
      // statusArr.push(status)
      // spaceArr.push(space)

      quadratureArr.push((_quadratureArr$push2 = {}, _defineProperty(_quadratureArr$push2, 'index', indexCard), _defineProperty(_quadratureArr$push2, 'value', quadrature), _quadratureArr$push2));
      floorArr.push((_floorArr$push2 = {}, _defineProperty(_floorArr$push2, 'index', indexCard), _defineProperty(_floorArr$push2, 'value', floor), _floorArr$push2));
      nameArr.push((_nameArr$push2 = {}, _defineProperty(_nameArr$push2, 'index', indexCard), _defineProperty(_nameArr$push2, 'value', name), _nameArr$push2));
      indexArr.push(indexCard + 1);
    });
    object = {
      PRICE: priceArr,
      PLACE: placeArr,
      STATUS: statusArr,
      SPACE: spaceArr,
      QUADRATURE: quadratureArr,
      INDEX: indexArr,
      NAME: nameArr,
      FLOOR: floorArr,
      STATUS_TEXT: $(this).data('status'),
      SPACE_TEXT: $(this).data('space')
    };
    mainTableArray.push(object);
  });
  return mainTableArray;
} // // сбор данных из таблиц на главной при загрузке;


function catalogFilterFunc(object, valPrice, valPlace, valStatus, valSpace, valQuadrature) {
  var displayType = $('.catalog__right').find('[name="display_type"]:checked').val();

  if (valStatus === 'rent') {
    document.querySelector('.table-head__item_price .table-radio_custom .text').innerHTML = 'Цена/мес';
  } else if (valStatus === 'sale') {
    document.querySelector('.table-head__item_price .table-radio_custom .text').innerHTML = 'Цена';
  } // проверка статуса "продажа или аренда", чтобы менять в сортировке текст цены


  if (displayType === 'columns') {
    // проверка типа отображения на странице таблицей или колонками
    var catalogCard = $('.catalog__list .catalog-card');
    catalogCard.each(function () {
      var priceNoSpaces = removeSpaces($(this).find('.catalog-card__price').text()),
          price = parseInt(priceNoSpaces),
          place = $(this).data('place'),
          status = $(this).data('status'),
          space = $(this).data('space'),
          quadrature = parseInt($(this).find('.catalog-card__quadrature').text());
      $(document).find('.catalog-more_link').hide();

      if ((valStatus ? valStatus === status : true) && (valPlace ? valPlace === place || valPlace === 'all' : true) && (valSpace ? valSpace === space || valSpace === 'all' : true) && valPrice[0] <= price && price <= valPrice[1] && valQuadrature[0] <= quadrature && quadrature <= valQuadrature[1]) {
        this.style.display = 'block';
        this.classList.add('onFilter');
      } else {
        this.style.display = 'none';
        this.classList.remove('onFilter');
      } // проверка всех введенных значений фильтра

    });

    if ($('.catalog__list .catalog-card.onFilter').length > 0) {
      $(document).find('.catalog__wrapper .not-found').hide();
    } else {
      $(document).find('.catalog__wrapper .not-found').show();
    } // если ничего не найдено

  } else if (displayType === 'list') {
    // проверка типа отображения на странице таблицей или колонками
    $('.catalog__table .table-body__row').each(function () {
      var priceNoSpaces = removeSpaces($(this).find('.table-body__item_price').text()),
          price = parseInt(priceNoSpaces),
          place = $(this).data('place'),
          status = $(this).data('status'),
          space = $(this).data('space'),
          quadrature = parseInt($(this).find('.table-body__item_square').text());

      if ((valStatus !== '' ? valStatus === status : true) && (valPlace !== '' ? valPlace === place || valPlace === 'all' : true) && (valSpace !== '' ? valSpace === space || valSpace === 'all' : true) && valPrice[0] <= price && price <= valPrice[1] && valQuadrature[0] <= quadrature && quadrature <= valQuadrature[1]) {
        if (window.matchMedia('(min-width: 768px)').matches) {
          this.style.display = 'grid';
        } else {
          this.style.display = 'flex';
        }

        this.classList.add('onFilter');
      } else {
        this.style.display = 'none';
        this.classList.remove('onFilter');
      } // проверка всех введенных значений фильтра

    });

    if ($('.catalog__table .table-body__row.onFilter').length > 0) {
      $(document).find('.catalog__wrapper .not-found').hide();
    } else {
      $(document).find('.catalog__wrapper .not-found').show();
    } // если ничего не найдено

  }
} // фильтр каталога


function catalogFilter(object) {
  var parent = $('.catalog__filter'),
      displayType = $('.catalog__right').find('[name="display_type"]:checked').val(),
      placeRadio = $('#place_select').find('input[name="place"]'),
      spaceRadio = $('#space_select').find('input[name="space"]'),
      rentSaleRadio = parent.find('input[name="rent_sale"]'),
      priceArr,
      quadratureArr;

  if (displayType === 'columns') {
    priceArr = object.PRICE.sort(compareNumeric);
    quadratureArr = object.QUADRATURE.sort(compareNumeric);
  } else if (displayType === 'list') {
    quadratureArr = object.QUADRATURE.sort(function (prev, next) {
      return prev.value - next.value;
    });
    priceArr = object.PRICE.sort(function (prev, next) {
      return prev.value - next.value;
    });
  } // запуск разные сортировок массива в зависимости от выбранного типа отображения


  function eachRadioButton(el) {
    var value = '';
    el.each(function () {
      if ($(this).is(':checked')) {
        value = $(this).val();
        return value;
      }
    });
    return value;
  } // получения значения выбранного пункта в customSelect


  function filterChangeFunc() {
    var displayType = $('.catalog__right').find('[name="display_type"]:checked').val(),
        // выбранный тип отображения
    rentSaleRadioVal = eachRadioButton(rentSaleRadio),
        // выбранное значение "аренда или продажа"
    placeRadioVal = eachRadioButton(placeRadio),
        // выбранное значение "типа здания"
    spaceRadioVal = eachRadioButton(spaceRadio),
        // выбранное значение "типа помещения"
    tableSort = $('[name="table_sort"]:checked').length,
        maxSquareVal = $('#filter_max_square').val(),
        // значение макс площади
    minPriceVal = $('#filter_min_price').val(),
        // значение мин цены
    maxPriceVal = $('#filter_max_price').val(),
        // значение макс цены
    onSorting = resetSortingTable(),
        minSquareVal,
        minSquare,
        maxSquare,
        minPrice,
        maxPrice,
        quadrature,
        price;

    if (localStorage.getItem('min_square')) {
      minSquareVal = localStorage.getItem('min_square');
    } else {
      minSquareVal = $('#filter_min_square').val();
    } // значение мин площади


    if (displayType === 'columns') {
      minSquare = parseInt(minSquareVal !== '' ? minSquareVal : quadratureArr[0]);
      maxSquare = parseInt(maxSquareVal !== '' ? maxSquareVal : quadratureArr[quadratureArr.length - 1]);
      minPrice = parseInt(minPriceVal !== '' ? minPriceVal : priceArr[0]);
      maxPrice = parseInt(maxPriceVal !== '' ? maxPriceVal : priceArr[priceArr.length - 1]);
    } else if (displayType === 'list') {
      minSquare = parseInt(minSquareVal !== '' ? minSquareVal : quadratureArr[0].value);
      maxSquare = parseInt(maxSquareVal !== '' ? maxSquareVal : quadratureArr[quadratureArr.length - 1].value);
      minPrice = parseInt(minPriceVal !== '' ? minPriceVal : priceArr[0].value);
      maxPrice = parseInt(maxPriceVal !== '' ? maxPriceVal : priceArr[priceArr.length - 1].value);
    } // если фильтры цены и площади не заполнены подставляем значения диапазона по умолчанию


    quadrature = [minSquare, maxSquare]; // формировка диапазона фильтра площади

    price = [minPrice, maxPrice]; // формировка диапазона фильтра цены
    // console.log(price, placeRadioVal, rentSaleRadioVal, spaceRadioVal, quadrature)

    catalogFilterFunc(object, price, placeRadioVal, rentSaleRadioVal, spaceRadioVal, quadrature); // передача данных в функцию фильтрации

    tablePagination(13, 14, $('.catalog__table'), true, onSorting); // перезапуск пагинации

    $(document).find('.reset_filter').addClass('active');
  } // сбор данных фильтра


  parent.on('change', 'input', function () {
    filterChangeFunc();
  }); // при выборе нового значения в select фильтра вызов функции сбора данных фильтра на лету

  $('#filter_max_square, #filter_min_price, #filter_max_price, #filter_min_square').on('keyup', function () {
    setTimeout(filterChangeFunc, 1000);
  }); // при вводе нового значения в input:text фильтра вызов функции сбора данных фильтра на лету с задержкой в 1сек
} // сбор и передача данных фильтра в функцию фильтра


commonObjColumn = parametersCatalogCardColumns(); // создаем переменную для массива списка каталога

commonObjList = parametersCatalogCardList(); // создаем переменную для массива таблицы каталога

mainTableArr = parametersMainTable(); // создаем переменную для массива таблицы каталога;

$(document).ready(function () {
  // check browser for webp format
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
  ;
  customSelect('.select', '.select-title', '.select-content', '.select-content__wrapper', '.select-content__radio', 4); // init кастомного селекта

  clickOutside('.select', '.select-content', 'open'); // клик вне элемента

  phoneMask();
  emailMask(); // init масок почты и телефона

  $(document).on('click', '.hamburger', function () {
    if ($(this).parent().hasClass('show')) {
      $(this).parent().removeClass('show');
    } else {
      $(this).parent().addClass('show');
    }
  }); // клик по гамбургер меню.

  var hamburger = document.querySelector('.hamburger-wrapper');
  document.addEventListener('click', function (e) {
    var target = e.target;
    var its_hamburger = target == hamburger || hamburger.contains(target);
    var its_hamburger_is_open = hamburger.classList.contains('show');

    if (!its_hamburger && its_hamburger_is_open) {
      $('.hamburger-wrapper').removeClass('show');
    }
  }); // клик вне гамбургера

  $('.hero-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: false
  }); // init главного слайдера

  offersSlider('.offers-slider'); // init общего слайдера товаров

  function choiceDisplayTypeCatalog(name, data) {
    var spinner = $('.overlay-spinner');

    if (spinner.length > 0) {
      spinner[0].style.display = 'flex';
    }

    var display_type = $(document).find('[name="' + name + '"]:checked').val(),
        wrapper = $('.catalog__wrapper'),
        filter = $('.catalog__filter'),
        rentSaleVal = $('.catalog__filter [name="rent_sale"]:checked').val(),
        placeVal = $('.catalog__filter [name="place"]:checked').val(),
        placeText = $('.catalog__filter [name="place"]:checked').parent().find('.select-content__radio').text(),
        spaceVal = $('.catalog__filter [name="space"]:checked').val(),
        spaceText = $('.catalog__filter [name="space"]:checked').parent().find('.select-content__radio').text(),
        tableSort = $('[name="table_sort"]:checked').length,
        minSquare = $('#filter_min_square').val(),
        maxSquare = $('#filter_max_square').val(),
        minPrice = $('#filter_min_price').val(),
        maxPrice = $('#filter_max_price').val(),
        onSorting = resetSortingTable(),
        quadrature,
        price; // сбор данных с фильтра при переключении типа отображения

    wrapper.find('[data-' + data + ']').removeClass('show');

    if (display_type === 'columns') {
      wrapper.find('.catalog-more_link').show();
      $('#sorting_price').parent().show();
      catalogFilter(commonObjColumn); // передаем переменную с данными списка каталога в функцию фильтра
    } else if (display_type === 'list') {
      wrapper.find('.catalog-more_link').hide();
      $('#sorting_price').parent().hide();
      catalogFilter(commonObjList); // передаем переменную с данными таблицы каталога в функцию фильтра
    }

    resetCatalogFilter();

    if (rentSaleVal || placeVal || spaceVal || minSquare || minPrice || maxSquare || maxPrice) {
      tablePagination(13, 14, $('.catalog__table'), true, false); // перезапуск пагинации

      filter.find('[name="rent_sale"][value="' + rentSaleVal + '"]').prop('checked', true);
      filter.find('[name="rent_sale"]').trigger('change');
      filter.find('[name="place"][value="' + placeVal + '"]').prop('checked', true);
      $('.catalog__filter [name="place"]:checked').closest('.select').find('.select-title').text(placeText);
      filter.find('[name="place"]').trigger('change');
      filter.find('[name="space"][value="' + spaceVal + '"]').prop('checked', true);
      $('.catalog__filter [name="space"]:checked').closest('.select').find('.select-title').text(spaceText);
      filter.find('[name="space"]').trigger('change');
      $('#filter_min_square').val(minSquare);
      $('#filter_min_square').trigger('keyup');
      $('#filter_max_square').val(maxSquare);
      $('#filter_max_square').trigger('keyup');
      $('#filter_min_price').val(minPrice);
      $('#filter_min_price').trigger('keyup');
      $('#filter_max_price').val(maxPrice);
      $('#filter_max_price').trigger('keyup'); // применение данных фильтра для нового типа отображения
    } else {
      tablePagination(13, 14, $('.catalog__table'), false, false); // перезапуск пагинации
    }

    setTimeout(function () {
      if (spinner.length > 0) {
        spinner[0].style.display = 'none';
      }

      wrapper.find('[data-' + data + '="' + display_type + '"]').addClass('show');
    }, 1000); // куртим спиннер еще 1сек и потом показываем выбранные тип отображения
  } // смены тип отображения


  choiceDisplayTypeCatalog('display_type', 'display-type'); // запуск функции смены тип отображения

  $(document).find('[name="display_type"]').on('change', function () {
    choiceDisplayTypeCatalog('display_type', 'display-type'); // запуск функции смены тип отображения
  });
  $('.card__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    asNavFor: '.card__slider-nav',
    responsive: [{
      breakpoint: 574.98,
      settings: {
        slidesToShow: 1,
        dots: true,
        variableWidth: true,
        arrows: false,
        asNavFor: false,
        fade: false
      }
    }]
  }); // слайдер карточки товара

  $('.card__slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.card__slider',
    dots: false,
    arrows: true,
    infinite: false,
    variableWidth: true,
    prevArrow: '<a class="arrow-left"></a>',
    nextArrow: '<a class="arrow-right"></a>',
    swipe: true // centerMode: true,
    // focusOnSelect: true

  }); // слайдер карточки товара

  function validationKPForm() {
    var form = $('#KP_form'),
        btn = form.find('[type="submit"]'),
        name = form.find('.name-input'),
        phone = form.find('.phone-input'),
        email = form.find('.email-input'),
        nameCheck = false,
        phoneCheck = false,
        emailCheck = false;
    name.blur(function () {
      nameCheck = formNameValid(name, nameCheck);
    }); // валидация имени

    phone.blur(function () {
      phoneCheck = formPhoneValid(phone, phoneCheck);
    }); // валидация телефона

    email.blur(function () {
      emailCheck = formEmailValid(email, emailCheck);
    }); // валидация почты

    function validate() {
      if (nameCheck && phoneCheck && emailCheck) {
        // console.log(nameCheck && phoneCheck && emailCheck)
        btn.removeClass('disable');
        name.removeClass('validate-border');
        phone.removeClass('validate-border');
        email.removeClass('validate-border');
      } else {
        btn.addClass('disable');
      }
    } // проверка валидации


    form.find('input').on('blur', function () {
      validate(); // запуск проверки валидации
    });
  } // валидация формы


  $(document).on('click', '.commercial-offer', function (e) {
    e.preventDefault();
    var modal = $('#modal_commercial-offer'),
        dataUrl = $(this).data('url'),
        dataId = $(this).data('id');
    modal.find('#url_product').val(dataUrl);
    modal.find('#id_product').val(dataId);
    modal[0].style.display = 'block';
    modal.animate({
      opacity: 1
    }, 100);
    validationKPForm();
  }); // вызов формы

  $(document).on('click', '.modal, .modal-close', function (e) {
    e.preventDefault();

    if ($(this).hasClass('modal')) {
      $(this)[0].style.display = 'none';
      $(this).animate({
        opacity: 0
      }, 100);
    } else if ($(this).hasClass('modal-close')) {
      $(this).closest('.modal')[0].style.display = 'none';
      $(this).closest('.modal').animate({
        opacity: 0
      }, 100);
    }

    validationKPForm();
  }); // закрыть форму

  $(document).on('click', '.modal .modal-content', function (e) {
    e.stopPropagation();
  }); // отменяем закрытие формы по клику внутри самой формы

  var sectionCard = $('.card');
  sectionCard.on('click', '.first-column .card__top-column__description .icon-wrapper', function () {
    $(this).closest('.first-column').find('.description-modal').addClass('show');
  }); // вызов инф-ой плашки в деталке

  sectionCard.on('click', '.description-modal__item-close', function () {
    $(this).parent().removeClass('show');
  }); // закрытие инф-ой плашки в деталке

  var smallModal = document.querySelector('.first-column');

  if (smallModal) {
    document.addEventListener('click', function (e) {
      var target = e.target;
      var its_smallModal = target == smallModal || smallModal.contains(target);
      var its_smallModal_is_open = $('.description-modal')[0].classList.contains('show');

      if (!its_smallModal && its_smallModal_is_open) {
        $('.description-modal')[0].classList.remove('show');
      }
    });
  } // клик вне инф-ой плашки в деталке
  // сортировка по цене в каталоге


  function sortingCatalogList(element) {
    var that = $(element),
        priceArr = commonObjColumn.PRICE.sort(compareNumeric);
    $('.catalog__list .catalog-card').each(function () {
      var priceNoSpaces = removeSpaces($(this).find('.catalog-card__price').text()),
          price = parseInt(priceNoSpaces);

      if (that.prop('checked')) {
        for (var key in priceArr) {
          if (priceArr[key] === price) {
            $(this).css('order', key);
          }
        }
      } else {
        $(this).css('order', 'unset');
      }
    });
  } // сортировка по цене в каталоге для типа отображения "в колонку"


  sortingCatalogList('#sorting_price');
  $('#sorting_price').on('change', function () {
    sortingCatalogList(this);
  });

  function resetCatalogFilter() {
    var catalogTableRow = $('.catalog__table .table-body__row');
    $(document).find('.catalog__filter input').prop('checked', false);
    $('#space_select').find('.select-title').text('-- Выберите тип помещения --');
    $('#place_select').find('.select-title').text('-- Выберите строение --');
    $(document).find('.catalog__filter input[type="text"]').val('');
    catalogTableRow.removeClass('onFilter');

    if (window.matchMedia('(min-width: 768px)').matches) {
      catalogTableRow.css('display', 'grid');
    } else {
      catalogTableRow.css('display', 'flex');
    }

    tablePagination(13, 14, $('.catalog__table'), false, false);
    $('.catalog__list .catalog-card').css('display', 'block');
    catalogCardShowFunc();
  } // сброс фильтра каталога


  resetCatalogFilter();
  resetSortingTable();
  $(document).on('click', '.reset_filter', function (e) {
    e.preventDefault();
    $(this).trigger('reset');
    resetCatalogFilter();
  }); // конец

  function sortingTable(value, array, child, isText, isCatalog) {
    var arr = array;

    if (isCatalog) {
      // проверка где происходит сортировка на главной или в каталоге
      var catalogItem = $('.catalog__table .table-body__row'),
          onFilter = false,
          onFilterNum = 0,
          NotOnFilterNum = 0,
          newArr = [],
          newArr2 = [],
          i;
      $('.catalog__filter input').each(function () {
        if (!onFilter) {
          if (this.type === 'text') {
            onFilter = this.value.length > 0;
          } else if (this.type === 'radio') {
            onFilter = this.checked && this.value !== 'all';
          }
        } else {
          return onFilter;
        }
      }); // собираем введенные параметры из фильтра

      if (onFilter) {
        catalogItem.each(function (index) {
          if ($(this).hasClass('onFilter')) {
            for (i = 0; i < arr.length; i++) {
              if (arr[i].index === index) {
                newArr.push(arr[i]);
              }
            }
          } else {
            for (i = 0; i < arr.length; i++) {
              if (arr[i].index === index) {
                newArr2.push(arr[i]);
              }
            }
          }
        });

        if (isText) {
          newArr = newArr.sort(function (prev, next) {
            if (prev.value > next.value) return 1;
            if (prev.value < next.value) return -1;
            return 0;
          });
          newArr2 = newArr2.sort(function (prev, next) {
            if (prev.value > next.value) return 1;
            if (prev.value < next.value) return -1;
            return 0;
          });
        } else {
          newArr = newArr.sort(function (prev, next) {
            return prev.value - next.value;
          });
          newArr2 = newArr2.sort(function (prev, next) {
            return prev.value - next.value;
          });
        }
      } // фильтрация новых массивов при учете фильтра для запуска сортировки


      catalogItem.each(function (index) {
        var itemNoSpaces = removeSpaces($(this).find(child).text()),
            item = isText ? itemNoSpaces : parseInt(itemNoSpaces),
            table = $('.catalog__table'),
            that;

        if (onFilter) {
          if ($('[value="' + value + '"]').is(':checked')) {
            if ($(this).hasClass('onFilter')) {
              that = catalogItem[newArr[onFilterNum]['index']]; // получаем индекс сортированного элемента с классом onFilter из массива

              that.style.order = onFilterNum; // установка порядка отображения элемента

              if (window.matchMedia('(min-width: 768px)').matches) {
                that.style.display = 'grid';
              } else {
                that.style.display = 'flex';
              }

              tablePagination(13, 14, table, onFilter, true); // перезапуск пагинации

              onFilterNum++; // число-индекс элемента массива
            } else {
              that = catalogItem[newArr2[NotOnFilterNum]['index']]; // получаем индекс сортированного элемента без класса onFilter из массива

              that.style.order = arr.length - newArr2.length; // установка порядка отображения элемента

              NotOnFilterNum++; // число-индекс элемента массива
            }
          } else {
            this.style.order = index;
            tablePagination(13, 14, table, onFilter, false); // перезапуск пагинации
          }
        } else {
          that = catalogItem[arr[index]['index']]; // получаем индекс сортированного элемента из массива

          if ($('[value="' + value + '"]').is(':checked')) {
            that.style.order = index; // установка порядка отображения элемента

            if (window.matchMedia('(min-width: 768px)').matches) {
              that.style.display = 'grid';
            } else {
              that.style.display = 'flex';
            }

            tablePagination(13, 14, table, onFilter, true); // перезапуск пагинации
          } else {
            this.style.order = index;
            tablePagination(13, 14, table, onFilter, false); // перезапуск пагинации
          }
        }
      });
    } else {
      var tabFirstChecked = $(document).find('[name="sale_rent_table"]:checked').val(),
          // получить значение аренда или продажа
      tabSecondChecked,
          table,
          tableItem;

      if (window.matchMedia('(min-width: 768px)').matches) {
        tabSecondChecked = $(document).find('.tabs-panel_two [name="object_table"]:checked').val();
      } else {
        tabSecondChecked = $(document).find('.tabs-panel__select [name="object_table_select"]:checked').val();
      } // получить значение типа помещения


      table = $('.offers-inf__table[data-status="' + tabFirstChecked + '"][data-space="' + tabSecondChecked + '"]'); // найти таблицу по выбранным значениям из табов

      tableItem = $('.offers-inf__table[data-status="' + tabFirstChecked + '"][data-space="' + tabSecondChecked + '"] .table-body__row'); // найти элементы таблицы по выбранным значениям из табов

      tableItem.each(function (index) {
        var itemNoSpaces = removeSpaces($(this).find(child).text()),
            item = isText ? itemNoSpaces : parseInt(itemNoSpaces),
            that = tableItem[arr[index]['index']]; // получаем индекс сортированного элемента из массива

        if ($('[value="' + value + '"]').is(':checked')) {
          that.style.order = index; // установка порядка отображения элемента

          if (window.matchMedia('(min-width: 768px)').matches) {
            that.style.display = 'grid';
          } else {
            that.style.display = 'flex';
          }

          tablePagination(6, 7, table, false, true); // перезапуск пагинации
        } else {
          $(this).css('order', index);
          tablePagination(6, 7, table, false, false); // перезапуск пагинации
        }
      });
    }
  }

  $('.table').on('change', '[name="table_sort"]', function () {
    var value = $(this).val(),
        allThat = $('.table').find('[name="table_sort"]'),
        nameArr,
        floorArr,
        quadratureArr,
        priceArr,
        isCatalog;

    if ($(this).closest('.table').hasClass('offers-inf__table')) {
      // является ли таблица таблицей каталога
      var tabFirstChecked = $(document).find('[name="sale_rent_table"]:checked').val(),
          // получить значение аренда или продажа
      tabSecondChecked;

      if (window.matchMedia('(min-width: 768px)').matches) {
        tabSecondChecked = $(document).find('.tabs-panel_two [name="object_table"]:checked').val();
      } else {
        tabSecondChecked = $(document).find('.tabs-panel__select [name="object_table_select"]:checked').val();
      } // получить значение типа помещения


      isCatalog = false;

      for (var i = 0; i < mainTableArr.length; i++) {
        var item = mainTableArr[i];

        if (item.STATUS_TEXT === tabFirstChecked && item.SPACE_TEXT === tabSecondChecked) {
          nameArr = item.NAME.sort(function (prev, next) {
            if (prev.value > next.value) return 1;
            if (prev.value < next.value) return -1;
            return 0;
          });
          floorArr = item.FLOOR.sort(function (prev, next) {
            return prev.value - next.value;
          });
          quadratureArr = item.QUADRATURE.sort(function (prev, next) {
            return prev.value - next.value;
          });
          priceArr = item.PRICE.sort(function (prev, next) {
            return prev.value - next.value;
          });
        } // сортировка данных в массиве в зависимости от выбранных табов

      }
    } else if ($(this).closest('.table').hasClass('catalog__table')) {
      // является ли таблица таблицей каталога
      nameArr = commonObjList.NAME.sort(function (prev, next) {
        if (prev.value > next.value) return 1;
        if (prev.value < next.value) return -1;
        return 0;
      });
      floorArr = commonObjList.FLOOR.sort(function (prev, next) {
        return prev.value - next.value;
      });
      quadratureArr = commonObjList.QUADRATURE.sort(function (prev, next) {
        return prev.value - next.value;
      });
      priceArr = commonObjList.PRICE.sort(function (prev, next) {
        return prev.value - next.value;
      }); // сортировка данных в массиве (массив для таблицы каталога 1)

      isCatalog = true;
    }

    if ($(this).hasClass('onSorting')) {
      $(this).removeClass('onSorting');
      $(this).prop('checked', false);
    } else {
      allThat.prop('checked', false);
      allThat.removeClass('onSorting');
      $(this).addClass('onSorting');
      $(this).prop('checked', true);
    } // переключения радио кнопок сортировки


    switch (value) {
      case 'name':
        sortingTable('name', nameArr, '.table-body__item_building', true, isCatalog);
        break;

      case 'floor':
        sortingTable('floor', floorArr, '.table-body__item_floor', false, isCatalog);
        break;

      case 'quadrature':
        sortingTable('quadrature', quadratureArr, '.table-body__item_square', false, isCatalog);
        break;

      case 'price':
        sortingTable('price', priceArr, '.table-body__item_price', false, isCatalog);
        break;
    } // в зависимости от выбранной сортировки передача данных в функцию сортировки

  }); // сбор данных и запуск функции сортировки после выбора одного из значений сортировки

  ;
  tabsSwitch('.offers', '.offers-slider', false, false);
  tabsSwitch('.offers-inf', '.offers-inf__table', true, false);
  tablePagination(13, 14, $('.catalog__table'), false, false);

  function catalogCardShowFunc() {
    var catalogCardShow;

    if (window.matchMedia('min-width: 768px')) {
      catalogCardShow = 10;
    } else {
      catalogCardShow = 6;
    }

    var displayType = $(document).find('[name="display_type"]:checked').val();

    if (displayType === 'columns') {
      $('.catalog__list').find('.catalog-card').each(function (index) {
        // console.log(index + 1 > catalogCardShow, index + 1, catalogCardShow)
        if (index + 1 > catalogCardShow) {
          $(this).hide();
          $(this).addClass('hide-card');
        } else {
          $(this).show();
          $(this).removeClass('hide-card');
        }

        if (index + 1 < catalogCardShow) {
          $(document).find('.catalog-more_link').hide();
        } else {
          $(document).find('.catalog-more_link').show();
        }
      });
      $(document).on('click', '.catalog-more_link', function (e) {
        e.preventDefault();
        catalogCardShow = catalogCardShow * 2;
        $('.catalog__list').find('.catalog-card').each(function (index) {
          if (index + 1 > catalogCardShow) {
            $(this).hide();
            $(this).addClass('hide-card');
          } else {
            $(this).show();
            $(this).removeClass('hide-card');
          }

          if (index + 1 < catalogCardShow) {
            $(document).find('.catalog-more_link').hide();
          } else {
            $(document).find('.catalog-more_link').show();
          }
        });
      });
    }
  } // кол-во отображаемых карточек для типа отображения "в колонку"


  catalogCardShowFunc();
  $('.table').each(function () {
    $(this).find('.table-body__row').each(function (index) {
      this.style.order = index;
    });
  }); // установка order при загрузке для элементов таблицы по умолчанию

  $('.hero-form').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this),
        action = $(this).attr('action'),
        formDataArr = [];

    var _iterator = _createForOfIteratorHelper(formData.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pair = _step.value;
        formDataArr.push(_defineProperty({}, pair[0], pair[1]));
        localStorage.setItem(pair[0], pair[1]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    localStorage.setItem('formData', formDataArr);
    window.location.pathname = action;
  }); // при отправке формы на главной записываем данные в localStorage

  if ($('section').is('.catalog')) {
    for (var key in localStorage) {
      var value = localStorage[key],
          item,
          text;

      switch (key) {
        case 'place':
          item = $(document).find('input[name="' + key + '"][value="' + value + '"]');
          text = item.closest('.select-content__wrapper').find('.select-content__radio').text();
          item[0].checked = true;
          item.closest('.select').find('.select-title').text(text);
          item.trigger('change');
          localStorage.removeItem(key);
          break;

        case 'space':
          item = $(document).find('input[name="' + key + '"][value="' + value + '"]');
          text = item.closest('.select-content__wrapper').find('.select-content__radio').text();
          item[0].checked = true;
          item.closest('.select').find('.select-title').text(text);
          item.trigger('change');
          localStorage.removeItem(key);
          break;

        case 'min_square':
          item = $(document).find('input[name="' + key + '"]');
          item.val(value);
          localStorage.removeItem(key);
          break;

        case 'rent_sale':
          item = $(document).find('input[name="' + key + '"][value="' + value + '"]');
          item[0].checked = true;
          item.trigger('change');
          localStorage.removeItem(key);
          break;
      } // подставляем параметры фильтра и запускаем событие change везде, кроме min_square

    }
  } // на странице каталога проверяем localStorage на данные для фильтра


  ;
  var groups, myMap, barsContent, MyBalloonLayout, MyBalloonContentLayout, myGeoObject;
  groups = [{
    center: [55.74814411, 37.54025512],
    geometryCord: [[[55.74818990, 37.53958650], [55.74848036, 37.54055210], [55.74811991, 37.54089885], [55.74782944, 37.53993325]]],
    image: '../img/bars/empire.png',
    alt: 'Империя',
    title: 'Деловой комплекс Империя',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.74846764, 37.54187356],
    geometryCord: [[[55.74816507, 37.54176628], [55.74849185, 37.54138004], [55.74869759, 37.54204522], [55.74838292, 37.54238855], [55.74816507, 37.54176628]]],
    image: '../img/bars/evolution.png',
    alt: 'Эволюция',
    title: 'Башня Эволюция',
    item1: 55,
    item2: 246,
    item3: 154000
  }, {
    center: [55.74721050, 37.53853910],
    geometryCord: [[[55.74746549, 37.53869660], [55.74712578, 37.53894680], [55.74695633, 37.53838890], [55.74729522, 37.53817432]]],
    image: '../img/bars/moscow.png',
    alt: 'Башня Город столиц Москва',
    title: 'Башня Город столиц Москва',
    item1: 55,
    item2: 246,
    item3: 154000
  }, {
    center: [55.74773093, 37.53883951],
    geometryCord: [[[55.74782775, 37.53834598], [55.74802140, 37.53898972], [55.74768252, 37.53935450], [55.74746549, 37.53869660]]],
    image: '../img/bars/saint-petersburg.png',
    alt: 'Башня Город столиц Санкт-Петербург',
    title: 'Башня Город столиц Санкт-Петербург',
    item1: 55,
    item2: 246,
    item3: 154000
  }, {
    center: [55.74700409, 37.53748507],
    geometryCord: [[[55.74705250, 37.53758699], [55.74648365, 37.53715784], [55.74636262, 37.53727586], [55.74647760, 37.53750116], [55.74654719, 37.53757627], [55.74665310, 37.53764600], [55.74674084, 37.53767819], [55.74690121, 37.53768892], [55.74705250, 37.53758699]]],
    image: '../img/bars/block-a.png',
    alt: 'Башня на Набережной Блок А',
    title: 'Башня на Набережной Блок А',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.74645409, 37.53638425],
    geometryCord: [[[55.74628464, 37.53689923], [55.74668405, 37.53616967], [55.74667195, 37.53597655], [55.74656302, 37.53601947], [55.74649040, 37.53608384], [55.74640567, 37.53623404], [55.74633305, 37.53636279], [55.74628464, 37.53655591], [55.74628464, 37.53689923]]],
    image: '../img/bars/block-b.png',
    alt: 'Башня на Набережной Блок B',
    title: 'Башня на Набережной Блок B',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.74708346, 37.53662028],
    geometryCord: [[[55.74691401, 37.53608384], [55.74687770, 37.53634133], [55.74688981, 37.53657737], [55.74692612, 37.53681340], [55.74697453, 37.53698506], [55.74705925, 37.53717818], [55.74708346, 37.53709235], [55.74710766, 37.53709235], [55.74714397, 37.53704944], [55.74719239, 37.53715672], [55.74725290, 37.53698506], [55.74726501, 37.53677049], [55.74727711, 37.53657737], [55.74724080, 37.53642716], [55.74719239, 37.53621259], [55.74713187, 37.53608384], [55.74704715, 37.53595509], [55.74702294, 37.53610530], [55.74696243, 37.53610530], [55.74691401, 37.53608384]]],
    image: '../img/bars/block-с.png',
    alt: 'Башня на Набережной Блок С',
    title: 'Башня на Набережной Блок С',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.74764064, 37.53499147],
    geometryCord: [[[55.74797953, 37.53404734], [55.74808801, 37.53499021], [55.74810011, 37.53574123], [55.74785805, 37.53584852], [55.74691446, 37.53471252], [55.74718073, 37.53436920], [55.74727755, 37.53460524], [55.74765275, 37.53419754], [55.74797953, 37.53404734]]],
    image: '../img/bars/empire.png',
    alt: 'IQ-квартал',
    title: 'IQ-квартал',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.74976605, 37.53383838],
    geometryCord: [[[55.74912704, 37.53399165], [55.74945380, 37.53364833], [55.74988949, 37.53349813], [55.75031307, 37.53472121], [55.74999658, 37.53505570], [55.74970554, 37.53413879], [55.74933036, 37.53452502], [55.74912704, 37.53399165]]],
    image: '../img/bars/empire.png',
    alt: 'МФК Око',
    title: 'МФК Око',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.75051489, 37.53644193],
    geometryCord: [[[55.75044228, 37.53515447], [55.75049068, 37.53530467], [55.75044228, 37.53534759], [55.75066011, 37.53607715], [55.75069642, 37.53603423], [55.75078113, 37.53627027], [55.75075693, 37.53631318], [55.75101107, 37.53712857], [55.75067222, 37.53747190], [55.75053909, 37.53749335], [55.75047858, 37.53732169], [55.75034546, 37.53745044], [55.75030915, 37.53745044], [55.75028495, 37.53740752], [55.75026074, 37.53736461], [55.75024864, 37.53732169], [55.75023654, 37.53721440], [55.75023654, 37.53715003], [55.75026074, 37.53708566], [55.75036966, 37.53695691], [55.75034546, 37.53687108], [55.75026074, 37.53695691], [55.75017603, 37.53672088], [55.75026074, 37.53661359], [55.75024864, 37.53657067], [55.75018813, 37.53663505], [55.75012762, 37.53667796], [55.75005501, 37.53665650], [55.75003080, 37.53661359], [55.75000660, 37.53654922], [55.75000660, 37.53646339], [55.75001870, 37.53639901], [55.75005501, 37.53633464], [55.75013972, 37.53624881], [55.74995819, 37.53564799], [55.75044228, 37.53515447]]],
    image: '../img/bars/empire.png',
    alt: 'Oko II',
    title: 'Oko II',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.74938341, 37.53691645],
    geometryCord: [[[55.74968597, 37.53678771], [55.74959416, 37.53663091], [55.74946103, 37.53654507], [55.74932790, 37.53652362], [55.74914637, 37.53658799], [55.74914637, 37.53686694], [55.74917057, 37.53710297], [55.74923108, 37.53738192], [55.74926686, 37.53754460], [55.74938841, 37.53744630], [55.74954704, 37.53727059], [55.74965269, 37.53701890], [55.74968597, 37.53678771]]],
    image: '../img/bars/empire.png',
    alt: 'Западный',
    title: 'Западный',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.74980699, 37.53779622],
    geometryCord: [[[55.74986750, 37.53708811], [55.74981200, 37.53716735], [55.74959416, 37.53751067], [55.74948523, 37.53783254], [55.74943182, 37.53805371], [55.74953766, 37.53814905], [55.74970760, 37.53821826], [55.74990123, 37.53819680], [55.75007825, 37.53813294], [55.75008277, 37.53789639], [55.75005404, 37.53759650], [55.74997385, 37.53729558], [55.74986750, 37.53708811]]],
    image: '../img/bars/empire.png',
    alt: 'Восточный',
    title: 'Восточный',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.74884868, 37.53480704],
    geometryCord: [[[55.74851549, 37.53394745], [55.74866072, 37.53394745], [55.74864862, 37.53381871], [55.74866072, 37.53375433], [55.74867283, 37.53373288], [55.74869703, 37.53371142], [55.74873334, 37.53373288], [55.74876965, 37.53375433], [55.74891488, 37.53401183], [55.74895119, 37.53409766], [55.74936909, 37.53553661], [55.74932068, 37.53568681], [55.74922386, 37.53551515], [55.74917545, 37.53570827], [55.74912704, 37.53581556], [55.74906652, 37.53585847], [55.74900601, 37.53590139], [55.74863083, 37.53547223], [55.74863083, 37.53527911], [55.74848560, 37.53527911], [55.74848560, 37.53461393], [55.74849770, 37.53461393], [55.74851549, 37.53394745]]],
    image: '../img/bars/empire.png',
    alt: 'Евразия',
    title: 'Евразия',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.75050279, 37.53948892],
    geometryCord: [[[55.75063591, 37.53895248], [55.75070852, 37.53897393], [55.75082954, 37.53929580], [55.75080534, 37.53946746], [55.75047858, 37.53983224], [55.75036966, 37.53983224], [55.75021233, 37.53998244], [55.75009131, 37.53987516], [55.75010341, 37.53961766], [55.75024864, 37.53944600], [55.75027285, 37.53929580], [55.75063591, 37.53895248]]],
    image: '../img/bars/empire.png',
    alt: 'Башня Меркурий',
    title: 'Башня Меркурий',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.75132606, 37.53265369],
    geometryCord: [[[55.75031377, 37.53318981], [55.75174180, 37.53298514], [55.75174180, 37.53309243], [55.75215326, 37.53302805], [55.75216536, 37.53289931], [55.75229848, 37.53289931], [55.75232268, 37.53287785], [55.75245580, 37.53287785], [55.75248000, 37.53285639], [55.75262522, 37.53283493], [55.75263732, 37.53247015], [55.75202014, 37.53208391], [55.75099149, 37.53221266], [55.75099149, 37.53249161], [55.75088257, 37.53249161], [55.75088257, 37.53251307], [55.75076155, 37.53266327], [55.75058002, 37.53266327], [55.75058002, 37.53268473], [55.75048320, 37.53268473], [55.75045900, 37.53272764], [55.75030167, 37.53272764], [55.75031377, 37.53318981]]],
    image: '../img/bars/empire.png',
    alt: 'Башня Север',
    title: 'Башня Север',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.75113243, 37.53370512],
    geometryCord: [[[55.75085408, 37.53342617], [55.75136236, 37.53336179], [55.75139867, 37.53404844], [55.75086618, 37.53411281], [55.75085408, 37.53394115], [55.75082988, 37.53394115], [55.75081777, 37.53366220], [55.75084198, 37.53364074], [55.75085408, 37.53342617]]],
    image: '../img/bars/empire.png',
    alt: 'Nova 1',
    title: 'Nova 1',
    item1: 60,
    item2: 239,
    item3: 203191
  }, {
    center: [55.75156809, 37.53533590],
    geometryCord: [[[55.75142287, 37.53499258], [55.75170121, 37.53497112], [55.75171331, 37.53567922], [55.75165280, 37.53567922], [55.75164070, 37.53572214], [55.75154389, 37.53574359], [55.75153179, 37.53570068], [55.75144707, 37.53570068], [55.75142287, 37.53499258]]],
    image: '../img/bars/empire.png',
    alt: 'Nova 2',
    title: 'Nova 2',
    item1: 60,
    item2: 239,
    item3: 203191
  }];

  if ($('#map').length > 0) {
    var init = function init() {
      // Создание карты.
      myMap = new ymaps.Map("map", {
        center: [55.74866991, 37.53878930],
        zoom: 16,
        controls: ['zoomControl']
      }, {
        searchControlProvider: 'yandex#search'
      });

      for (var i = 0; i < groups.length; i++) {
        barsContent = '' + '<li class="bars-content__item-inf__item">' + '<span>' + groups[i].item1 + '</span>' + '<span>этажей</span>' + '</li>' + '<li class="bars-content__item-inf__item">' + '<span>' + groups[i].item2 + '</span>' + '<span>метров</span>' + '</li>' + '<li class="bars-content__item-inf__item">' + '<span>' + groups[i].item3 + '</span>' + '<span>общая площадь, м²</span>' + '</li>';
        MyBalloonLayout = ymaps.templateLayoutFactory.createClass('<div class="bars-content__item-wrapper">' + '<a class="bars-content__item-close" href="#">&times;</a>' + '<div class="bars-content__item-triangle"></div>' + '<div class="bars-content__item" style="background-image:url(' + groups[i].image + ');">' + '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' + '</div>' + '</div>', {
          build: function build() {
            this.constructor.superclass.build.call(this);
            this._$element = $('.bars-content__item-wrapper', this.getParentElement());
            this.applyElementOffset();

            this._$element.find('.bars-content__item-close').on('click', $.proxy(this.onCloseClick, this));
          },
          clear: function clear() {
            this._$element.find('.bars-content__item-close').off('click');

            this.constructor.superclass.clear.call(this);
          },
          onSublayoutSizeChange: function onSublayoutSizeChange() {
            MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

            if (!this._isElement(this._$element)) {
              return;
            }

            this.applyElementOffset();
            this.events.fire('shapechange');
          },
          applyElementOffset: function applyElementOffset() {
            this._$element.css({
              left: -(this._$element[0].offsetWidth / 2) - this._$element[0].offsetWidth / 2,
              top: -(this._$element[0].offsetHeight + this._$element.find('.bars-content__item-triangle')[0].offsetHeight)
            });
          },
          onCloseClick: function onCloseClick(e) {
            e.preventDefault();
            this.events.fire('userclose');
          },
          getShape: function getShape() {
            if (!this._isElement(this._$element)) {
              return MyBalloonLayout.superclass.getShape.call(this);
            }

            var position = this._$element.position();

            return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[position.left, position.top], [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight + this._$element.find('.bars-content__item-triangle')[0].offsetHeight]]));
          },
          _isElement: function _isElement(element) {
            return element && element[0] && element.find('.bars-content__item-triangle')[0];
          }
        });
        MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass('<div class="bars-content__item-title">$[properties.balloonHeader]</div>' + '<ul class="bars-content__item-inf">$[properties.balloonContent]</ul>');
        myGeoObject = new ymaps.GeoObject({
          geometry: {
            type: "Polygon",
            coordinates: groups[i].geometryCord,
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
          },
          // Описываем свойства геообъекта.
          properties: {
            // Содержимое балуна.
            balloonHeader: groups[i].title,
            balloonContent: barsContent,
            hintContent: groups[i].alt
          }
        }, {
          fillColor: '#909090',
          strokeColor: '#696969',
          strokeWidth: 3,
          strokeStyle: 'solid',
          balloonShadow: false,
          balloonLayout: MyBalloonLayout,
          balloonContentLayout: MyBalloonContentLayout,
          balloonPanelMaxMapArea: 0
        });

        if (window.matchMedia('(max-width: 767.98px)').matches) {
          var newCenter = groups[i].center;
          myGeoObject.events.add('click', function () {
            myMap.setCenter(newCenter, 16);
          });
        } // Добавляем многоугольник на карту.


        myMap.geoObjects.add(myGeoObject);
      } // myMap.events.add('boundschange', function() {
      //     myMap.balloon.setPosition(myMap.getCenter());
      //     // myMap.center(myMap.getCenter());
      // });

    };

    ymaps.ready(init);
  }

  ;
});