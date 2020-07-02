let menu = $("#menu");
let hamburger = $('#hamburger');
let heightHeader = parseInt($('#home').css('height'))+ parseInt($('#home').css('padding-top'))+ parseInt($('#home').css('padding-bottom'));
console.log(heightHeader);

    $(window).scroll(function() {
        var top = $(this).scrollTop();
        if ( top >= heightHeader ) {
        menu.addClass('header_nav_scroll');
        hamburger.addClass('hamburger_scroll');
        } else if ( top <= heightHeader ) {
        menu.removeClass('header_nav_scroll');
        hamburger.removeClass('hamburger_scroll');
        }
    });

$(document).ready(function() { 
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
});

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
})

