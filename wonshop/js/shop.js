$( function() {
    $( ".menu-price" ).slider({
      range: true,
      min: 0,
      max: 300,
      values: [ 15, 200 ],
      slide: function( event, ui ) {
        $( "#min-count" ).val( "$" + ui.values[ 0 ] );
        $( "#max-count" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#min-count" ).val( "$" + $( ".menu-price" ).slider( "values", 0 ) )
    $( "#max-count" ).val( "$" + $( ".menu-price" ).slider( "values", 1 ) )
} );

$('.size input[type="checkbox"]').on('change', function() {
    $('.size input[type="checkbox"]').not(this).prop('checked', false);
});

$('.shop-carousel').owlCarousel({
    loop:true,
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
            items:3,
            nav:false,
            margin:30
        }
    }
})