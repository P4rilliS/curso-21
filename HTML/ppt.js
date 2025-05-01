// declaracion de variables para puntajes de cada jugador y de las opciones que hay que sacar
let puntosJugador = 0;
let puntosComputadora = 0;
const opciones = ["Piedra", "Papel", "Tijera"];

// Función para iniciar el juego
function jugar(eleccionJugador) {
  const playerName = document.getElementById("playerName").value || "Jugador 1";
  
  // Se elige una opción aleatoria para la computadora
  const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];
  
  let resultado = "";
  
  // Lógica del juego
  // Si el jugador no elige una opción válida, se muestra un mensaje de error
  if (eleccionJugador === eleccionComputadora) {
    resultado = "¡Empate!";
    // No se suman puntos
    
    //si el jugador presiona una opcion valida, se le sumara un punto al ganador
  } else if (
    (eleccionJugador === "Piedra" && eleccionComputadora === "Tijera") ||
    (eleccionJugador === "Papel" && eleccionComputadora === "Piedra") ||
    (eleccionJugador === "Tijera" && eleccionComputadora === "Papel")){
      resultado = `🎉 ${playerName} gana esta ronda!`;
      puntosJugador++;
  } else {
    resultado = "💀 La computadora gana esta ronda!";
    puntosComputadora++;
    }

  // Mostrar el resultado
  document.getElementById("resultado").innerHTML = `
    <p>${playerName} eligió: <strong>${eleccionJugador}</strong></p>
    <p>Computadora eligió: <strong>${eleccionComputadora}</strong></p>
    <h2>${resultado}</h2>`;

  // Actualizar el puntaje
  document.getElementById("puntaje").innerHTML = `
    <p>${playerName}: ${puntosJugador} - Computadora: ${puntosComputadora}</p>`;

  // Verificar si alguien gana el juego
  if (puntosJugador === 5) {
      mostrarAnimacionGanador(); // Mostrar animación de ganador
      resetGame();
    } else if (puntosComputadora === 5) {
      mostrarAnimacionComputadora(); // Mostrar animación de ganador
      resetGame();
    }
}

// Reiniciar el juego
function resetGame() {
    // Reiniciar los puntajes y el resultado
    document.getElementById("playerName").value = "";
    puntosJugador = 0;
    puntosComputadora = 0;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("puntaje").innerHTML = "";
}
function mostrarAnimacionGanador() {
  const playerName = document.getElementById("playerName").value || "Jugador 1";
  const animacion = document.getElementById("animacionGanador1");
  animacion.innerHTML = `<h2>${playerName} ha ganado el juego! 🎉</h2>`;
  animacion.style.display = "block"; // Mostrar animación

  setTimeout(() => {
      animacion.style.display = "none"; // Ocultar después de 3s
  }, 5000); // Tiempo visible (5s)
}

// Llamamos esta función cuando el jugador gana
// if (puntosJugador === 5) {
// }

function mostrarAnimacionComputadora() {
  
  const animacion = document.getElementById("animacionComputadora");
  animacion.style.display = "block"; // Mostrar animación

  setTimeout(() => {
      animacion.style.display = "none"; // Ocultar después de 3s
  }, 5000); // Tiempo visible (5s)
}