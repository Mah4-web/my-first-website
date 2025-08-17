document.addEventListener("DOMContentLoaded", function () {
    let mybutton = document.getElementById("back-to-top-btn");

    window.onscroll = function () {
    scrollFunction();
    };

    function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    mybutton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    });
});
