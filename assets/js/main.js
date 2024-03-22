const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Slider
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.list__slider');
    const slides = document.querySelectorAll('.item__slider');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
    const dotsContainer = document.querySelector('.dots-container');
    const slideCount = slides.length;
    let currentIndex = 0;

    // Function to update slider position
    function updateSlider() {
        const offset = -100 * currentIndex;
        slider.style.transform = `translateX(${offset}%)`;
        updateDots();
        // Xóa thời gian auto
        clearInterval(auto);
        // Chạy lại thời gian auto
        auto = setInterval(() => {
            // currentIndex = (currentIndex + 1) % slideCount;
            // updateSlider();
            nextBtn.click()
        }, 5000);
    }

    // Function to move to a specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    // Function to update dots
    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Create dots
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
        goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }

    // Activate first dot
    updateDots();

    // Event listener for Prev button
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    });

    // Event listener for Next button
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    });

    // Automatic sliding
    let auto = setInterval(() => {
        // currentIndex = (currentIndex + 1) % slideCount;
        // updateSlider();
        nextBtn.click()
    }, 5000);

    });

// End slider

// Galery flash sale

let scrollContainer = $('.flashsale__product__list');
let btnPrev = $('#btnPrev');
let btnNext = $('#btnNext');

scrollContainer.addEventListener("wheel", (evt) =>{
    // evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

btnNext.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1160;
}); 

btnPrev.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1160;
});

// End Galery

