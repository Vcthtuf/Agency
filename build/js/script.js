let menu = $("#menu");

    $(window).scroll(function() {
        var top = $(this).scrollTop();
        if ( top >= 700 ) {
        menu.addClass('header_nav_scroll'); 
        } else if ( top <= 700 ) {
        menu.removeClass('header_nav_scroll'); 
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

