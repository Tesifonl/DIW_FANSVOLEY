const track = document.querySelector('.track');
const slides = document.querySelectorAll('.track img');

let index = 0;

function update() {
    track.style.transform = `translateX(-${index * 400}px)`;
}

document.querySelector('.next').onclick = () => {
    index = (index + 1) % slides.length;
    update();
};

document.querySelector('.prev').onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
};