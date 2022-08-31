function tablePagination(pagNum, pagNumOld, parent, onFilter, onSorting) {
    var that = parent,
        quantity = 0,
        defaultPag = pagNumOld - pagNum, pagNew = 0, onFilterPagArr = [], onFilterPagNum, currentSecond, tabOrder;

    that.find('.pagination__link.pag_next').removeClass('disable');

    that.find('.table-body .table-body__row').each(function (index) {
        // собираем пагинацию в зависимости от условий
        if (onSorting && onFilter) { // если выбраны, и фильтр, и сортировка
            if ($(this).hasClass('onFilter')) {
                onFilterPagArr.push(index);
                onFilterPagNum = onFilterPagArr.length;
                tabOrder = parseInt(this.style.order);

                if (tabOrder >= pagNum) { // сравниваем полученные значения order у элементов с классом onFilter с кол-вом отображаемым на одной странице
                    $(this).hide();
                } else {

                    if (window.matchMedia('(min-width: 768px)').matches) {
                        this.style.display = 'grid'
                    } else {
                        this.style.display = 'flex'
                    }
                }
            } else {
                $(this).hide();
            }
        } else

        if (onFilter) { // если выбран только фильтр
            if ($(this).hasClass('onFilter')) {
                onFilterPagArr.push(index);
                onFilterPagNum = onFilterPagArr.length;

                if (onFilterPagNum <= pagNum) { // сравниваем кол-во элементов после применения фильтра с кол-вом отображаемым на одной странице
                    if (window.matchMedia('(min-width: 768px)').matches) {
                        this.style.display = 'grid'
                    } else {
                        this.style.display = 'flex'
                    }
                } else {
                    $(this).hide();
                }
            }
        } else

        if(onSorting) { // если выбрана только сортировка
            quantity++
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
            quantity++

            if (index + 1 > pagNum) { // сравниваем полученные значения order с кол-вом отображаемым на одной странице
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
        if((defaultPag === onFilterPagNum - 1 && defaultPag === currentSecond - 1) || onFilterPagNum === currentSecond) {
            that.find('.pagination__link').addClass('disable')
        }
        ((defaultPag === onFilterPagNum - 1) && (onFilterPagNum = onFilterPagNum - 1));
        ((defaultPag === currentSecond - 1) && (currentSecond = currentSecond - 1));
        that.find('.table-footer .pagination__text-total').text(onFilterPagNum);

        if (typeof (currentSecond) === 'undefined') {
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

        if($(this).hasClass('pag_next')) {
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
                                this.style.display = 'grid'
                            } else {
                                this.style.display = 'flex'
                            }
                        } else {
                            $(this).hide();
                        }
                    } else {
                        $(this).hide();
                    }
                } else

                if (onFilter) {
                    if ($(this).hasClass('onFilter')) {
                        onFilterPagArr.push(index);

                        for (let i = 0; i < onFilterPagArr.length; i++) {
                            var arrIndex = onFilterPagArr[i];
                            var item = that.find('.table-body .table-body__row')[arrIndex]

                            if(pagNumOld <= i + 1 && i + 1 < pagNew) {
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
                } else

                if (onSorting) {
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

                    quantity > (pagNew - 1) ? currentSecond = (pagNew - 1) : currentSecond = quantity;

                    (currentSecond === quantity && pagItem.addClass('disable'));
                    (currentSecond !== quantity && pagItem.removeClass('disable'));
                }

                else {
                    if(pagNumOld <= index + 1 && index + 1 < pagNew) {
                        if (window.matchMedia('(min-width: 768px)').matches) {
                            $(this).css('display', 'grid');
                        } else {
                            $(this).css('display', 'flex');
                        }
                    } else if (index + 1 < pagNumOld) {
                        $(this).hide()
                    }
                }
            });

            if (onFilter) {
                onFilterPagNum > (pagNew - 1) ? currentSecond = (pagNew - 1) : currentSecond = onFilterPagNum;

                (currentSecond === onFilterPagNum && pagItem.addClass('disable'));
                (currentSecond !== onFilterPagNum && pagItem.removeClass('disable'));
            } else {
                quantity > (pagNew - 1) ? currentSecond = (pagNew - 1) : currentSecond = quantity;

                (currentSecond === quantity && pagItem.addClass('disable'));
                (currentSecond !== quantity && pagItem.removeClass('disable'));
            }

            that.find('.table-footer .pagination__text-current').text(pagNumOld + '-' + currentSecond);

            pagNumOld = pagNew;
        } // клик на кнопку следующая страница

        if($(this).hasClass('pag_prev')) {
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
                                this.style.display = 'grid'
                            } else {
                                this.style.display = 'flex'
                            }
                        } else {
                            $(this).hide();
                        }
                    } else {
                        $(this).hide();
                    }
                } else

                if (onFilter) {
                    if ($(this).hasClass('onFilter')) {
                        onFilterPagArr.push(index);

                        for (let i = 0; i < onFilterPagArr.length; i++) {
                            var arrIndex = onFilterPagArr[i];
                            var item = that.find('.table-body .table-body__row')[arrIndex]

                            if(pagNumOld <= i + 1 && i + 1 < pagNew) {
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
                } else

                if (onSorting) {
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
                    if(pagNumOld <= index + 1 && index + 1 < pagNew) {
                        if (window.matchMedia('(min-width: 768px)').matches) {
                            $(this).css('display', 'grid');
                        } else {
                            $(this).css('display', 'flex');
                        }
                    } else if (index + 1 >= pagNew) {
                        $(this).hide()
                    }
                }
            });

            if (onFilter) {
                onFilterPagNum > (pagNew - 1) ? currentSecond = (pagNew - 1) : currentSecond = onFilterPagNum;
            } else {
                quantity > (pagNew - 1) ? currentSecond = (pagNew - 1) : currentSecond = quantity;
            }

            that.find('.table-footer .pagination__text-current').text(pagNumOld + '-' + currentSecond);

            (currentSecond === pagNum && pagItem.addClass('disable'));
            (currentSecond !== pagNum && pagItem.removeClass('disable'));


            pagNumOld = pagNew;
        } // клик на кнопку предыдущая страница
    });
}