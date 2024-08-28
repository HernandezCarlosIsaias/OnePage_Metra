let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    console.log(`Current Index: ${index}, Total Slides: ${totalSlides}`);

    // Asegúrate de que el índice esté dentro de los límites
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Mover las imágenes según el índice actual
    const offset = -(currentIndex * 100);
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);

    // Cambiar de slide automáticamente cada 5 segundos
    setInterval(() => {
        nextSlide();
    }, 5000);
});

document.addEventListener('DOMContentLoaded', function () {
    const navbarHeight = document.querySelector('.header').offsetHeight;
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Manejar el clic en el botón de hamburguesa
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Cerrar el menú al hacer clic en un enlace
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});