menuBtn = document.querySelector(".menu-btn")
miniMenu = document.querySelector(".mini-menu")


menuBtn.addEventListener("click", () => {
    miniMenu.classList.toggle("active");
});


// menuBtn.addEventListener("click", () => {
//     miniMenu.classList.add(".active")
//     miniMenu.classList.remove(".active")
// });

// if (miniMenu.style.display === "none") {
//     miniMenu.style.display = "flex";
// } else {
//     miniMenu.style.display = "none";
// }