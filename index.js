const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const imgBox = document.querySelector("#imgBox");
const drop = document.querySelector("#drop");
const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");



one.addEventListener("click",() => {
    imgBox.classList.remove("move-one","move-two")
})
two.addEventListener("click",() => {
    imgBox.classList.add("move-one");
    imgBox.classList.remove("move-two")
})
three.addEventListener("click",() => {
    imgBox.classList.add("move-two");
    imgBox.classList.remove("move-one")

})

menu.addEventListener("click",() => {
    drop.classList.toggle("hidden");
    open.classList.toggle("hidden")
    close.classList.toggle("hidden")
})