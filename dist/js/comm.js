$(document).ready(function () {
    $("#fullPage").fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
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
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 1 && direction == "down") {
                $(".home-wrap").css({
                    width: "4000px",
                    height: "2000px",
                });
            }
        },
    });
    $("nav ul.menu__box li").click(function () {
        $("#menu__toggle").prop("checked", false);
    });
});
