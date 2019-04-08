
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
    });

    $('.open-submit-modal').click(function(e) {
        e.preventDefault();
        $('.fader').show();
        $('.submit-modal').show();
    });

    $('.open-checkout-modal').click(function(e) {
        e.preventDefault();
        $('.fader').show();
        $('.checkout-modal').show();
    });

    $('.open-gift-modal').click(function(e) {
        e.preventDefault();
        $('.fader').show();
        $('.gift-card-modal').show();
        var mySwiper = new Swiper ('.gift-card-slider .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 40,
            navigation: {
              nextEl: '.gift-card-slider .swiper-button-next',
              prevEl: '.gift-card-slider .swiper-button-prev',
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
    });

    $('.fader,.close-modal').click(function (e) {
        e.preventDefault();
        $('.submit-modal,.gift-card-modal,.checkout-modal').hide();
        $('.fader').hide();
    });
    
    $('.close-product').click(function() {
        $(this).parent().remove();
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

    var $sticky = $('.sticky');
    var $stickyrStopper = $('.sticky-stopper');
    
    if (!!$sticky.offset()) { // make sure ".sticky" element exists

    var generalSidebarHeight = $sticky.innerHeight();
    var stickyTop = $sticky.offset().top;
    var stickOffset = 0;
    var stickyStopperPosition = $stickyrStopper.offset().top;
    var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    var diff = stopPoint + stickOffset;

    $(window).scroll(function(){ // scroll event
      var windowTop = $(window).scrollTop(); // returns number

      if (stopPoint < windowTop) {
          $sticky.css({ position: 'absolute', top: diff });
      } else if (stickyTop < windowTop+stickOffset) {
          $sticky.css({ position: 'fixed', top: stickOffset });
      } else {
          $sticky.css({position: 'absolute', top: 'initial'});
      }
    });

  }
}

$(window).scroll(function(){
    var ws = $(window).scrollTop();
    $('#img_1').css({
        'transform': 'translate(0px, -'+ ws / 5 +'px)'
    });
    $('#img_2').css({
        'transform': 'translate(0px,  -'+ ws / 6.5 +'px)'
    });
    $('#img_3,#img_4,#img_5,#img_6').css({
        'transform': 'translate(0px, -'+ ws / 7.5 +'px)'
    });
    $('#mob_image').css({
        'transform': 'translate(0px, -'+ ws / 8 +'px)'
    });
});

$('.checkout .right-box').theiaStickySidebar({

  // container element
  'containerSelector': '.checkout .left-box',

  // top/bottom margiin in pixels
  'additionalMarginTop': 120,
  'additionalMarginBottom': 0,

  // auto up<a href="https://www.jqueryscript.net/time-clock/">date</a> height on window resize
  'updateSidebarHeight': false,

  // disable the plugin when the screen size is smaller than...
  'minWidth': 768,

  // disable the plugin on responsive layouts
  'disableOn<a href="https://www.jqueryscript.net/tags.php?/Responsive/">Responsive</a>Layouts': true,

  // or 'stick-to-top', 'stick-to-bottom'
  'sidebarBehavior': 'modern',

  // or 'absolute'
  'defaultPosition': 'relative',

  // namespace
  'namespace': 'TSS'
  
});