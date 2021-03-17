let seleccionar = document.querySelector("select");
let parrafo = document.querySelector("p");
let titulo = document.querySelector("h1");

function listamusical() {
  let cancion = "";
  let itemcancion = seleccionar.value;

  if (itemcancion === "" || itemcancion === undefined) {
    cancion = "";
  } else {
    switch (itemcancion) {
      case "yateolvide":
        cancion = "Ya te olvide";
        parrafo.textContent =
          "Ya te olvide Aunque no lo creas te lo juro y te aseguro mujer Ya te olvide Aunque creas que miento y te lo digo por llamar tu atencion Ya te olvide Hoy no siento nada de lo que senti ayer yo por ti Ya te olvide 2.- ahora q ha pasado el tiempo y sin querer te he vuelto a encontrar En mi corazon ya no hay mas sentimientos Como para volverte a amar... 3.- si me miras y querras que me quede Y pretendas que me vuelva a enamorar Tu lugar lo ocupa otra mujer q me quiere Ya te olvide y soy feliz de verdad. Repetir (1, 2, 3.) Vete mujer mujer. Ya te olvide mujer mujer. Vete mujer mujer. Ya te olvide... Ahora q ha pasado el tiempo y sin querer te he vuelto a encontrar En mi corazon ya no hay mas sentimientos Como para volverte a amar... Si me miras y querras que me quede Y pretendas que me vuelva a enamorar Tu lugar lo ocupa otra mujer q me quiere Ya te olvide y soy feliz de verdad. Vete mujer mujer mujer. Ya te olvide mujer mujer. Vete mujer mujer mujer. Ya te olvide...";
        break;

      case "penumbras":
        cancion = "Penumbras";
        break;

      case "volvere":
        cancion = "Volvere";
        break;

      case "tuabandono":
        cancion = "Tu abandono";
        break;

      case "teextraño":
        cancion = "Te extraño";
        break;

      case "tearrepentiras":
        cancion = "Se que te arrepentiras";
        break;

      case "novoyallorar":
        cancion = "No voy a llorar";
        break;

      case "corazondepiedra":
        cancion = "Corazon de piedra";
        break;

      default:
        cancion = "Canciones de Tony Rosado";
        break;
    }
  }

  titulo.textContent = cancion;
}

seleccionar.addEventListener("change", listamusical);
