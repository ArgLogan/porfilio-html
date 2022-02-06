let cerrar = document.querySelector("close");
const abrir = document.querySelector('.cta');
let modal = document.querySelector(".modal");
let modalC = document.querySelector(".modal-container");


abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
});

let colaboracion = "Un gusto colaborar con tu codigo";