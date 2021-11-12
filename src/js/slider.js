/*!              !*/
/*!   SLIDER.JS    !*/
/*!              !*/

var windowWidth = window.innerWidth;


// .advantage--swiper
$(".advantage--swiper-container").addClass('swiper-container');
$(".advantage--swiper-wrapper").addClass('swiper-wrapper');
$(".advantage--swiper-slide").addClass('swiper-slide');

var advantage = new Swiper(".advantage--swiper-container", {
    slidesPerView: 'auto',
    spaceBetween: 15,
    freeMode: {
        enabled: true,
        minimumVelocity: 0.2,
        momentum: false,
    },
    scrollbar: {
        el: '.advantage--swiper-container .swiper-scrollbar',
        hide: false,
        draggable: true,
    },
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});


// certificate
var certificate = new Swiper(".certificate", {
    slidesPerView: 'auto',
    spaceBetween: 30,

    centeredSlides: false,
    initialSlide: 1,

    navigation: {
        nextEl: ".certificate .swiper-button-next",
        prevEl: ".certificate .swiper-button-prev",
    },

    breakpoints: {
        1020: {
            spaceBetween: 30,
            centeredSlides: false,
            initialSlide: 1,
        },
        700: {
            spaceBetween: 20,
            centeredSlides: true,
            initialSlide: 2,
        },
        100: {
            spaceBetween: 15,
            centeredSlides: true,
            initialSlide: 2,
        },
    },
});

// portfolio
var portfolio = new Swiper(".portfolio", {
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 30,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
        },
        next: {
            shadow: true,
            translate: ["120%", 0, -500],
        },
    },

    navigation: {
        nextEl: ".portfolio .swiper-button-next",
        prevEl: ".portfolio .swiper-button-prev",
    },
});


//////////////////
// Adaptive Swiper
//////////////////

// .services--swiper
const servicesAddSwiper = () => {
    $(".services--swiper-container").addClass('swiper-container');
    $(".services--swiper-wrapper").addClass('swiper-wrapper');
    $(".services--swiper-wrapper").removeClass('services__row');
    $(".services--swiper-slide").addClass('swiper-slide');

    var services = new Swiper(".services--swiper-container", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: {
            enabled: true,
            minimumVelocity: 0.2,
            momentum: false,
        },
        scrollbar: {
            el: '.services--swiper-container .swiper-scrollbar',
            hide: false,
            draggable: true,
        },
        breakpoints: {
            1000: {
                spaceBetween: 30,
            },
            768: {
                spaceBetween: 15,
            },
            100: {
                spaceBetween: 15,
            },
        },
    });
}
const servicesRemoveSwiper = () => {
    $(".services--swiper-container").removeClass('swiper-container');
    $(".services--swiper-wrapper").removeClass('swiper-wrapper');
    $(".services--swiper-wrapper").addClass('services__row');
    $(".services--swiper-slide").removeClass('swiper-slide');
}


// .causes--swiper
const causesAddSwiper = () => {
    $(".causes--swiper-container").addClass('swiper-container');
    $(".causes--swiper-wrapper").addClass('swiper-wrapper');
    $(".causes--swiper-slide").addClass('swiper-slide');

    var causes = new Swiper(".causes--swiper-container", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: {
            enabled: true,
            minimumVelocity: 0.2,
            momentum: false,
        },
        scrollbar: {
            el: '.causes--swiper-container .swiper-scrollbar',
            hide: false,
            draggable: true,
        },
        breakpoints: {
            1000: {
                spaceBetween: 30,
            },
            100: {
                spaceBetween: 15,
            },
        },
    });
}
const causesRemoveSwiper = () => {
    $(".causes--swiper-container").removeClass('swiper-container');
    $(".causes--swiper-wrapper").removeClass('swiper-wrapper');
    $(".causes--swiper-slide").removeClass('swiper-slide');
}

// .when-need

const whenNeedAddSwiper = () => {
    $(".when-need--swiper-container").addClass('swiper-container');
    $(".when-need--swiper-wrapper").addClass('swiper-wrapper');
    $(".when-need--swiper-slide").addClass('swiper-slide');

    var whenNeed = new Swiper(".when-need--swiper-container", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: {
            enabled: true,
            minimumVelocity: 0.2,
            momentum: false,
        },
        scrollbar: {
            el: '.when-need--swiper-container .swiper-scrollbar',
            hide: false,
            draggable: true,
        },
        breakpoints: {
            1000: {
                spaceBetween: 30,
            },
            100: {
                spaceBetween: 15,
            },
        },
    });
}
const whenNeedRemoveSwiper = () => {
    $(".when-need--swiper-container").removeClass('swiper-container');
    $(".when-need--swiper-wrapper").removeClass('swiper-wrapper');
    $(".when-need--swiper-slide").removeClass('swiper-slide');
}

// .working--swiper
const workingAddSwiper = () => {
    // .working
    $(".working--swiper-container").addClass('swiper-container');
    $(".working--swiper-wrapper").addClass('swiper-wrapper');
    $(".working--swiper-wrapper").removeClass('working__row');
    $(".working--swiper-slide").addClass('swiper-slide');

    var working = new Swiper(".working--swiper-container", {
        slidesPerView: 'auto',
        freeMode: {
            enabled: true,
            minimumVelocity: 0.2,
            momentum: false,
        },
        scrollbar: {
            el: '.working--swiper-container .swiper-scrollbar',
            hide: false,
            draggable: true,
        },
    });
}
const workingRemoveSwiper = () => {
    $(".working--swiper-container").removeClass('swiper-container');
    $(".working--swiper-wrapper").removeClass('swiper-wrapper');
    $(".working--swiper-wrapper").addClass('working__row');
    $(".working--swiper-slide").removeClass('swiper-slide');
}

// .benefits--swiper
const benefitsAddSwiper = () => {
    $(".benefits--swiper-container").addClass('swiper-container');
    $(".benefits--swiper-wrapper").addClass('swiper-wrapper');
    $(".benefits--swiper-slide").addClass('swiper-slide');

    var benefits = new Swiper(".benefits--swiper-container", {
        slidesPerView: 'auto',
        freeMode: {
            enabled: true,
            minimumVelocity: 0.2,
            momentum: false,
        },
        scrollbar: {
            el: '.benefits--swiper-container .swiper-scrollbar',
            hide: false,
            draggable: true,
        },
    });
}

const benefitsRemoveSwiper = () => {
    $(".benefits--swiper-container").removeClass('swiper-container');
    $(".benefits--swiper-wrapper").removeClass('swiper-wrapper');
    $(".benefits--swiper-slide").removeClass('swiper-slide');
}

window.onresize = function () {
    if (window.matchMedia("(max-width: 1450px)").matches) {
        servicesAddSwiper();
        causesAddSwiper();
        workingAddSwiper();
        whenNeedAddSwiper();
    } else {
        servicesRemoveSwiper();
        causesRemoveSwiper();
        workingRemoveSwiper();
        whenNeedRemoveSwiper();
    }

    if (window.matchMedia("(max-width: 1350px)").matches) {
        benefitsAddSwiper();
    } else {
        benefitsRemoveSwiper();
    }
};

if (window.matchMedia("(max-width: 1450px)").matches) {
    servicesAddSwiper();
    causesAddSwiper();
    workingAddSwiper();
    whenNeedAddSwiper();
} else {
    servicesRemoveSwiper();
    causesRemoveSwiper();
    workingRemoveSwiper();
    whenNeedRemoveSwiper();
}

if (window.matchMedia("(max-width: 1350px)").matches) {
    benefitsAddSwiper();
} else {
    benefitsRemoveSwiper();
}