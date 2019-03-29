
// Page init function
$(document).ready(initPage);

function initPage() {
    $('.menu-mobile').click(function () {
    	$('#myMenu').show().addClass('flex');
    });
    $('.close-menu').click(function () {
        $('#myMenu').hide().removeClass('flex');
    });
    
    $('.open-drop').click(function() {
        $(this).parent().toggleClass('open').children('.label-holder').slideToggle();
    });
    $('.filter-link').click(function(e) {
        e.preventDefault();
        $('.filter-box').show();
    });
    $('.close-filter').click(function() {
        $('.filter-box').hide();
    });
    $('.show-btn').click(function(e) { 
        e.preventDefault();
        $(this).toggleClass('rotate');
        $('.show-more').toggleClass('show-less');
    })    
    var mySwiper = new Swiper ('.brand-slider .swiper-container', {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 40,
        pagination: {
            el: '.brand-slider .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">- 0' + (index + 1) + '</span>';
            },
        },
        navigation: {
          nextEl: '.brand-slider .swiper-button-next',
          prevEl: '.brand-slider .swiper-button-prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 20
            }
        }
    })

    var mySwiper = new Swiper ('.contact-slider .swiper-container', {
        direction: 'vertical',
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.contact-slider .swiper-button-next',
          prevEl: '.contact-slider .swiper-button-prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 40
            }
        }
    })

    var mySwiper = new Swiper ('.brand-product-slider .swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 60,
        breakpoints: {
            768: {
                direction: 'horizontal',
                spaceBetween: 20
            }
        },
        pagination: {
            el: '.brand-product-slider .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"> 0' + (index + 1) + ' -</span>';
            },
        },
        navigation: {
          nextEl: '.brand-product-slider .swiper-button-next',
          prevEl: '.brand-product-slider .swiper-button-prev',
        },
    })

    var mySwiper = new Swiper ('.top-sale-slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.top-sale-slider .swiper-button-next',
          prevEl: '.top-sale-slider .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            420: {
                slidesPerView: 1
            }
        }
    })


    var mySwiper = new Swiper ('.new-slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.new-slider .swiper-button-next',
          prevEl: '.new-slider .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            420: {
                slidesPerView: 1
            }
        }
    })

    var mySwiper = new Swiper ('.volume-holder .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.volume-holder .swiper-button-next',
          prevEl: '.volume-holder .swiper-button-prev',
        },
        breakpoints: {
            420: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    })

    var mySwiper = new Swiper ('.also-slider .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 40,
        navigation: {
          nextEl: '.also-slider .swiper-button-next',
          prevEl: '.also-slider .swiper-button-prev',
        },
        breakpoints: {
            680: {
                slidesPerView: 2
            },
            420: {
                slidesPerView: 1
            }
        }
    })
    
    $('.add').click(function () {
        if ($(this).prev().val() < 99) {
        $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });

    $('.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })   
}

$(window).scroll(function(){
    var ws = $(window).scrollTop();
    $('#img_1').css({
        'transform': 'translate(0px, -'+ ws / 1.2 +'px)'
    });
    $('#img_2').css({
        'transform': 'translate(0px,  -'+ ws / 2.5 +'px)'
    });
    $('#img_3,#img_4,#img_5,#img_6').css({
        'transform': 'translate(0px, -'+ ws / 3 +'px)'
    });
    $('#mob_image').css({
        'transform': 'translate(0px, -'+ ws / 8 +'px)'
    });
});


