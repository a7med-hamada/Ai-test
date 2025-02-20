let scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
    document.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

$(document).ready(function () {
    $('.slickSlider2').slick({
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
//////////////////////////////////////////////////////////////
$(document).ready(function () {
    $(".question-1").click(function () {
        $(".question-1 span i").toggleClass("fa-arrow-down");
    });
    $(".question-2").click(function () {
        $(".question-2 span i").toggleClass("fa-arrow-down");
    });
    $(".question-3").click(function () {
        $(".question-3 span i").toggleClass("fa-arrow-down");
    });
    $(".question-4").click(function () {
        $(".question-4 span i").toggleClass("fa-arrow-down");
    });
    $(".question-5").click(function () {
        $(".question-5 span i").toggleClass("fa-arrow-down");
    });
});
/////////////////////////////////////////////////////////////
const texts = [
    "بسرعه",
    "بسهوله",
];
let index = 0;
let textIndex = 0;

function typeEffect() {
    const textElement = document.getElementById("text");
    textElement.innerHTML = texts[textIndex].substring(0, index);
    if (index < texts[textIndex].length) {
        index++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (index > 0) {
        index--;
        document.getElementById("text").innerHTML = texts[textIndex].substring(0, index);
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 500);
    }
}
typeEffect();
/////////////////////////////////////////////////////////////
function changeImage(src) {
    document.getElementById('mainImage').src = src;
}
////////////////////////////////////////

////////////////////////////////////////
$(document).ready(function () {
    $('.slickSlider').slick({
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
////////////////////////////////////////
