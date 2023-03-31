const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const icon = document.getElementById("icon");
const portrait = document.getElementById("portrait");
const desktopPortrait = document.getElementById("desktop-portrait");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.className = "fa-solid fa-sun";
        portrait.src = "assets/images/white-portrait.png";
        desktopPortrait.srcset = "assets/images/white-portrait-lg.png";
    } else {
        icon.className = "fa-solid fa-moon";
        portrait.src = "assets/images/portrait-with-border-md-sm.png";
        desktopPortrait.srcset = "assets/images/portrait-with-border-lg.png";
    }
};