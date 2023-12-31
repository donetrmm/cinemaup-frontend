const baseURL = "";
function mandarID(id) {
  localStorage.setItem("id", id);
  window.location.href = "../pages/vista.html";
}
function cargarSeries() {
  fetch("http://localhost:8081/api/series")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const peliculasContainer = document.getElementById("series-container");
      peliculasContainer.innerHTML = ""; // Limpia el contenido previo, si lo hubiera

      data.forEach((series) => {
        const peliculaHTML = `
            <div class="card">
            <div class="poster">
            <img src="${series.imagen}" alt="${series.titulo}" class="img">
            </div>
            <div class="info">
                <h3>${series.titulo}</h3>
              <button class="btnCard" onclick="mandarID(${series.id})"><img src="../img/play.png" alt="play"></button>
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
