let mains = document.querySelectorAll(".main")
let answers = document.querySelectorAll(".answer")

mains.forEach(main => {
    main.addEventListener("click", filter)
})

function filter() {
    answers.forEach(answer => {
        answer.classList.remove("active")
        document.querySelectorAll(this.dataset.filter).forEach(ans => {
            ans.classList.add("active")
        })
    })
}
