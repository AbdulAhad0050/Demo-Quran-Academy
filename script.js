// Side Navigation Menu Functions
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

// Slider Functionality (for Courses Page)
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let index = 0;

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.children.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.children.length) % slides.children.length;
    updateSlider();
});

// Auto-slide
setInterval(() => {
    index = (index + 1) % slides.children.length;
    updateSlider();
}, 5000);
