const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n)=>n.addEventListener("click", ()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

//# sourceMappingURL=index.f8aba6d1.js.map
