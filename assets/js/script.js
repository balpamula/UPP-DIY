const menu = document.getElementById("menu");
const navbarMenu = document.querySelector(".navbar");

menu.onclick = function () {
    if (navbarMenu.style.display == "flex") {
        navbarMenu.style.display = "none";
    } else {
        navbarMenu.style.display = "flex";
    }
};

const menuBtn = document.getElementById("menuBtn");
const navbarButton = document.querySelector(".navbar-button");

menuBtn.onclick = function () {
    if (navbarButton.style.display == "flex") {
        navbarButton.style.display = "none";
    } else {
        navbarButton.style.display = "flex";
    }
};



$(document).ready(function () {
    var header = $("header");
    var button = $(".navbar-button .button");

    checkHeaderBackground();

    $(window).scroll(function () {
        checkHeaderBackground();
    });

    $(window).resize(function () {
        checkHeaderBackground();
    });

    function checkHeaderBackground() {
        if ($(window).scrollTop() > 0) {
            header.css({
                'background': '#01037C',
                'border-bottom': '2px solid #FFC632'
            });
            button.addClass('scrolled');
        } else {
            if ($(window).width() > 1080) {
                header.css({
                    'background': 'transparent',
                    'border-bottom': '2px solid #FFC632'
                });
                button.removeClass('scrolled');
            } else {
                header.css({
                    'background': '#01037C',
                    'border-bottom': '2px solid #FFC632'
                });
                button.addClass('scrolled');
            }
        }
    }
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            870: {
                items: 1.82
            },
            1024: {
                items: 2.33
            },
            1440: {
                items: 3.1
            }
        }
    });
});