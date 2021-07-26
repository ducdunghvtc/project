$('.product-carousel').owlCarousel({
    margin:0,
    nav:true,
    navText : ['<i class="fas fa-chevron-left"aria-hidden="true"></i>',
    '<i class="fas fa-chevron-right"aria-hidden="true"></i>'],
    dots:false,
    autoplay:false,
    URLhashListener:true,
    startPosition: 'URLHash',
    responsiveClass:true,
    stagePadding: 10,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        },
        1920:{
          items:4,
        }
    }
})
$(document).ready(function() {
	$('.thumbnail img').click(function() {
        $('.thumbnail img.img-selected').removeClass('img-selected').addClass('img-not-selected');
        $(this).removeClass('img-not-selected').addClass('img-selected'); 
    })
});