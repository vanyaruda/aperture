$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [ '', ' ' ],
    autoplay: true,
    dots:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2
        },

        1000:{
            items:5
        }
    }
});
$( function() {
    $( "#accordion" ).accordion();
  });
});
