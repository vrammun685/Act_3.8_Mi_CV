/*Sacar y esconder menu*/ 
const botonMenu = document.getElementById("boton"),
        aside = document.getElementById("aside");

botonMenu.addEventListener("click", ()=>{
    aside.classList.toggle("desplegar")
})
/*Sacar y esconder menu*/ 


/*Carrusel*/
let titulo1 = "Secundaria";
let texto1 = "Juan Nepomuceno Rojas";
let imagen1 = "imagenes/nepo.webp";
let url1 = "https://www.jesuitinas-sevilla.es/"

let titulo2 = "Bachillerato";
let texto2 = "IES Martinez Montañez";
let imagen2 = "imagenes/martinez.jpg"
let url2 = "https://iesmartinezm.es/"

let titulo3 = "Grado Superior";
let texto3 = "IES Hermanos Machado";
let imagen3 = "imagenes/centro.jpeg";
let url3 = "https://ieshnosmachado.org/";

function pasaratras() {
    let tituloActivo = document.querySelector("#titulillo").textContent;

    let tituloSalida, textoSalida, imagenSalida, urlSalida;

    if (tituloActivo === titulo1) {
        tituloSalida = titulo3;
        textoSalida = texto3;
        imagenSalida = imagen3;
        urlSalida = url3;

    } else if (tituloActivo === titulo2) {
        tituloSalida = titulo1;
        textoSalida = texto1;
        imagenSalida = imagen1;
        urlSalida = url1;

    } else if (tituloActivo === titulo3) {
        tituloSalida = titulo2;
        textoSalida = texto2;
        imagenSalida = imagen2;
        urlSalida = url2;
    }

    document.getElementById("titulillo").innerHTML = tituloSalida;
    document.getElementById("textillo").innerHTML = textoSalida;
    
    let div = document.getElementById("carrutexto");
    div.style.backgroundImage = `url('${imagenSalida}')`;
    document.getElementById("textillo").href = urlSalida;
}


function pasarAdelante() {
    let tituloActivo = document.querySelector("#titulillo").textContent;

    let tituloSalida, textoSalida, imagenSalida, urlSalida;

    if (tituloActivo === titulo1) {
        tituloSalida = titulo2;
        textoSalida = texto2;
        imagenSalida = imagen2;
        urlSalida = url2;

    } else if (tituloActivo === titulo2) {
        tituloSalida = titulo3;
        textoSalida = texto3;
        imagenSalida = imagen3;
        urlSalida = url3;

    } else if (tituloActivo === titulo3) {
        tituloSalida = titulo1;
        textoSalida = texto1;
        imagenSalida = imagen1;
        urlSalida = url1;
    }

    document.getElementById("titulillo").innerHTML = tituloSalida;
    document.getElementById("textillo").innerHTML = textoSalida;
    
    let div = document.getElementById("carrutexto");
    div.style.backgroundImage = `url('${imagenSalida}')`;
    document.getElementById("textillo").href = urlSalida;
    
}
/*Carrusel*/

/*Cambiar Idioma*/
const cambia=document.getElementById("check")

cambia.addEventListener('change', (event)=>{
    if (event.target.checked) {
        cambiaIngles()
      } else {
        console.log('Idioma cambiado a español');
        cambiaEspañol()
      }
})

function cambiaIngles() {
    console.log('Idioma cambiado a inglés');
    cargaIdioma('en');
    localStorage.setItem('idioma', 'en');
}

function cambiaEspañol() {
    console.log('Idioma cambiado a español');
    cargaIdioma('es');
    localStorage.setItem('idioma', 'es');
}

function cargaIdioma(idioma) {
    fetch('idioma.json') 
        .then(response => response.json())
        .then(data => {
            // Cambiar el idioma de los elementos con 'data-translate'
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (data[idioma] && data[idioma][key]) {
                    element.textContent = data[idioma][key];  
                }
            });
            // Cambiar el objeto a descargar
            const language = localStorage.getItem('idioma') || 'es';
            const downloadLink = document.getElementById('descarga');

            if (data[idioma] && data[idioma].descarga) {
                downloadLink.href = data[idioma].descarga;
            }
        })
        .catch(error => {
            console.error("Error al cargar las traducciones:", error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('idioma') || 'es';
    cargaIdioma(savedLanguage);
    document.getElementById('check').checked = (savedLanguage === 'en');
});

/*Cambiar Idioma*/
