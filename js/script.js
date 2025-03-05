function imgActual(n, carouselId) {
    let slides = document.querySelectorAll(`#${carouselId} .imgsld`);
    slides.forEach(slide => slide.style.display = "none"); // Oculta todas las imágenes
    slides[n - 1].style.display = "block"; // Muestra solo la imagen seleccionada
}

// Inicializar cada carrusel mostrando la primera imagen de cada uno
document.querySelectorAll("[id^=carrusel]").forEach(carousel => {
    let slides = carousel.querySelectorAll(".imgsld");
    slides.forEach((slide, i) => slide.style.display = i === 0 ? "hidden" : "none");
});