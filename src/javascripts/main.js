
// Page init function
$(document).ready(initPage);

function initPage() {
    $('.menu-mobile').click(function () {
    	$('.fader').toggleClass('show');
    	$('#myMenu').toggleClass('show-menu');
    });
    $('.fader').click(function () {
    	$('.fader').removeClass('show');
    	$('#myMenu').removeClass('show-menu');
    });
    $('#myMenu a').click(function() {
    	$('#myMenu').removeClass('show-menu');
    	$('.fader').removeClass('show');
    });
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
    })

    var mySwiper = new Swiper ('.brand-product-slider .swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 60,
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
    })

    var mySwiper = new Swiper ('.new-slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.new-slider .swiper-button-next',
          prevEl: '.new-slider .swiper-button-prev',
        },
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

    });
