
/**** NAV JQUARY CODE ***/
$(document).on('click', 'nav ul li a', function () {
    $(this).closest('li').toggleClass('active');
    $(this).closest('li').siblings().removeClass('active');
    $(this).closest('li').find('.subMenu').slideToggle();
    $(this).closest('li').siblings().find('.subMenu').slideUp();

});

if ($(window).width() < 767) {
    $(document).on('click', 'nav ul li a', function () {
        $(this).closest('li').toggleClass('active');
        $(this).closest('li').siblings().removeClass('active');
        $(this).closest('li').find('.subMenu').slideToggle();
        $(this).closest('li').siblings().find('.subMenu').slideUp();

    });
}
/**** SUBMENU jQUARY CODE ***/
$(document).on('click', '.subMenu ul li a', function () {
    $(this).closest('li').toggleClass('active');
    $(this).closest('li').siblings().removeClass('active');
    $(this).closest('li').find('.sub').slideToggle();
    $(this).closest('li').siblings().find('.sub').slideUp();

});

if ($(window).width() < 767) {
    $(document).on('click', '.subMenu ul li a', function () {
        $(this).closest('li').toggleClass('active');
        $(this).closest('li').siblings().removeClass('active');
        $(this).closest('li').find('.sub').slideToggle();
        $(this).closest('li').siblings().find('.sub').slideUp();

    });
}
/**** TAB_LINK jQUARY CODE ***/


$(document).ready(function (e) {
    $('nav').clone().appendTo('.side_bar');
    $('.menu_icon').click(function () {
        $('body').toggleClass('open_menu');

    });
});

/**** FOOTER jQUARY CODE ***/
$(document).ready(function () {
    $(".office span").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                    .siblings(".content")
                    .slideUp(200);
            $(".office span i")
                    .removeClass("fa-angle-up")
                    .addClass("fa-angle-down");
        } else {
            $(".office span i")
                    .removeClass("fa-angle-up")
                    .addClass("fa-angle-down");
            $(this)
                    .find("i")
                    .removeClass("fa-angle-down")
                    .addClass("fa-angle-up");
            $(".office span").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                    .siblings(".content")
                    .slideDown(200);
        }
    });
});

/**** HEADER jQUARY CODE ***/

$(document).ready(function () {
    $('.dpx-header-search-box').click(function () {
        $('#id-search-area-floating').removeClass('dpx-hide').addClass('dpx-show');
        $('.dpx-header-search-box').addClass('dpx-hide').removeClass('dpx-show');
        $('.dpx-search-area-floating-0').toggleClass('active');
        //$('.dpx-dropdown').addClass('dpx-hide').removeClass('dpx-show');
        //$('.dpx-header-search-box').addClass('dpx-hide').removeClass('dpx-show');
        //$('.dpx-header-search-group').removeClass('dpx-hide').addClass('dpx-show');
    });
    $('.dpx-tab-sale').click(function () {
        $('.dpx-tab-sale .dpx-search-unit-type').addClass('active');
        $('.dpx-tab-rent .dpx-search-unit-type').removeClass('active');
        $('.dpx-rent-price').addClass('dpx-hide').removeClass('dpx-show');
        $('.dpx-sale-price').removeClass('dpx-hide').addClass('dpx-show');
        $('#unit-price').val('');
        $('#hdby2').val('Sale');
    });
    $('.dpx-tab-rent').click(function () {
        $('.dpx-tab-rent .dpx-search-unit-type').addClass('active');
        $('.dpx-tab-sale .dpx-search-unit-type').removeClass('active');
        $('.dpx-rent-price').removeClass('dpx-hide').addClass('dpx-show');
        $('.dpx-sale-price').addClass('dpx-hide').removeClass('dpx-show');
        $('#unit-price').val('');
        $('#hdby2').val('Rent');
    });
    $('#id-search-area-close').click(function () {
        $('#id-search-area-floating').removeClass('dpx-show').addClass('dpx-hide');
        $('.dpx-header-search-box').addClass('dpx-show').removeClass('dpx-hide');
        $('.dpx-search-area-floating-0').removeClass('active');
    });
    $('.dpx-search-close').click(function () {
        $('.dpx-dropdown').addClass('dpx-show').removeClass('dpx-hide');
        $('.dpx-header-search-box').addClass('dpx-show').removeClass('dpx-hide');
        $('.dpx-header-search-group').removeClass('dpx-show').addClass('dpx-hide'); 
    });
    $('#id-search-bar').click(function () {
        $(this).addClass('dpx-search-box-expand');
    });
    $('#id-search-bar').blur(function () {
        $(this).removeClass('dpx-search-box-expand');
    });
});
$(document).ready(function () {
    $('#id-menu-open-x').click(function () {
        $('#id-menu-open-x').addClass('dpx-hide').removeClass('dpx-show');
        $('#id-menu-close-x').addClass('dpx-show').removeClass('dpx-hide');
        $('#id-mobile-menu-x').addClass('dpx-show').removeClass('dpx-hide');
    });
    $('#id-menu-close-x').click(function () {
        $('#id-menu-close-x').addClass('dpx-hide').removeClass('dpx-show');
        $('#id-menu-open-x').addClass('dpx-show').removeClass('dpx-hide');
        $('#id-mobile-menu-x').addClass('dpx-hide').removeClass('dpx-show');
    });
    $('.dpx-home-dubai-area-tab').click(function () {
        var d_id = $(this).data("areatab");
        $('.dpx-home-dubai-area-tab').removeClass('active');
        $(this).addClass('active');
        var setActive = '#id-home-dubai-area-panel-' + d_id;
        $('.dpx-home-dubai-area-inside').removeClass("dpx-show").addClass("dpx-hide");
        $(setActive).addClass("dpx-show").removeClass("dpx-hide");
    });

});

$(document).ready(function () {

    $('.dpx-header-search-box').click(function (e) {

        $('#id-search-area-floating').toggleClass('active');
        $('#id-search-area-floating').removeClass('active');

    })
});

$(document).ready(function (e) {
    $('.dpx-header-search-box').click(function () {
        $('.dpx-header-search-box').toggleClass('active');
        $('#id-search-area-floating').slideToggle();
    });
    $(".dpx-search-area-close i").click(function () {
        $('#id-search-area-floating').slideUp('.close');
         $('.dpx-search-area-floating-0').removeClass('active');
    });
});

 
 /*** LISTING MAP FUNTION ***/
function myFunction() {
  var element = document.getElementById("list-left");
  element.classList.add("active");
  var element = document.getElementById("list-right");
  element.classList.add("active");
}
function myFunction2() {
  var element = document.getElementById("list-left");
  element.classList.remove("active");
  var element = document.getElementById("list-right");
  element.classList.remove("active");
}
 
 
$('.leadership-team-top .text-box p a').click(function (e) {
    $(this).hide();
    $(this).parents(".leadership-team-top .text-box p").next(".text-hide").show();
});
$('.card-head').click(function (e) {
    $(this).toggleClass("active");
    $(this).next(".card-body").slideToggle();
});
