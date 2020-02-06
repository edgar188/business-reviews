$(document).ready(function() {
    // Hero slider handler
    $('#hr-sld').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: [$('#hr-arrow-prev'), $('#hr-arrow-next')],
        items: 1,
        autoplay: true,
        smartSpeed: 1500
    })

    // Partners slider handler
    $('#prt-sld').owlCarousel({
        loop: true,
        items: 4,
        margin: 50,
        dots: false,
        nav: true,
        navText: [$('#prt-arrow-prev'), $('#prt-arrow-next')],
        autoWidth: true,
        lazyLoad: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    })
})


