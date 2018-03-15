/*global $,document, window*/
$(document).ready(function () {
    "use strict";
    var windowh = $(window).height(),
        upperhight = $(".upper-bar").innerHeight(),
        navhight = $(".navbar").innerHeight();
    $(".slider, .carousel-item").height(windowh - (upperhight + navhight));

    $(".overview button").hover(function () {
        $('.overview button span:first-child').animate({
            width: '100%'
        }, 500);
    }, function () {
        $('.overview button span:first-child').animate({
            width: '0'
        }, 500);
    });

    // shuffle imgs 

    $(".featured-work ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === "all") {
            $(".shufl-imgs .col-md").css("opacity", "1");
        } else {
            $(".shufl-imgs .col-md").css("opacity", ".09");
            $($(this).data("class")).parent().css("opacity", "1"); // $(this).data("class") = .col-md  دة العنصر المرتبط  بليست بلداتا كلاس

        }
    });

    // make bdoy scroll

    $("#main-nav  li").click(function (e) {
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        $("body, html").animate({
            scrollTop: $($(this).data("scroll")).offset().top /// important
        }, 1000);

    });
    
    // click button to scroll top
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $(".scroll-top i").fadeIn(500);
        } else {
            $(".scroll-top i").fadeOut(500);

        }
    });
    
    $(".scroll-top i").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 500);
    });
    
    
    
    
    
    
    
    $("body").niceScroll({
        cursorcolor: '#1abc9c',
        cursorborder: '0'
    });
});
