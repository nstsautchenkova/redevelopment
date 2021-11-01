/*!              !*/
/*!   MAIN.JS    !*/
/*!              !*/


// Menu
$(document).on("ready", function () {
    $(".menu .trigger-menu").click(function () {
        $(this).toggleClass('op');
        $(".menu").toggleClass("menu-open");
        $('.menu .hamburger-menu__bar').toggleClass('animate');
        $('.wrapper').toggleClass('menu-open');
        $('body').toggleClass('menu-open');
    });
});

// FORM VALID 
$('.form-submit').click(function () {
    var form = $(this).parents('.form');
    var formAttr = $(this).parents('.form').attr("data-form");
    form.addClass(formAttr);

    var formClass = '.' + formAttr;
    var input = $(formClass + ' ' + '.form-required');
    var btn = $(formClass + ' ' + '.form-submit');

    var flag = true;

    input.each(function (i) {
        if (this.value == '') {
            $(this).parents('.form-group').addClass('validation-error');
            flag = false;
        } else {
            $(this).parents('.form-group').removeClass('validation-error');
        }
    });

    if (!flag) {
        btn.attr('disabled', 'disabled');
    }
    if (flag) {
        btn.attr('disabled', false);
        form.addClass('form-valid');
    }

    input.change(function () {
        $(this).parents('.form-group').removeClass('validation-error');
        $(this).parents('.form-group').removeClass('group-validation');

        if ($(formClass + ' ' + '.form-group').hasClass("group-validation")) {
            btn.attr('disabled', 'disabled');
        } else {
            btn.attr('disabled', false);
            form.addClass('form-valid');
        }
    });
});

// MODAL
$('.modal .form-submit').click(function () {
    var modalName = $(this).parents('.modal').attr("data-modal");
    var modalSend = 'modal-send__' + modalName;

    if ($('.modal .form').hasClass("form-valid")) {
        $('.modal .form-submit').attr('data-toggle', 'modal');
        $('.modal .form-submit').attr('data-target', '.modal-send');
        $('.modal .form-submit').attr('data-dismiss', 'modal');

        $('.modal-send').attr('data-name', modalSend);
    }
});


$(window).on("load", function () {
    $(".scroll-y").mCustomScrollbar();
});

// accordion
$(document).ready(function () {
    $(".accordion__tit").click(function () {
        $(this).siblings(".accordion__description").slideToggle('medium');
        $(this).toggleClass('active');
    });
});


// anchor
const smoothLinks = document.querySelectorAll('.anchor');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



