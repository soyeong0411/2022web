console.log('ok');

document.getElementsByClassName("box")[0].innerText = "안녕하세요.";


document.getElementsByClassName("btn")[0].addEventListener("click",function(){
    console.log('click');
    document.getElementsByClassName("box")[0].innerText = "안녕1";
}) // 실행이 되는 장소 function


// let btn = document.getElementsByClassName("btn")
// let box = document.getElementsByClassName("box")

// let btn = document.querySelector("button.btn")
// let box = document.querySelector("div.box")

let btn = document.querySelectorAll("button.btn")[0];
let box = document.querySelectorAll("div.box")[0];

btn.addEventListener("click",function(){
    console.log('click');
    box.innerText = "안녕1";
})

let array = [1,2,3,4]
//메소드는 소괄호있고, 속성은 소괄호 없음 length는 속성