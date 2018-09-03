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

let icon = null;
let secondmenu = null;
let box_btn = null;
let box = null;
let cont = null;

document.addEventListener("DOMContentLoaded", function () {
    icon = document.querySelector(".icon");
    secondmenu = document.querySelectorAll(".secondmenu");
    box_btn = document.querySelectorAll(".box_icon");

    let plus_element = document.createElement("i");
    plus_element.classList.add("fas", "fa-plus");

    let minus_element = document.createElement("i");
    minus_element.classList.add("fas", "fa-minus");

    secondmenu = [...secondmenu];

    let menuStatus = false;

    icon.addEventListener("click", function () {
        if (!menuStatus) {
            for (let i = 0; i < secondmenu.length; i++) {
                secondmenu[i].style.display = "block";
            }
            menuStatus = true;
        } else {
            for (let i = 0; i < secondmenu.length; i++) {
                secondmenu[i].style.display = "none";
            }
            menuStatus = false;
        }
    });

});