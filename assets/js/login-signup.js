const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let errMessageAll = $('.error-message-all');
let errName = $('.error-message-name');
let errPass = $('.error-message-pass');
let errRepeatPass = $('.error-message-repeat__pass');

let fullname = $('#fullname');
let password = $('#password');
let repeat__pass = $('#repeat__password');
let inputs = $$('.input__items');



// Eye__ password
let eye__pass = $('.eye__pass');
let eye__pass2 = $('.eye__pass-2');

eye__pass.onclick = function() {
    if(password.type == "password"){
        password.type = "text";
        eye__pass.src = "../assets/img/eye-open.png";
    }else{
        password.type = "password";
        eye__pass.src = "../assets/img/eye-close.png";
    }
}

eye__pass2.onclick = function() {
    if(repeat__pass.type == "password"){
        repeat__pass.type = "text";
        eye__pass2.src = "../assets/img/eye-open.png";
    }else {
       repeat__pass.type = "password";
       eye__pass2.src = "../assets/img/eye-close.png"; 
    }
}


// End Eye__ password



// Kiểm tra input name có thỏa mãn không 
function validateName() {
    // Nhập tên
    var name = fullname.value;
    if(name.length == 0) {
        errName.innerHTML = "Nội dung bắt buộc";
        return false;
    }
    //  Kiểm tra xem có phải tên tài khoản hoặc email không
    if(!name.match(/^[a-zA-Z0-9._-]+$/)  && !name.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errName.innerHTML = "Không phải tên đăng nhập hoặc email";
        return false;
    }
    //  đúng trả về true và xóa báo lỗi
    errName.innerHTML = "";
    return true;

}


function validatePass() {
    // Nhập mật khẩu
    var pass = password.value;
    if(pass.length == 0) {
        errPass.innerHTML = "Mật khẩu không được để trống";
        return false;
    }
    errPass.innerHTML = "";
    return true;
}


function validateRepetPass() {
    var repeatPass = repeat__pass.value;
    if(repeatPass.length == 0) {
        errRepeatPass.innerHTML = "Mật khẩu nhập lại không được để trống"
        return false;
    }

    errRepeatPass.innerHTML = "";
    return true;
}

function validateFormLogin() {
    if(!validateName() || !validatePass()) {
        errName.innerHTML = "Nội dung bắt buộc";
        errPass.innerHTML = "Mật khẩu không được để trống";
        errMessageAll.style.display = "block";
        setTimeout( function() {
            errName.innerHTML = "";
            errPass.innerHTML = "";
            errMessageAll.style.display = "none"
        }, 3000);
        return false;
    }
}



function validateFormSignup() {
    if(!validateName() || !validatePass() || !validateRepetPass()) {
        errName.innerHTML = "Nội dung bắt buộc";
        errPass.innerHTML = "Mật khẩu không được để trống";
        errRepeatPass.innerHTML = "Mật khẩu nhập lại không được để trống";
        errMessageAll.style.display = "block";
        setTimeout( function() {
            errName.innerHTML = "";
            errPass.innerHTML = "";
            errRepeatPass.innerHTML = "";
            errMessageAll.style.display = "none"
        }, 3000);
        return false;
    }
}


