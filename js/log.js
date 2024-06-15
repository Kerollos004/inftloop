
//-------------------------------------------------> clear inputs
let clearBtns = document.querySelectorAll(".clear")
let inps = document.querySelectorAll(".log-box input")
let alt = document.querySelector(".alert")
let altText = document.querySelector(".alert h3")   
let ok =   document.querySelector(".alert a")
clearBtns.forEach(btn => {
    btn.addEventListener("click", clear)
    btn.addEventListener("click", mess)
})
function mess() {
    alt.classList.add("active")
}
ok.onclick = () => {
    alt.classList.remove("active")
}
function clear() {
    inps.forEach(inp => {
        if (inp.value != "") {
            inp.value = ""
            altText.textContent = " hello friend to infinite loop "
        }
        else {
            inp.classList.add("error")
            altText.textContent = " please fill the form"
        }
        inp.onkeyup = () => {
            inp.classList.remove("error")
            
        }
    })
}
//-------------------------------------------------->filtering
let changeBtns = document.querySelectorAll(".change")
let forms= document.querySelectorAll(".log-box form")
changeBtns.forEach(btn => {
    btn.addEventListener("click" , filter)
})
function filter() {
    forms.forEach(form => {
        form.classList.remove("active")
        document.querySelectorAll(this.dataset.sign).forEach(form => {
            form.classList.add("active")
            form.classList.add ("animate")
        })
    })
}
//------------------------------------>.regex
