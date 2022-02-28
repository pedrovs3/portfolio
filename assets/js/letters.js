const textE1 = document.querySelector(".text1");
const textE2 = document.querySelector(".text2");
const text = textE1.textContent;
const text2 = textE2.textContent;
const letters = text.split("")
const letters2 = text2.split("")

let html = "";
let html2 = "";

const makespan = letter => `<span class="rubber-letter">${letter}</span>`;

letters.forEach(letter =>(
  html += makespan(letter)
));

letters2.forEach(letter => 
    html2 += makespan(letter))

textE1.innerHTML = html;
textE2.innerHTML = html2;

let container = document.getElementById("loader-main");
let info = document.getElementById("info-container");

const title = document.querySelectorAll(".title .rubber-letter");

title.forEach(span=>{
  span.addEventListener("mouseover",(e)=>{
    e.target.classList.add('animation')
    setTimeout(()=>{
      e.target.classList.remove('animation')
    },1000)
  })
})