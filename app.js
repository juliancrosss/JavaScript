// El código comienza con una función JavaScript llamada main ().
//Una función es un conjunto de instrucciones que le dice a la computadora para hacer algo.
var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });
}
//El código a continuación, utiliza jQuery para ejecutar la función main ()
//una vez que la página web se ha cargado completamente.
$(document).ready(main);


//La función main () se compone de tres partes.
//En primer lugar, el código selecciona el <a class="dropdown-toggle"> .. </a> elemento html.
//jQuery utiliza selectores para apuntar elementos HTML. selectores de jQuery se basan en selectores CSS.
$('.dropdown-toggle')



//A continuación, el código comprueba si este elemento HTML
//se ha hecho click. Si se ha hecho click, la línea de código dentro de las llaves se ejecutará.
.click(function() {});


//Si se hace clic, en el menú desplegable alternará entre mostrar y ocultar, denominado conmutación
$('.dropdown-menu').toggle();


//Los $ (document) .ready () espera a que el documento HTML para cargar completamente antes de ejecutar la función main ().
//Esto es importante porque JavaScript sólo debe ejecutar después de la página web se ha cargado completamente en el navegador 
//de lo contrario no habría ningún elemento HTML para añadir interactividad a.
$(document).ready()



//Resumen 
//JavaScript es un lenguaje de programación utilizado para añadir interactividad a una página web.
//jQuery simplifica la sintaxis de JavaScript y hace que sea más fácil para crear páginas web interactivas
//que funcionan a través de múltiples navegadores.

//jQuery nos permite hacer tres cosas principales en una página web:

Eventos."Events" Responda a las interacciones del usuario.
Manipulación del DOM "DOM Manipulation". Modificar elementos HTML de la página.
Efectos "Effects". Añadir animaciones.

