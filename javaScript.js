/*Sacar y esconder menu*/ 
const botonMenu = document.getElementById("boton"),
        aside = document.getElementById("aside");

botonMenu.addEventListener("click", ()=>{
    aside.classList.toggle("desplegar")
})
/*Sacar y esconder menu*/ 


/*Carrusel*/

const datosCarrusel = {
    "secundaria": {
        id: "2",
        titulo: { es: "Secundaria", en: "Secondary school" },
        texto: { es: "Juan Nepomuceno Rojas", en: "Juan Nepomuceno Rojas" },
        imagen: "imagenes/nepo.webp",
        url: "https://www.jesuitinas-sevilla.es/"
    },
    "bachillerato": {
        id: "1",
        titulo: { es: "Bachillerato", en: "Baccalaureate" },
        texto: { es: "IES Martinez Montañez", en: "Martinez Montañez Institute" },
        imagen: "imagenes/martinez.jpg",
        url: "https://iesmartinezm.es/"
    },
    "grado_superior": {
        id: "0",
        titulo: { es: "Grado Superior", en: "Higher Technical Degree" },
        texto: { es: "IES Hermanos Machado", en: "Hermanos Machado Institute" },
        imagen: "imagenes/centro.jpeg",
        url: "https://ieshnosmachado.org/"
    }
};



function pasaratras() {
    const titulo_carrusel = document.getElementById("titulo_carrusel");
    const texto_carrusel = document.getElementById("texto_carrusel");
    const div = document.getElementById("carrutexto");
    const savedLanguage = localStorage.getItem('idioma') || 'es';

    let claveCarrusel;
    switch (parseInt(titulo_carrusel.getAttribute('data-id'))){
        case 0:
            claveCarrusel = 'secundaria'; 
            titulo_carrusel.setAttribute('data-id',2)
            break;
        case 1:
            claveCarrusel = 'grado_superior';
            titulo_carrusel.setAttribute('data-id',0)
            break;
        case 2:
            claveCarrusel = 'bachillerato';
            titulo_carrusel.setAttribute('data-id',1)
            break;
    }

    titulo_carrusel.textContent = datosCarrusel[claveCarrusel].titulo[savedLanguage];
    texto_carrusel.textContent = datosCarrusel[claveCarrusel].texto[savedLanguage];
    texto_carrusel.href = datosCarrusel[claveCarrusel].url;
    div.style.backgroundImage = `url('${datosCarrusel[claveCarrusel].imagen}')`;
}


function pasarAdelante() {
    const titulo_carrusel = document.getElementById("titulo_carrusel");
    const texto_carrusel = document.getElementById("texto_carrusel");
    const div = document.getElementById("carrutexto");
    const savedLanguage = localStorage.getItem('idioma') || 'es';

    let claveCarrusel;
    switch (parseInt(titulo_carrusel.getAttribute('data-id'))){
        case 0:
            claveCarrusel = 'bachillerato'; 
            titulo_carrusel.setAttribute('data-id',1)
            break;
        case 1:
            claveCarrusel = 'secundaria';
            titulo_carrusel.setAttribute('data-id',2)
            break;
        case 2:
            claveCarrusel = 'grado_superior';
            titulo_carrusel.setAttribute('data-id',0)
            break;
    }

    titulo_carrusel.textContent = datosCarrusel[claveCarrusel].titulo[savedLanguage];
    texto_carrusel.textContent = datosCarrusel[claveCarrusel].texto[savedLanguage];
    texto_carrusel.href = datosCarrusel[claveCarrusel].url;
    div.style.backgroundImage = `url('${datosCarrusel[claveCarrusel].imagen}')`;
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
    cambiaCV('en');
    cambiaCarrusel('en');
    cargaIdioma('en');
    localStorage.setItem('idioma', 'en');
}

function cambiaEspañol() {
    console.log('Idioma cambiado a español');
    cambiaCV('es');
    cambiaCarrusel('es');
    cargaIdioma('es');
    localStorage.setItem('idioma', 'es');
}
function cambiaCV(idioma){
    const botondescarga = document.getElementById('descarga');
    if(botondescarga){
        if(idioma == 'es'){
            botondescarga.href = 'archivos/Curriculum.pdf';
        }
        else{
            botondescarga.href = 'archivos/CVIngles.pdf';
        }
    }
}

function cambiaCarrusel(idioma){
    const div = document.getElementById("carrutexto");
    if(div){
        const titulo_carrusel = document.getElementById("titulo_carrusel");
        const texto_carrusel = document.getElementById("texto_carrusel");

        switch (parseInt(titulo_carrusel.getAttribute('data-id'))){
            case 0:
                claveCarrusel = 'grado_superior'; 
                break;
            case 1:
                claveCarrusel = 'bachillerato';
                break;
            case 2:
                claveCarrusel = 'secundaria';
                break;
        }
        titulo_carrusel.textContent = datosCarrusel[claveCarrusel].titulo[idioma];
        texto_carrusel.textContent = datosCarrusel[claveCarrusel].texto[idioma];
    }
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
        })
        .catch(error => {
            console.error("Error al cargar las traducciones:", error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('idioma') || 'es';
    cambiaCV(savedLanguage);
    cambiaCarrusel(savedLanguage);
    cargaIdioma(savedLanguage);
    document.getElementById('check').checked = (savedLanguage === 'en');
});

/*Cambiar Idioma*/
