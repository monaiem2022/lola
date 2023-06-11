

let submit = document.getElementById('submit');
let text = document.getElementById('text');
let password = document.getElementById('password');

submit.onclick = function () {
    if(text.value == 'محمد عماد احمد' && password.value == '10203'){
        alert('yes')
    }  else {
        alert('no')
    }
}
