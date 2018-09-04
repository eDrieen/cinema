/*jshint esversion: 6 */

$('#main_slider').owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    autoplayTimeout: 2000,
    dotsEach: 2,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1281: {
            items: 5

        }
    }
});

$('#timetable_slider').owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    autoplayTimeout: 3500,
    navText: ["<img src='img/chevron-left.png'>", "<img src='img/chevron-right.png'>"],
    dots: false,
    items: 1,
    responsive: {
        0: {
            items: 1,
        }
    }
});