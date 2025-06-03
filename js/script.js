function imgActual(n, carouselId) {
    let slides;
    
    slides = document.querySelectorAll(`#${carouselId} .imgsld`);
    
    // Esto evita que las imagenes seleccionadas se pongan debajo
    slides.forEach(
        slide => slide.style.display = "none"
    );
    // Esto evita que las imagenes seleccionadas desaparezcan
    slides[n - 1].style.display = "block"; 
}
