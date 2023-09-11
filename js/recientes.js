const baseURL = "";
function mandarID(id) {
  localStorage.setItem("id", id);
  window.location.href = "../pages/vista.html";
}
function cargarSeries() {
  localStorage.removeItem("id");
  fetch("http://localhost:8081/api/recientes")
    .then((response) => response.json())
    .then((reciente) => {
      console.log(reciente);
      const peliculasContainer = document.getElementById("recientes-container");
      peliculasContainer.innerHTML = ""; // Limpia el contenido previo, si lo hubiera

      reciente.forEach((pelicula) => {
        const peliculaHTML = `
            <div class="card">
            <div class="poster">
              <img src="${pelicula.imagen}" alt="${pelicula.titulo}" class="img">
            </div>
            <div class="info">
                <h3>${pelicula.titulo}</h3>
                <button class="btnCard" onclick="mandarID(${pelicula.id})"><img src="../img/play.png" alt="play"></button>
            </div>
            <div class="backgroundWrapper"></div>
            </div>
            `;
        peliculasContainer.insertAdjacentHTML("beforeend", peliculaHTML);
      });
    })
    .catch((error) => {
      console.error("Error al obtener datos de películas:", error);
    });
}
