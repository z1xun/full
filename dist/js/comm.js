$(document).ready(function () {
    $("#fullPage").fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage"],
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $(".about-img, .info-title, .info-cont, .slide-item").removeClass("show");
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
});
