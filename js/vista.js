const baseURL = "";
function cargar() {
  var id = localStorage.getItem("id");
  console.log("La variable recuperada es: " + id);
  const urlID = `http://localhost:8081/api/id/${id}`;

  fetch(urlID)
    .then((response) => response.json())
    .then((reciente) => {
      console.log(reciente);
      const peliculasContainer = document.getElementById("container");
      peliculasContainer.innerHTML = ""; // Limpia el contenido previo, si lo hubiera

      reciente.forEach((pelicula) => {
        const peliculaHTML = `
                <div class="contimg">
                <img class="img" src="${pelicula.imagen}" alt="${pelicula.titulo}">
                </div>
                <div class="continfo">
                <h2 class="titulo">${pelicula.titulo}</h2>
                <p class="descripcion">${pelicula.descripcion}</p>
                <h4 class="titTrailer">Ver Trailer</h4>
                <button href="../index.html" class="btn"> <a target="_blank" href="${pelicula.trailer}"><img src="../img/play.png" alt="play""></a> </button>
                </div>
                <div class="trailer">
                <h2 class="titTrailer"> ${pelicula.titulo} Trailer </h2>
                <iframe class="frame" src="${pelicula.trailer}"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div>
            `;

        peliculasContainer.insertAdjacentHTML("beforeend", peliculaHTML);
      });
    })
    .catch((error) => {
      console.error("Error al obtener datos de películas:", error);
    });
}
