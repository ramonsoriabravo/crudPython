// CLASES PROPIAS:
// menu-header-home
// menu-header-item
// title-animate

// HEADER INSERTADO
document.getElementById('header').innerHTML = `
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="index.html"><div class="title-animate"><img src="./img/compumundo.png" alt="logo empresa" class="logo animate__animated animate__bounceInRight"></div></a>
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" 
         aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse animate__animated animate__bounceInLeft" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <a class="nav-link active menu-header-home mx-2 px-2 bg-dark rounded opacity-75" href="index.html" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle menu-header-item mx-2 px-2 bg-dark rounded opacity-75" href="#" id="dropdownId" data-bs-toggle="dropdown" 
          aria-haspopup="true" aria-expanded="false">CRUD</a>
          <div class="dropdown-menu bg-primary px-1 " aria-labelledby="dropdownId">
            <a class="dropdown-item fw-bold text-center" href="productos.html">Productos</a>
            <a class="dropdown-item fw-bold text-center" href="#">Usuarios</a>
          </div>
        </li>
      </ul>

      <form class="d-flex my-2 my-lg-0">
        <input class="form-control me-sm-2 type="text" placeholder="Buscar">
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>`

// FOOTER INSERTADO
document.getElementById('footer').innerHTML = `
 <p class="footer-msg">¡Próximamente <span class="span-caps">Redes Sociales!</span></p>

  <nav id="social">
      <a href="#"><i class="fa-brands fa-facebook"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
      <a href="#"><i class="fa-brands fa-youtube"></i></a>
  </nav>

  <section class="footer-info">
      <span class="span-text">Desarrollado para:</span>
      <span class="span-codo">&lt; Codo a Codo 4.0/&gt;</span>
      <span class="span-caps"> FULL STACK PYTHON 2023</span>
  </section>

  <section class="footer-authors">
      <p> Authors:
          <span class="span-author">&lt;Maria Victoria Galano/&gt;</span>
          <span class="span-author">&lt;Gabriel Emiliano Amarilla/&gt;</span>
          <span class="span-author">&lt;Matías Iván Chirivella Alcántara/&gt;</span>
          <span class="span-author">&lt;Ramón Soria Bravo/&gt;</span>
      </p>
  </section>
  <hr>
  <p>© 2023 - Todos los derechos reservados.</p>`


//************************************************************ */
//Muestra el mensaje "Próximamente Redes Sociales" 
// con click en botones de redes sociales del footer

const linkSociales = document.querySelectorAll(".fa-brands");
const mensaje = document.querySelector(".footer-msg");

// console.log("link sociales:", linkSociales);
// console.log("Mensaje:", mensaje);

// Le agrega un click a cada link social
// cuando hagan click agrega la clase visible por determinado tiempo
// Y muestre el mensaje de Próximamente Redes Sociales
linkSociales.forEach(link => {
  link.addEventListener("click", function () {
    mensaje.classList.add("visible");
    setTimeout(function() {
      mensaje.classList.remove("visible");
    }, 2800);
  });
});