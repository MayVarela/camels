// Selecciona el boton desplegable
const dropdownBtn = document.querySelector('.dropdown-btn');

// Añade un evento de clic al botón
dropdownBtn.addEventListener('click', function() {
    //Alterna la clase "active" en el botón
    this.classList.toggle('active');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex % slides.length].style.display = "block"; 
    // Mostrar la segunda imagen
    slides[(slideIndex + 1) % slides.length].style.display = "block";
    // Mostrar la siguiente imagen
    dots[slideIndex-1].className += " active";
}


