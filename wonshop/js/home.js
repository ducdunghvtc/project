$(".banner-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    navText : ['<i class="fas fa-chevron-left"aria-hidden="true"></i>','<i class="fas fa-chevron-right"aria-hidden="true"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
        items: 1,
        nav: true,
        },
        600: {
        items: 1,
        nav: true,
        },
        1000: {
        items: 1,
        nav: true,
        },
  },
});
$('.owl-one').owlCarousel({
    loop:false,
    margin:30,
    dots:false,
    navText : ['<i class="fas fa-chevron-left"aria-hidden="true"></i>','<i class="fas fa-chevron-right"aria-hidden="true"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            margin:10
        },
        768:{
            items:2,
            nav:true,
            margin:10
        },
        1200:{
            items:4,
            nav:true,
            margin:30
        }
    }
})
$(".service-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
        items: 1,
        nav: false,
        autoplay:true
        },
        600: {
        items: 1,
        nav: false,
        autoplay:true
        },
        1200: {
        items: 3,
        nav: false,
        loop:false
        }
    },
});
$(".owl-two").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
        items: 1,
        nav: false,
        autoplay:true
        },
        768: {
        items: 2,
        nav: false,
        autoplay:true
        },
        1200: {
        items: 3,
        nav: false,
        loop:false
        }
    },
});
$(".owl-three").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
        items: 1,
        nav: false,
        autoplay:true
        },
        768: {
        items: 2,
        nav: false,
        autoplay:true
        },
        1200: {
        items: 3,
        nav: false,
        loop:false
        }
    },
});
$(".owl-four").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
        items: 1,
        nav: false,
        autoplay:true
        },
        768: {
        items: 3,
        nav: false,
        autoplay:true
        },
        1200: {
        items: 4,
        nav: false,
        autoplay:true
        },
        1920: {
        items: 6,
        nav: false,
        loop:false
        }
    },
});

$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList .list-group-item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > - 1)
    });
});



// scroll
AOS.init();