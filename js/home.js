
//----------------------------------->toggle menu
let menBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".menu")
menBtn.onclick = () => {
    menu.classList.toggle("active")
}
//------------------------------------>
let links = document.querySelectorAll(".link")
links.forEach(link => {
    link.addEventListener("click", changeClass)
    link.addEventListener("click" , removeMenu)
})
function changeClass() {
    links.forEach(link => {
        link.classList.remove("active")
        this.classList.add("active")
    })
}
function removeMenu() {
    menu.classList.remove("active")
}
//-------------------------------->scroll window
let media = document.querySelector(".media")
let header = document.querySelector("header")
window.onscroll = () => {
    if (scrollY > 5) {
        media.classList.add("none")
        header.classList.add("active")
    }
    else {
        media.classList.remove("none")
        header.classList.remove("active")
    }
}
//------------------------------------> validation
let clearBtn = document.querySelector(".clear")
let inps = document.querySelectorAll(" input , textarea")
let alt = document.querySelector(".alert")
let altText = document.querySelector(".alert h3")
let ok =   document.querySelector(".alert a")

clearBtn.addEventListener("click", clear)
clearBtn.addEventListener("click", mess)

function clear() {
    inps.forEach(inp => {
        if (inp.value != "") {
            inp.value = ""
            altText.textContent = " message sent successfully"
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

function mess() {
    alt.classList.add("active")
}


ok.onclick = () => {
    alt.classList.remove("active")
}


//--------------------------------->

