
var opcionUsuario;
var partidasJugadas = 0;
var numAleatorio;
var opcionBot;
var resultado;
var puntosUsuario = 0;
var puntosBot = 0;
var opciones = ["piedra", "papel", "tijera"];

function obtenerResultado() {
    numAleatorio = Math.floor(Math.random() * 3);
    opcionBot = opciones[numAleatorio];

    if (opcionUsuario === "piedra") {
        switch (opcionBot) {
            case "piedra":
                resultado = "Empate";
                break;
            case "papel":
                resultado = "Punto para el bot";
                break;
            case "tijera":
                resultado = "Punto para el usuario";
                break;
        }
    } else if (opcionUsuario === "papel") {
        switch (opcionBot) {
            case "piedra":
                resultado = "Punto para el usuario";
                break;
            case "papel":
                resultado = "Empate";
                break;
            case "tijera":
                resultado = "Punto para el bot";
                break;
        }
    } else if (opcionUsuario === "tijera") {
        switch (opcionBot) {
            case "piedra":
                resultado = "Punto para el bot";
                break;
            case "papel":
                resultado = "Punto para el usuario";
                break;
            case "tijera":
                resultado = "Empate";
                break;
        }
    }

    alert("la opcion del usuario es: " + opcionUsuario + ". Y la eleccion del bot es: " + opcionBot);

    if (resultado === "Empate") {
        alert("La partida terminó en empate, se repite");
    } else {

        alert("Ganador de la ronda: " + resultado);
    }

    if (resultado === "Punto para el usuario") {
        puntosUsuario++;
        partidasJugadas++;
    }

    if (resultado === "Punto para el bot") {
        puntosBot++;
        partidasJugadas++;
    }
    alert("El total de partidas hasta ahora son:" + partidasJugadas);
    if (puntosUsuario > puntosBot) {
        alert("El usuario ganó con " + puntosUsuario + " Y los puntos del bot fueron:  " + puntosBot);
    } else if (puntosBot > puntosUsuario) {
        alert("El Bot ganó la partida con " + puntosBot + " Y " + puntosUsuario + " puntos del usuario");
    }

    var seccionResultados = document.getElementById("resultados");
    console.log("RESULTADOS", seccionResultados);
}



