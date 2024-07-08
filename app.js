//Selecciones para barra de navegacion burguer
const burguer = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burguer.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//cerrar menu de burguer
const navlink = document.querySelectorAll(".nav-link");

navlink.forEach((link)=>
    link.addEventListener("click",() => {
        ul.classList.remove("show");
    })
);
//Funcionalidad de desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up");

//Funcionalidad de desplazar hacia arriba
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
})