
const togElem = document.querySelector(".toggle")
const topElem = document.querySelector(".topMenu")
const viewElem = document.querySelector(".view")

togElem.addEventListener("click",function(){
    togElem.classList.toggle("active")
    topElem.classList.toggle("view")
})