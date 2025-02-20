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