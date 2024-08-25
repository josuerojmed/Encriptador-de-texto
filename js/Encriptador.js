//-------Selección de Elementos-------//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

// Función para mostrar mensajes de aviso
function mostrarAviso(mensaje) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;
    
    setTimeout(() => {
        aviso.removeAttribute("style");
    }, 1500);
}

//-------Boton de Encriptar-------//
btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if (texto === "") {
        mostrarAviso("El campo de texto no debe estar vacio");
    } else if (texto !== txt) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
    } else if (texto !== texto.toLowerCase()) {
        mostrarAviso("El texto debe ser todo en minúscula");
    } else {
        texto = texto.replace(/e/g, "enter")
                     .replace(/i/g, "imes")
                     .replace(/a/g, "ai")
                     .replace(/o/g, "ober")
                     .replace(/u/g, "ufat");

        respuesta.innerText = texto;
        btnCopiar.style.visibility = "visible"; // Cambiado de "inherit" a "visible"
        contenido.remove(); 
    }
});

//-------Boton de Desencriptar-------//
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if (texto === "") {
        mostrarAviso("El campo de texto no debe estar vacio");
    } else if (texto !== txt) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
    } else if (texto !== texto.toLowerCase()) {
        mostrarAviso("El texto debe ser todo en minúscula");
    } else {
        texto = texto.replace(/enter/g, "e")
                     .replace(/imes/g, "i")
                     .replace(/ai/g, "a")
                     .replace(/ober/g, "o")
                     .replace(/ufat/g, "u");

        respuesta.innerText = texto;
        btnCopiar.style.visibility = "visible"; // Cambiado de "inherit" a "visible"
        contenido.remove(); 
    }
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    if (navigator.clipboard) {
        navigator.clipboard.writeText(respuesta.innerText).catch(err => {
            console.error('Error al copiar al portapapeles:', err);
        });
    } else {
        let copiar = respuesta;
        let range = document.createRange();
        range.selectNode(copiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    }
});
