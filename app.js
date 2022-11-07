const hiddenBtn = document.getElementById("click");
const main = document.querySelector("main")
const container = document.getElementById("container");

hiddenBtn.addEventListener("click", () => {
    main.classList.toggle("hd");
})