import React from 'react';

 function NavBar (){

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
      <div class="collapse navbar-collapse  text-center " id="navbarNav">
    <ul class="navbar-nav  text-center">
      <li class="nav-item active ">
        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Empresa</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="#">Catálogo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Contacto</a>
      </li>
    </ul>
  </div>
 
        </nav>
      );
    }
    export default NavBar
   
