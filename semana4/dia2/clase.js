let seleccionar = document.querySelector("select");
let parrafo = document.querySelector("p");

function clima() {
  let mensaje = "";
  let clima = seleccionar.value;

  if (clima === "" || clima === undefined) {
    mensaje = "";
  } else {
    switch (clima) {
      case "Soleado":
        mensaje = "el clima esta soleado";
        break;

      case "Nublado":
        mensaje = "el clima esta nublado";
        break;

      case "Lluvioso":
        mensaje = "el clima esta lluvioso";
        break;

      case "Nevado":
        mensaje = "el clima esta nevado";
        break;

      default:
        mensaje = "el clima esta normal";
        break;
    }
  }
  parrafo.textContent = mensaje;
}

seleccionar.addEventListener("change", clima);
