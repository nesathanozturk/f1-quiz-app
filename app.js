const hiddenBtn = document.getElementById("click");
const main = document.querySelector("main")
const container = document.getElementsByClassName("container");

hiddenBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    container.classList.add("vsb")
})