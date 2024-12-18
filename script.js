hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

const menuButtons = document.querySelectorAll(".nav-bar a");
menuButtons.forEach(button => {
    button.addEventListener("click", () => {
        const navBar = document.querySelector(".nav-bar");
        navBar.classList.remove("active"); // Menü schließen
    });
});

document.getElementById("year").innerHTML = new Date().getFullYear();
