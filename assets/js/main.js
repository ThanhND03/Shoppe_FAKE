const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Slider
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.list__slider');
    const slides = document.querySelectorAll('.item__slider');
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');
    let dotsContainer = $('.dots-container');
    let slideCount = slides.length;
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


// time out 
    var countDownTime = new Date("April 09 , 2024 22:00:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownTime - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));        
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

        $('#hours').innerHTML = (hours < 10 ? "0" : "") + hours;
        $('#minutes').innerHTML = (minutes < 10 ? "0" : "") + minutes;
        $('#seconds').innerHTML = (seconds < 10 ? "0" : "") + seconds;


        if(distance < 0) {
            clearInterval(x);
            $('#hours').innerHTML = "00";
            $('#minutes').innerHTML = "00";
            $('#seconds').innerHTML = "00";
        }
    }, 1000);
// end time out 

//  product index

//  get datas from product

let products = null;
fetch('assets/js/product.json')
.then(response => response.json())
.then(data => {
    products = data;
    console.log(products);
    addDatatoHTML();
})

// add data product to html

let product__list = $('.product__list');
function addDatatoHTML() {
    products.forEach(product => {
        //  create new element item
        let product__item = document.createElement('li');
        product__item.classList.add('product__item')
        let newProduct = document.createElement('a');
        newProduct.href = '../html/detail.html?id=' + product.id;

        newProduct.innerHTML = `
        <div class="img__product">
            <img src="../assets${product.icon__yeuthich}" class="icon_yeuthich">
            <img src="../assets${product.imgage__background}" class="img__bg" style="background-image: url(../assets${product.image__product});">
        </div>
        
        <div class="text__product">
            <p class="title__product">${product.name}</p>
            <p class = "product__bestseller">Đang bán chạy</p>
            <div class="price__luotban__product">
                <div class="price"><span>₫</span>${product.price}</div>
                <div class="luotban">Đã bán ${product.luotban}k</div>
            </div>
        </div>
        `

        // add this element in product__list class
        // appendChild để cho class này nằm trong class mình muốn
        product__list.appendChild(product__item);
        product__item.appendChild(newProduct);
    }) 
}
// end product

