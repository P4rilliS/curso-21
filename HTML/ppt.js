let puntosJugador = 0;
let puntosComputadora = 0;
const opciones = ["Piedra", "Papel", "Tijera"];

function jugar(eleccionJugador) {
    const playerName = document.getElementById("playerName").value || "Jugador 1";
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    let resultado = "";
    
    // Lógica del juego
    if (eleccionJugador === eleccionComputadora) {
        resultado = "¡Empate!";
    } else if (
        (eleccionJugador === "Piedra" && eleccionComputadora === "Tijera") ||
        (eleccionJugador === "Papel" && eleccionComputadora === "Piedra") ||
        (eleccionJugador === "Tijera" && eleccionComputadora === "Papel")
    ) {
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
        <h2>${resultado}</h2>
    `;

    // Actualizar el puntaje
    document.getElementById("puntaje").innerHTML = `
        <p>${playerName}: ${puntosJugador} - Computadora: ${puntosComputadora}</p>
    `;

    // Verificar si alguien gana el juego
    if (puntosJugador === 5) {
        alert(`🎉 ¡${playerName} ha ganado el juego!`);
        resetGame();
    } else if (puntosComputadora === 5) {
        alert("💀 ¡La computadora ha ganado el juego!");
        resetGame();
    }
}

// Reiniciar el juego
function resetGame() {
    puntosJugador = 0;
    puntosComputadora = 0;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("puntaje").innerHTML = "";
}
