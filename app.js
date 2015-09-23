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


//JavaScript
//Con el fin de hacer que las páginas web interactivas  jQuery, es útil saber algunas cosas acerca de JavaScript.
//JavaScript es un lenguaje de programación el cual  está escrito  jQuery, y sabiendo JavaScript será útil para comprender y 
//escribir el código.
var myName= "Julian";
var status = "";
if(myName.length >= 7){
	status = "Nombre grande";
}else{
	status ="Nombre corto";
}

//Variables
//Variables almacenan datos para que puedan ser utilizados más tarde en el programa.
var counter = 140;


//Creamos tres nuevas variables.
var score1 = 23;
var score2 = 25;
var score3 = 21;

//El operador + se utiliza para sumar los puntajes y el / operador se utiliza para dividir.
var sum = score1 + score2 + score3;
var average = sum / 3;

//El - operador se utiliza para restar
var range = score2 - score3;

//El operador * se usa para multiplicar valores.
The * operator is used to multiply values.


//Strings
//Variables can also store pieces of text, called strings. A string is written by surrounding text with quotes.
//Single quotes (' ') or double quotes (" ") can be used to write a string.
var tweet = "Hiking trip on Saturday";

// String length
//Podemos ver cómo las cadenas largas están utilizando el método .length.
var tweet = "Hiking trip on Saturday";
var tweetLength = tweet.length;

//Comparaciones
//Es posible comparar variables utilizando comparaciones.

> - Mayor que
<- Menos
> = Mayor o igual que
<= Menor o igual a
=== Igual 
! == No es igual a


var score1 = 23;
var score2 = 6;
var counter = 140;
var tweet = "Hiking trip on Saturday";

score1 > score2; // true
tweet.length <= counter; // true
score1 === score2; // false


//Condicionales 
//if

//Podemos utilizar comparaciones para escribir programas que piden sí o no preguntas.
//Digamos que queremos escribir un programa que le pregunta si su nombre es de más de 7 letras. 
//Si la respuesta es sí, podemos responder con "Usted tiene un nombre largo!"
//Podemos hacer esto con una sentencia if.

var myName = "Julian";
var status = "";

if( myName.length >= 7 ) {
    status = "You have a long name!";
}


// if...else
//Podemos utilizar una sentencia if para hacer algo si la respuesta a una condición es sí, o verdadero.
//Podemos usar un if ... else para hacer algo si la respuesta es no, o falsa.
//Por ejemplo, si su nombre es más corto de 7 cartas, podemos responder con "Usted tiene un nombre corto!" 
//Podemos hacer esto usando un if ... else.


var myName = "Jordan";
var status = "";

if( myName.length >= 7 ) {
    status = "You have a long name!";
}
else {
    status = "You have a short name!";
}


//if...else
//Podemos extender el else if ... a hacer más de sí o no preguntas utilizando else if.

var myName = "Michaelangelo";
var status;

if( myName.length >= 15 ) {
    status = "You have a very long name!";
}
else if( myName.length >= 7 ) {
    status = "You have a long name!";
}
else {
    status = "You have a short name!";
}

//Functions
//Funciones contienen código que puede ser utilizado una y otra vez en un programa. Una función se compone de tres partes:

nombre de la función
Parámetros
cuerpo


//El nombre de esta función es el percentage.
var percentage = function(num, denom) {
  //La función toma dos parámetros como entradas, num y denom.
  //Los parámetros son variables que almacenan los datos proporcionados a la función.
    var result = (num / denom) * 100;
    //El cuerpo de la función contiene el bloque de código reutilizable.
    return result;
};
//Una función se ejecuta llamando a su nombre y dándole valores de entrada.
var p1 = percentage(23, 30);
// ejecutará la función de porcentaje, con 23 y 30 sustituido por num y denom
//El resultado se almacena en el p1 variable.








///JavaScript and jQuery
//Events
//Eventos
//Interacciones de usuarios con una página web se denominan eventos.
//Por ejemplo, al hacer clic en el  un botón, el navegador anuncia que ha ocurrido un evento de clic.


//Event Handlers
//Podemos escribir una función que especifica qué hacer cuando se produce un evento. 
//Esta función se llama un controlador de eventos."event handler"


var main = function() {
  $(".like-button").click(function() {
    $(this).toggleClass("active");
  });
};

$(document).ready(main);


//Cuando un usuario hace clic en el elemento .like-botón, el controlador de eventos cambia la clase "activo". 
//Esto alterna el botón entre la vista gris normal y la vista azul seleccionado.

//.click()

//Un evento de usuario común es el evento click. Un evento click se produce cuando un usuario hace clic en un elemento HTML.
//El método .click () concede un controlador de eventos a un elemento HTML para que pueda responder a un evento click.

//$ ('. li social ") selecciona cada botón de acción en la parte superior de la página web.
$('.social li').click(function() {
  $(this).toggleClass('active');
});


//El método .click () concede un controlador de eventos para cada botón.
$('.social li').click(function() {
  $(this).toggleClass('active');
});

//El controlador de eventos que añadir .active clase CSS, que cambia color de fondo del botón a rojo.
$(this).toggleClass('active');


//Utilizamos $ (this) para referirse al elemento HTML que se ha hecho clic en. 
//Ahora podemos operar con este elemento usando .toggleClass ().
