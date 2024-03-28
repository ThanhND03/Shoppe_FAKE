
//  get datas from product

let products = null;
fetch('../assets/js/product.json')
.then(response => response.json())
.then(data => {
    products = data;
    console.log(products);
    showDetails();
})

function showDetails() {

    let detail = document.getElementById('details');
    let productID = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => {
        return value.id == productID
    })[0];

    // Nếu không tồn tại product id thì trả về home page
    if(!thisProduct){
        window.location.href = "/";
    }

    // Nếu có thì add data product vào hmtl detials

    detail.innerHTML = `
    <div class="details__img">
        <img src="../assets${thisProduct.image__product}">
    </div>

    <div class="details__content">
        <h3 class="details__product__title">${thisProduct.name}</h3>
        <div class="details__product__price">
            <div class="details__product__price__sale"><span>₫</span>${thisProduct.price}</div>
        </div>
        <div class="depcription">
            <p>${thisProduct.depcription}</p>
            </div>

        <div class="soluong">
            <label for="soluong">Số lượng</label>
            <div id="soluong">
                <div class="minus">--</div>
                <div class="number__soluong">1</div>
                <div class="plus">+</div>
            </div>
        </div>

        <button class="addCart"><i class="fa-solid fa-cart-shopping"></i>Thêm vào giỏ hàng</button>
    </div>
    `


    // so luong
    let minus = document.querySelector('.minus');
    let number__soluong = document.querySelector('.number__soluong');
    let plus = document.querySelector('.plus');

    let a = 1;

    plus.onclick = function() {
        a++;
        number__soluong.innerText = a;
    };

    minus.onclick = function() {
        if(a > 1){
            a--;
            number__soluong.innerText = a;
        }
    };

    // let 

}   



