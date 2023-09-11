const baseURL = "";

function mandarID(id) {
  localStorage.setItem("id", id);
  window.location.href = "../pages/vista.html";
}

function index() {
  localStorage.removeItem("id");
  fetch("http://localhost:8081/api/inicio/seccion/Tendencia")
    .then((response) => response.json())
    .then((tend) => {
      console.log(tend);
      const peliculasContainer = document.getElementById(
        "tendencias-container"
      );
      peliculasContainer.innerHTML = "";

      tend.forEach((pelicula) => {
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
    });

  fetch("http://localhost:8081/api/inicio/seccion/Popular")
    .then((response) => response.json())
    .then((popu) => {
      console.log(popu);
      const peliculasContainer = document.getElementById("popular-container");
      peliculasContainer.innerHTML = "";

      popu.forEach((pelicula) => {
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
    });

  fetch("http://localhost:8081/api/seccion/Top")
    .then((response) => response.json())
    .then((top) => {
      console.log(top);
      const peliculasContainer = document.getElementById("top-container");
      peliculasContainer.innerHTML = "";

      top.forEach((pelicula) => {
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
