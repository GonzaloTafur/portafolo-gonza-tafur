function imgActual(n, carouselId) {
    let slides = document.querySelectorAll(`#${carouselId} .imgsld`);
    slides.forEach(slide => slide.style.display = "none"); 
    slides[n - 1].style.display = "block"; 
}

document.querySelectorAll("[id^=carrusel]").forEach(carousel => {
    let slides = carousel.querySelectorAll(".imgsld");
    slides.forEach((slide, i) => slide.style.display = i === 0 ? "hidden" : "none");
});
