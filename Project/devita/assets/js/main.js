(function($) {
    'use strict';
    
    
    /* Notification */
    $('.notification-close button').on('click', function() {
        $('.notification-section').slideUp();
    });
    
    /* Newsletter */
    $('.newsletter-close button').on('click', function() {
        $('.newsletter-section').slideUp();
    });
    
    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });
    
    /* Cart */
    $(".language-click , .icon-cart , .icon-setting").on("click", function() {
        $(this).parent().find('.language-dropdown , .shopping-cart-content , .setting-wrapper').slideToggle('medium');
    })
    
    /* Slider active */
    $('.slider-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* Best selling active */
    $('.best-selling-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 3,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1100: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    
    /* Best selling active 3 */
    $('.best-selling-active-3').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 2,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1100: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    })
    
    /* Best selling active 4 */
    $('.best-selling-active-4').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 2,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1100: {
                items: 1
            },
            1200: {
                items: 1
            },
            1500: {
                items: 2
            }
        }
    })
    
     /* Headphone slider active */
    $('.headphone-slider-active').each(function(){
        var proSlideNav = $(this).siblings('.product-slider-nav');
        $(this).owlCarousel({
            navContainer: proSlideNav,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            item: 5,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        })
    })
    
    /* sunglass-slider-active */
    $('.sunglass-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 5,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
    
    /* Watch slider active */
    $('.watch-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 5,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1280: {
                items: 4
            },
            1500: {
                items: 5
            }
        }
    })
    
     /* headphone-slider-active-2 */
    $('.headphone-slider-active-2').each(function(){
        var proSlideNav = $(this).prev('.product-slider-nav');
        $(this).owlCarousel({
            navContainer: proSlideNav,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            item: 4,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    })
   
    
     /* featured-product-activee */
    $('.featured-product-active').each(function(){
        var proSlideNav = $(this).prev('.product-slider-nav-2');
        $(this).owlCarousel({
            navContainer: proSlideNav,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            item: 4,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    })
   
    /* Arrivals product active 2 */
    $('.arrivals-product-active-2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 5,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
    
    /* Product img slider */
    $('.product-img-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="cr-navigation cr-navigation-prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="cr-navigation cr-navigation-next"><i class="fa fa-angle-right"></i></span>',
    });
    
    
    /* Deals slider active */
    $('.deals-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    /* latest products active */
    $('.latest-products-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 20,
            },
            992: {
                items: 2,
                margin: 20,
            },
            1200: {
                items: 1
            }
        }
    })
    /* Deals slider active */
    $('.deals-slider-active-2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2,
                margin: 20,
            },
            768: {
                items: 2,
                margin: 20,
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* related-product-active */
    $('.related-product-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* Sidebar blog active */
    $('.sidebar-blog-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* Special book active */
    $('.special-book-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* Product slider active 2 */
    $('.product-slider-active-2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* Best selling active 2 */
    $('.best-selling-active-2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
     /* featured-book-active */
    $('.featured-book-active').each(function(){
        var proSlideNav = $(this).prev('.product-slider-nav-2');
        $(this).owlCarousel({
            navContainer: proSlideNav,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            item: 5,
            margin: 10,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        })
    })
    
        /* bestselling-cycle-active */
    $('.bestselling-cycle-active').each(function(){
        var proSlideNav = $(this).prev('.product-slider-nav');
        $(this).owlCarousel({
            navContainer: proSlideNav,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            item: 4,
            margin: 22,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        })
    })
  
    
    /* Blog slider active */
    $('.blog-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        margin: 30,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
    
    /* Blog slider active 2 */
    $('.blog-slider-active-2').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        margin: 30,
        item: 2,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
    
    /* Blog slider active watch */
    $('.blog-slider-active-watch').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        margin: 30,
        item: 2,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 30,
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    })
    
    
    /* Blog slider active 3 */
    $('.blog-slider-active-3').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        margin: 30,
        item: 3,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    
    
    /* Blog slider active 4 */
    $('.blog-slider-active-4').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        margin: 30,
        item: 2,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2,
                margin: 10,
            },
            1000: {
                items: 2
            }
        }
    })
    
    /* blog-slider-active-5 */
    $('.blog-slider-active-5').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 30,
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    
    
    
    
    
    
    
    /* Brand logo active */
    $('.brand-logo-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        item: 5,
        margin: 100,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
                margin: 30,
            },
            768: {
                items: 4,
                margin: 30,
            },
            992: {
                items: 4,
                margin: 100,
            },
            1200: {
                items: 5
            }
        }
    })
    
    /*---------------------
        Countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
        });
    });
    
    
    /* Hover 3d init for tilt */
    if ($('.tilter').length > 0) {
        $('.tilter').tilt({
            maxTilt: 40,
            perspective: 800,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 800,
            transition: true,
        });
    }
    
    /* Testimonial active */
    $('.testimonial-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    /* Testimonial active */
    $('.product-details-slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        item: 3,
        margin:30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    
    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    /*---------------------
        Price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 0,
            max: 1200,
            values: [300, 800],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });
    
    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '60px',
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="fa fa-angle-right"></i></span>',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
   
    
    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider-2').slick({
        infinite: true,
        slidesToShow: 3,
        vertical: true,
        slidesToScroll: 1,
        centerPadding: '60px',
        prevArrow: '<span class="product-dec-icon product-dec-prev"><i class="fa fa-angle-up"></i></span>',
        nextArrow: '<span class="product-dec-icon product-dec-next"><i class="fa fa-angle-down"></i></span>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    /*--------------------------
        Product Zoom
	---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });
    
    
    
    /*------ Wow Active ----*/
    new WOW().init();
    
    /* counterUp */
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
    
    /*-------------------------
      Showlogin toggle function
    --------------------------*/
    $('#showcat').on('click', function(e) {
        e.preventDefault();
        $('#hidecat').slideToggle(900);
    });
    
    /* Category Dropdown Menu  */
    if ($(window).width() < 992) {
        function sidemenuDropdown() {
            var $this = $('.category-menu');
            $this.find('nav.cate-menu-nav .cr-dropdown').find('ul.left-menu').css('display', 'none');
            $this.find('nav.cate-menu-nav .cr-dropdown ul').slideUp();
            $this.find('nav.cate-menu-nav .cr-dropdown a').on('click', function(e) {
                e.preventDefault();
                $(this).parent('.cr-dropdown').children('ul.category-small-device').slideToggle();
            });
            $this.find('nav.cate-menu-nav .cr-dropdown ul.category-small-device .cr-sub-dropdown ul').css('display', 'none');
            $this.find('nav.cate-menu-nav .cr-dropdown ul.category-small-device .cr-sub-dropdown a').on('click', function(e) {
                e.preventDefault();
                $(this).parent('.cr-sub-dropdown').children('ul').slideToggle();
            });
        }
        sidemenuDropdown();
    }

    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
          enabled: true,
        }
    });
    /*--
    Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    
$('.sidebar-active').stickySidebar({
    topSpacing: 80,
    bottomSpacing: 30,
    minWidth: 767,
});    
    
    
    
    
    
    


})(jQuery);