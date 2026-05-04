/*
ACCORDION
- Seleccionar .accordion-header
- Escuchar click en cada cabecera
- Cerrar todos los .accordion-item
- Abrir el pulsado con .is-open
- Actualizar aria-expanded
*/

//Variables
let onlyOnePerAccordion=true;


window.addEventListener("load", initAccordion);

function initAccordion() {
    let accordionHeaders = document.querySelectorAll(".accordion-header");

    for(let a of accordionHeaders){
        a.addEventListener("click",toggleAccordion);
    }
}

function toggleAccordion(){
    //let accordionHeader=this;
    let accordionItem = this.parentNode;


    //Permitir solo uno abierto
    if(onlyOnePerAccordion) {
        let accordionItems = accordionItem.parentNode.children;

        for(let a of accordionItems){
            if(a!=accordionItem) a.classList.remove("is-open");
        }
    }

    //Activamos el actual
    accordionItem.classList.toggle("is-open");
}