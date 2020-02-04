// Hero slider handler
$('#hr-sld').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: [$('#arrow-prev'), $('#arrow-next')],
    items: 1 
})

// Partners slider handler
$('#prt-sld').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    responsive: {
        0:{
            items:1
        },
        480: {
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
