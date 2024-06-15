//------------------------------------------------->toggle active class yo ditaeils
let imgBoxs = document.querySelectorAll(".img-box")
let clos = document.querySelector(".close")
let details = document.querySelector(".detials")
imgBoxs.forEach(box => {
    box.addEventListener("click", addClass)
    box.addEventListener("click", filtering)
})
function addClass() {
    details.classList.add("active")
}
clos.onclick = () => {
    details.classList.remove("active")
}
//------------------------------------------------->filtering imgs
let imgs = document.querySelectorAll(".img")
function filtering() {
    imgs.forEach(img => {
        img.classList.remove("show")
    })
    document.querySelectorAll(this.dataset.click).forEach(img => {
        img.classList.add("show")
    })
}
//------------------------------------------------->counting imgs

