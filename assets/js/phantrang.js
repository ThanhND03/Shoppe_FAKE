//  code phân trang 
let thisPage = 1; // Số trang
let limit = 18; // Số sản phẩm muốn hiện trong một trang
let lists = document.querySelectorAll('.product__item');
let btnPrev = document.getElementById("btnPrev__phantrang");
let btnNext = document.getElementById("btnNext__phantrang");

function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;

    lists.forEach((item, key) => {
        if(key >= beginGet && key <= endGet){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
    listPage();
}

loadItem();

function listPage() {
    let count = Math.ceil(lists.length / limit);
    document.querySelector('.list__page').innerHTML = '';

    if(thisPage != 1){
        btnPrev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
    }

   

    for(i = 1 ; i <= count ; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage) {
            newPage.classList.add("active");
        }
        document.querySelector(".list__page").appendChild(newPage);
        newPage.setAttribute('onclick', "changePage(" + i + ")"); 
    } 
    
    if(thisPage != count){
        btnNext.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
    }

}

function changePage(i) {
    thisPage = i;
    loadItem();
}
