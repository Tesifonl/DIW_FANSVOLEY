/*
MENÚ RESPONSIVE
- Seleccionar .nav-toggle y .main-nav
- Escuchar click en el botón .nav-toggle
- Añadir/quitar .is-open al menú .main-nav
- Actualizar aria-expanded con navToggle.setAttribute("aria-expanded", isExpanded);
*/

//Variables
let navToggle;
let mainNav

window.addEventListener("load", initResponsiveMenu);
function initResponsiveMenu() {
    //Inicializar variables
    navToggle = document.querySelector(".nav-toggle");
    mainNav = document.querySelector(".main-nav");

    //Asociamos eventos
    navToggle.addEventListener("click",toggleMenu)
}

function toggleMenu(){
    mainNav.classList.toggle("is-open");

    //Accesibilidad
    let isExpanded = mainNav.classList.contains("is-open");
    mainNav.setAttribute("aria-expanded", isExpanded);
}