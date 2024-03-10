document.addEventListener("DOMContentLoaded", function(){
    var carousel = document.getElementById("carouselExampleIndicators");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
    var currentIndex = 0;

    setInterval(function() {
        carouselItems[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add("active");
    }, 3000);
});