menuBtn = document.querySelector(".menu-btn")
miniMenu = document.querySelector(".mini-menu")

menuBtn.addEventListener("click", () => {
    if (miniMenu.style.display === "none") {
        miniMenu.style.display = "flex";
    } else {
        miniMenu.style.display = "none";
    }
});