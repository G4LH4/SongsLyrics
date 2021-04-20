import * as UI from './interfaz.js';

export default class API {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        spinerCarga();

        fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => {
            const {lyrics} = resultado;

            UI.divResultado.textContent = lyrics;
            UI.headingResultado.textContent = `Letra de la canción: ${this.cancion} de ${this.artista}`;
        })
    }
}

function spinerCarga(){
    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');
    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    UI.divResultado.appendChild(divSpinner);
}

function limpiarHTML(){
    while(UI.divResultado.textContent){
        UI.divResultado.textContent = '';
    };
};