const slides = document.querySelectorAll('.slide');
const slideshow = document.getElementById('slideshow');

let currentSlide = 0;
let isAnimating = false;

function showSlide(newIndex, direction) {
    if (isAnimating || newIndex === currentSlide) return;
    isAnimating = true;

    const current = slides[currentSlide];
    const next = slides[newIndex];

    slides.forEach(slide => slide.classList.remove('active', 'prev'));

    if (direction === 'next') {
        current.classList.add('prev');
    }

    next.classList.add('active');

    setTimeout(() => {
        currentSlide = newIndex;
        isAnimating = false;
    }, 700);
}

// Клавиатура
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        showSlide((currentSlide + 1) % slides.length, 'next');
    }
    if (e.key === 'ArrowLeft') {
        showSlide((currentSlide - 1 + slides.length) % slides.length, 'prev');
    }
});

// Клик мыши
slideshow.addEventListener('click', (e) => {
    if (e.shiftKey) {
        showSlide((currentSlide - 1 + slides.length) % slides.length, 'prev');
    } else {
        showSlide((currentSlide + 1) % slides.length, 'next');
    }
});
