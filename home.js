$(document).ready(function() {
    var nav_button = $('.nav-button');
    nav_button.click(function() {

        if (!nav_button.hasClass('change')) {
            $('.nav-menu').addClass('gradient-background');
        } else {
            $('.nav-menu').removeClass('gradient-background');
        }

        nav_button.toggleClass('change');
    });

    $('.nav-link').click(function() {
        if (nav_button.hasClass('change')) {
            nav_button.click();
        }
    });
    var pos = $(window).scroll().scrollTop();

    if (pos >= 200) {
        $('.nav-menu').addClass('custom-navbar');
    } else {
        $('.nav-menu').removeClass('custom-navbar');
    }

    var width = $(window).width();

    $(window).scroll(function() {
        let pos = $(this).scrollTop();
        if (pos >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }


        if (width < 992) {


            if (pos >= 700) {
                var rowOfSolutions = $('#solutions-card').parent().children();
                rowOfSolutions.eq(0).addClass('fromLeft');
                rowOfSolutions.eq(1).addClass('fromRight');
                rowOfSolutions.eq(2).addClass('fromLeft');
                rowOfSolutions.eq(3).addClass('fromRight');
                rowOfSolutions.eq(4).addClass('fromLeft');
            }

            if (pos >= 1500) {
                var rowOfTeam = $('#team').children().eq(0).children().eq(0).children();
                rowOfTeam.eq(0).addClass('fromRight');
                rowOfTeam.eq(1).addClass('fromLeft');
                rowOfTeam.eq(2).addClass('fromRight');
                rowOfTeam.eq(3).addClass('fromLeft');
                rowOfTeam.eq(4).addClass('fromRight');
                rowOfTeam.eq(5).addClass('fromLeft');
                rowOfTeam.eq(6).addClass('fromRight');
            }
        } else {

            if (pos >= 100) {
                $('#img-analysis-anim').removeClass('fromLeft').addClass('fromLeft');
                $('#text-analysis-anim').removeClass('fromRight').addClass('fromRight');
            }

            if (pos >= 1400) {
                var rowOfSolutions = $('#solutions-card').parent().children();
                rowOfSolutions.eq(0).addClass('fromLeft');
                rowOfSolutions.eq(1).addClass('fromTop');
                rowOfSolutions.eq(2).addClass('fromRight');
                rowOfSolutions.eq(3).addClass('fromLeft');
                rowOfSolutions.eq(4).addClass('fromRight');
            }

            if (pos >= 2000) {
                var rowOfTeam = $('#team').children().eq(0).children().eq(0).children();
                rowOfTeam.eq(0).addClass('fromTop');
                rowOfTeam.eq(1).addClass('fromLeft');
                rowOfTeam.eq(2).addClass('fromTop');
                rowOfTeam.eq(3).addClass('fromRight');
                rowOfTeam.eq(4).addClass('fromLeft');
                rowOfTeam.eq(5).addClass('fromBottom');
                rowOfTeam.eq(6).addClass('fromRight');
            }
        }
    });


    if (width < 992) {
        $('#solutions-card').removeClass('order-3').addClass('order-0');
        $('.analysis-section').children().eq(0).removeClass('order-1').addClass('order-2');
        $('.analysis-section').children().eq(1).removeClass('order-2').addClass('order-1');
        $('#img-analysis-anim').addClass('fromRight');
        $('#text-analysis-anim').addClass('fromLeft');
    }

    $(window).on('resize', function() {
        var width = $(window).width();

        if (width <= 992) {
            $('#solutions-card').removeClass('order-3').addClass('order-0');
            $('.analysis-section').children().eq(0).removeClass('order-1').addClass('order-2');
            $('.analysis-section').children().eq(1).removeClass('order-2').addClass('order-1');
        } else {
            $('#solutions-card').removeClass('order-0').addClass('order-3');
            $('.analysis-section').children().eq(1).removeClass('order-1').addClass('order-2');
            $('.analysis-section').children().eq(0).removeClass('order-2').addClass('order-1');
        }
    });
});