const baseURL = 'http://localhost:8081'
function extraerSeries(){
    console.log('si jala');
    fetch(baseURL+'/api/series')
    .then(response => response.json())
    .then(series =>{
        console.log('Datos de series extraídos correctamente:', series);

        // Obtén una referencia al contenedor del carrusel
        const seriesDrop = document.getElementById('seriesCont');

        // Variable para almacenar el HTML generado dinámicamente
        let dynamicHTML = '';


        series.forEach(serie => {
            dynamicHTML += `
                <div class="item">
                    <div class="box">
                        <div class="imgBox">
                            <img src="${serie.imagen}" alt="">
                         
                        </div>

                      
                        <div class="text">
                            <h3>${serie.nombre} </h3>
                            <div class="time flex">
                                <span>${serie.tipo}</span>
                               
                                <a>${serie.genero}</a>
                                <a class="ver-detalles" href="/peliculasuno.html" id=${serie.id}>detalles</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        // Inserta el HTML generado dinámicamente en el marcador
        seriesDrop.insertAdjacentHTML('beforeend', dynamicHTML);
       
    })
    .catch(error => {
        console.error("Error al obtener datos : ",error);
    });
}

function renderizarCard (data){ 
    console.log('render segun');

}

function render(){
    fetch(baseURL+'/api/series')
    .then(response => response.json())
    .then(data =>{
      const serieContenedor = document.getElementById('seriesCont');
      serieContenedor.innerHTML = '';
      data.forEach(serie => `
      <div class="card">
      <div class="card-header">
        <img class="img" src="${serie.imagen}" alt="${serie.titulo}">
      </div>
      <div class="card-body">
        <p class="titulo">
        ${serie.titulo}
        </p>
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
        `
      )
    })
    .catch(error => {
        console.error("Error al obtener datos : ",error);
    });
}



document.addEventListener("DOMContentLoaded", function() {
    // Llama a la API local para obtener los datos de las series
    fetch(baseURL+'/api/series')
        .then(response => response.json())
        .then(series => {
            // Procesa los datos de las series aquí
            console.log('Datos de series extraídos correctamente:', series);

            // Obtén una referencia al contenedor del carrusel
            const seriesDrop = document.getElementById('seriesCont');

            // Variable para almacenar el HTML generado dinámicamente
            let dynamicHTML = '';


            series.forEach(serie => {
                dynamicHTML += `
                    <div class="item">
                        <div class="box">
                            <div class="imgBox">
                                <img src="${serie.imagen}" alt="">
                             
                            </div>

                          
                            <div class="text">
                                <h3>${serie.nombre} </h3>
                                <div class="time flex">
                                    <span>${serie.tipo}</span>
                                   
                                    <a>${serie.genero}</a>
                                    <a class="ver-detalles" href="/peliculasuno.html" id=${serie.id}>detalles</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });

            // Inserta el HTML generado dinámicamente en el marcador
            seriesDrop.insertAdjacentHTML('beforeend', dynamicHTML);

        })
        .catch(error => {
            console.error('Error al obtener datos de series:', error);
        });
});