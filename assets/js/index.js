let btn = document.querySelector("#btn");
let side = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function(){
    side.classList.toggle("active")
}

searchBtn.onclick = function(){
    side.classList.toggle("active")
}
