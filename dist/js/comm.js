$(document).ready(function () {
    $("#fullPage").fullpage({
        // autoScrolling: true,
        // scrollHorizontally: true,
        navigation: true,
        showActiveTooltip: true,
        navigationTooltips: ["HOME", "PROFILE", "MIMESIS", "SURFFY BEACH", "ZARA", "CONTACT"],
        anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixPage"],
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $(".home-wrap").css({
                    width: "450px",
                    height: "450px",
                });
                $(".home-wrap").animate(
                    {
                        opacity: 1,
                    },
                    100
                );
                $(".arrow").css({
                    opacity: 1,
                });
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 1 && direction == "down") {
                $(".home-wrap").css({
                    width: "4000px",
                    height: "2000px",
                });
                $(".arrow").css({
                    opacity: 0,
                });
            }
            // if (nextIndex >= 3) {
            //     $("#header").animate(
            //         {
            //             opacity: 1,
            //         },
            //         500
            //     );
            // } else {
            //     $("#header").animate({
            //         opacity: 0,
            //     });
            // }
        },
    });

    // 마우스커서
    var $mousePointer = $("#mouse-pointer"),
        $clickElements = $("a, label");

    function moverCursor(e) {
        $mousePointer.css({
            left: e.pageX,
            top: e.pageY,
        });
    }
    $clickElements.mouseenter(function () {
        $mousePointer.addClass("hover");
    });
    $clickElements.mouseleave(function () {
        $mousePointer.removeClass("hover");
    });

    $(window).on("mousemove", moverCursor);

    $(".app-form-button").on("click", function () {
        swal({
            title: "이메일 전송완료!🤗",
            icon: "success",
        });
    });
});
