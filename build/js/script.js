let menu = $("#menu");
let hamburger = $('#hamburger');
let heightHeader = parseInt($('#home').css('height')) + parseInt($('#home').css('padding-top')) + parseInt($('#home').css('padding-bottom'));

$(window).scroll(function () {
    var top = $(this).scrollTop();
    if (top >= heightHeader) {
        menu.addClass('header_nav_scroll');
        hamburger.addClass('hamburger_scroll');
    } else if (top <= heightHeader) {
        menu.removeClass('header_nav_scroll');
        hamburger.removeClass('hamburger_scroll');
    }
});

/*(document).ready(function() { 
    $("nav ul li a").click(function () { 
        elementClick = $(this).attr("href"); 
        destination = $(elementClick).offset().top; 
        $("body,html").animate({scrollTop: destination }, 800); 
    }); 
});

$(document).ready(function() { 
    $("footer ul li a").click(function () { 
        elementClick = $(this).attr("href"); 
        destination = $(elementClick).offset().top; 
        $("body,html").animate({scrollTop: destination }, 800); 
    }); 
});*/

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_menu'),
        menuItem = document.querySelectorAll('.header_item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header_menu_active');
        })
    })

    // slider of header

    let prev = document.querySelector('.icon-angle-left'),
        next = document.querySelector('.icon-angle-right'),
        position = document.querySelector('.slider__track'),
        slides = document.querySelectorAll('.slide'),
        indexSlide = 1;

    function showSlide(n) {

        if (n < 1) { indexSlide = slides.length; }
        if (n > (slides.length)) { indexSlide = 1; }

        position.style.right = (indexSlide - 1) * 100 + '%';

    };

    function plusSlides(n) {
        showSlide(indexSlide += n);
    };

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    // slider of section quotes

    let track = document.querySelector('.quotes__track'),
        quotes = document.querySelectorAll('.quote'),
        currentQuote,
        i = 1;

    function showQuotes(n) {


        if (n > quotes.length - 1) { i = 1; }
        // for (let i = 0; i < quotes.length; i++) {
        //     if (i.matches('text-align: center')) {
        //         console.log('Сейчас показывается ' + i + ' слайд');
        //     };
        // };
        track.style.transform = 'translateX(' + i * (-100) + '%)';
        // quotes[i - 1].style.order = i;


    };

    setInterval(function () { showQuotes(i); i++; }, 2000);



})

