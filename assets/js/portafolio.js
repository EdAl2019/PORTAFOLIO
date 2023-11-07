
// Crear un nuevo elemento de imagen
function llenar_galery() {
   
    var galery = $("#list_details_project");
    var url = new URL(window.location.href);

    var project = url.searchParams.get("project");
    var cantidad = url.searchParams.get("cantidad");
    if (project != null && cantidad != null) {
      console.log(project);
      console.log(cantidad);
  
      var contenido_final = "";
      var loadedImages = 0;
  
      for (let i = 1; i <= parseInt(cantidad); i++) {
        var img = new Image();
        img.src = `assets/img/portfolio/${project}-${i}.PNG`;
        img.alt = "";
  
        img.onload = function() {
          loadedImages++;
          if (loadedImages === parseInt(cantidad)) {
            // Todas las imágenes se han cargado
            for (let j = 1; j <= parseInt(cantidad); j++) {
              contenido_final += `<div class="swiper-slide"><img src="assets/img/portfolio/${project}-${j}.PNG" alt=""></div>`;
            }
            galery.html(contenido_final);
            // Inicializa tu carrusel Swiper aquí
          }
        };
      }
    } else {
      console.log("No se ha seleccionado ningún proyecto o cantidad de imágenes.");
    }
    fetch('assets/projects_detail.json')
    .then(response => response.json())
    .then(data => {
      // Accede a los datos dentro del objeto JSON
      const projects = data.projects;
      if (projects && projects.length > 0) {
       
        const primerProyecto = projects[0][project];
        // Resto del código para acceder a los datos
        console.log(primerProyecto);
        $("#category").html(primerProyecto.category)
        $("#client").html(primerProyecto.client)
        $("#project_date").html(primerProyecto.date)
        $("#url").html(primerProyecto.url)
        $("#project_name").html(primerProyecto.titulo)
        $("#project_description").html(primerProyecto.description)
      } else {
        console.log('No se encontraron proyectos en el archivo JSON.');
      }
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });

  }
llenar_galery()  


$(document).ready(function(){
   


})