"use strict";

$(function() {
    var win = $(window);
    var body = $('body');
    var html = $('html'); // const imgLazy         = $('.lazy')

    var wrap = $('.wrap'); // const barSide      = $('.side-bar')

    var toTop = $('.toTop'); // const scrollD      = $('.btn-scroll');

    new WOW().init();

    function navH(i) {
        $('.navbar .navbar-nav').innerHeight(i);
    }

    var menuToggler = $('.navbar-toggler');
    var menuCollapse = $('.navbar-collapse');
    enquire.register('screen and (min-width: 992px)', {
        match: function match() {
            navH('auto');
            $(window).resize(function() {
                navH('auto');
                if (body.hasClass('overlay')) {
                    body.removeClass('overlay');
                }
            }); // $('#navbarToggler').collapse('hide');
        }
    }).register('screen and (max-width: 991px)', {
        match: function match() {
            // Menu start
            var winH = $(window).innerHeight();
            var headH = $('.header').height();
            var fullH = winH - headH;
            navH(fullH);
            window.addEventListener('resize', function() {
                listenFunction('resize');
            });
            window.addEventListener('orientationchange', function() {
                listenFunction('orientationchange');
            });

            function listenFunction(value) {
                var winH2 = $(window).innerHeight();
                var headH2 = $('.header').height();
                var fullH2 = winH2 - headH2;

                if (value == 'resize') {
                    navH(fullH2);
                    // console.log(value);
                } else if (value == 'orientation') {
                    navH(fullH2);
                    // console.log(value);
                }
            }

            menuToggler.on('click', function() {
                var overlay = $('<div>').addClass('navbar-overlay');

                if (menuCollapse.hasClass('show')) {
                    body.removeClass('overlay');
                    return wrap.find('.navbar-overlay').remove();
                } else {
                    body.addClass('overlay');
                    wrap.append(overlay);
                }
            }); // dropdown submenu START

            $('.navbar .dropdown-toggle').off().click(function(e) {
                e.preventDefault();
                var subMenu = $(this).next('.dropdown-menu');

                if (!subMenu.hasClass('show')) {
                    $(this).parents('.dropdown-menu').first().find('.open').removeClass('open');
                    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
                }

                subMenu.toggleClass('show');
                $(this).toggleClass('open');
                return false;
            });
            $('.navbar .dropdown').on('hidden.bs.dropdown', function(e) {
                $('.show').removeClass('show');
                $('.open').removeClass('open');
            });
            $('#navbarToggler').on('hidden.bs.collapse', function() {
                $('.nav-link').dropdown('hide');
                return false;
            });
        }
    });

    // Anchor point
    $('.navbar-nav li a').on('click', function() {
        //繫結點選事件
        $('.navbar-nav li a').parent().removeClass('active');
        $(this).parent().addClass('active');
        var i = this.id.substr(3); // alert(i);

        var haha = $('.sec' + i).offset().top; //獲取對應元素劇情螢幕頂部的距離
        // $('html,body').animate({
        //     scrollTop: haha - 80,
        // }, 800); //動畫出爐

        if (win.width() <= 991) {
            $('.navbar-toggler').click();
            $('html,body').animate({
                scrollTop: haha - 60
            }, 800); //動畫出爐
        } else {
            $('html,body').animate({
                scrollTop: haha - 80
            }, 800); //動畫出爐
        }
    }); // Anchor point end

    $("#about .btn-store-choose").click(function() {
        var n = this.id.substr(8);
        $(".btn-store-choose").removeClass('active'); // $("this").addClass('active');

        $(".aboutInfo .item").css("display", "none");
        $('#about' + n).fadeIn().addClass('active');
        $('#btnstore' + n).addClass('active');
    }); // news pop

    $(".btn_news").click(function() {
        $('#popNews').fadeIn();
        $('body').addClass('over_hid');
    });
    $(".news-swiper .swiper-slide img").click(function() {
        $('#popNews .popCon img').attr('src', $(this).attr('src'));
        $('#popNews').fadeIn();
        $('body').addClass('over_hid');
    });
    $("#popNews .btn_close").click(function() {
        $('#popNews').fadeOut();
        $('body').removeClass('over_hid');
    }); // news pop end
    // swiper

    var bannerswiper = new Swiper(".banner-swiper", {
        spaceBetween: 0,
        // slidesPerView: 2,
        loop: true,
        // centeredSlides: true, //起始會居中,需有slidesPerView
        // autoplay: {
        //     delay: 2000, //每個Slide停留多久
        //     disableOnInteraction: false //拖動或點擊停止自動輪播
        // },
        pagination: {
            el: ".banner-swiper .swiper-pagination",
            clickable: true
        }

    });
    var newsswiper = new Swiper(".news-swiper", {
        // spaceBetween: 50,
        slidesPerView: 3,
        // loop: true,
        // centeredSlides: true, //起始會居中,需有slidesPerView
        // autoplay: {
        //     delay: 2000, //每個Slide停留多久
        //     disableOnInteraction: false //拖動或點擊停止自動輪播
        // },
        // pagination: {
        //     el: ".banner-swiper .swiper-pagination",
        //     clickable: true
        // },
        navigation: {
            nextEl: "#news .swiper-button-next",
            prevEl: "#news .swiper-button-prev"
        },
        breakpoints: {
            // when window width is >= 0px
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 84
            }
        }
    }); //store

    var swiper,
        storeData = [],
        clickStoreData = [];
    axios.get('./js/plugin/storeAPI_sw.json').then(function(response) {
        storeData = response.data;
        renderStoreList(storeData, 0);
    })["catch"](function(error) {
        // console.error(error);
    });
    $('#btnStore').on('click', 'a', function(e) {
        // var p = $(this);
        // alert(p);
        $('#btnStore a').removeClass('active');
        renderStoreList(storeData, $(this).index());
    });
    // data[langCount]['lang']
    function renderStoreList(data, id) {
        // console.log(id);
        var str = '',
            MenuList = '';
        var ItemVal;
        var langCount;
        if (lang == 'tw') {
            langCount = 0;


        } else {
            langCount = 1;
        }

        for (var iCount = 0; iCount < data[langCount]['lang'].length; iCount++) {
            MenuList += '<a class="btn btn-store-choose" href="javascript:void(0)">' + data[langCount]['lang'][iCount]["area"] + '</a>';

            if (iCount == id) {
                for (var jCount = 0; jCount < data[langCount]['lang'][id]["store"].length; jCount++) {
                    ItemVal = data[langCount]['lang'][id]["store"];
                    str += '<div class="swiper-slide"><div class="img_wrap"><img class="img-fluid" src="' + ItemVal[jCount]["imgUrl"] + '" alt="' + ItemVal[jCount]["storeTitle"] + '"><div class="btn_map"><a href="' + ItemVal[jCount]["googleMap"] + '" target="_blank"> </a></div></div><h3>' + ItemVal[jCount]["storeTitle"] + '<br><p>' + ItemVal[jCount]["address"] + '</p></h3><div class="storeContact"><p class="phone">' + ItemVal[jCount]["tel"] + '</p><p class="bh">' + ItemVal[jCount]["workTime"] + '</p></div> </div>';
                }
            }
        }

        $('#btnStore').html(MenuList);
        $('#btnStore a').eq(id).addClass('active');
        $('.store-swiper .swiper-wrapper').html(str);
        storeswiper.update();
    }

    var storeswiper = new Swiper(".store-swiper", {
        // spaceBetween: 50,
        // slidesPerView: 3,
        // loop: true,
        // centeredSlides: true, //起始會居中,需有slidesPerView
        // autoplay: {
        //     delay: 2000, //每個Slide停留多久
        //     disableOnInteraction: false //拖動或點擊停止自動輪播
        // },
        // pagination: {
        //     el: ".banner-swiper .swiper-pagination",
        //     clickable: true
        // },
        navigation: {
            nextEl: "#store .swiper-button-next",
            prevEl: "#store .swiper-button-prev"
        },
        breakpoints: {
            // when window width is >= 320px
            // when window width is >= 0px
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 84
            }
        }
    });
});