const express = require('express');
const app = express();
const port = 8081;

function contenido(){
    console.log("La página se ha cargado y la función se ha ejecutado.");
    fetch('../back-end/API/getMovies.js') // Reemplaza con la URL de tu API
            .then(response => response.json())
            .then(data => {
                // Manipular y mostrar los datos en la página
                const titulo = document.getElementById('titulo');
                data.forEach(contenido => {
                    const tituloItem = document.createElement('h1');
                    listItem.textContent = contenido.titulo;
                    listaPeliculas.appendChild(tituloItem);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
}



document.addEventListener('DOMContentLoaded', function() {
    contenido(); // Llama a tu función al cargar la página.
});
