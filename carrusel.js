const carousel = document.querySelector('.carousel');
const track = document.querySelector('.track');
const slides = document.querySelectorAll('.track img');

let index = 0;

function getSlideWidth() {
  
    if (carousel) return carousel.clientWidth;

    return slides[0] ? slides[0].getBoundingClientRect().width : 0;
}

function update() {
    const w = getSlideWidth();
    track.style.transform = `translateX(-${index * w}px)`;
}

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (slides.length === 0) return;
        index = (index + 1) % slides.length;
        update();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (slides.length === 0) return;
        index = (index - 1 + slides.length) % slides.length;
        update();
    });
}


window.addEventListener('resize', () => {

    update();
});


window.addEventListener('load', () => {
    update();
});


slides.forEach(img => {
    if (!img.complete) {
        img.addEventListener('load', () => update());
    }
});


if (nextBtn && prevBtn) {
    [nextBtn, prevBtn].forEach(btn => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') btn.click();
        });
    });
}