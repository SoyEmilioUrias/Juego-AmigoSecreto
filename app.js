let listaNombresSorteados = []; // Array para guardar todos los nombres ingresados

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function agregarAmigo() {
    let nombreUsuario = document.getElementById("amigo");
    let nombre = nombreUsuario.value.trim();

    if (nombre === "") {
        alert('No puedes dejar vacío el nombre. Por favor, inserta un nombre.');
        return;
    }
    
    listaNombresSorteados.push(nombre); // Agregar al array
    mostrarNombres(); // Mostrar en la lista
    nombreUsuario.value = ""; // Limpiar el input

    console.log(listaNombresSorteados);
}

function mostrarNombres() {
    let lista = document.getElementById("listaAmigos"); // Obtener la lista
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    listaNombresSorteados.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("name-item"); // Añadir clase para estilos
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaNombresSorteados.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    
    let nombreGanador = listaNombresSorteados[Math.floor(Math.random() * listaNombresSorteados.length)];
    let sorteoDiv = document.getElementById("sorteo");
    sorteoDiv.innerHTML = `<p class='winner-text'>🎉 El jugador ganador es <strong>${nombreGanador}</strong> 🎉</p>`;
    sorteoDiv.classList.add("winner-box"); // Añadir clase para estilos visuales
}

function reiniciarJuego() {
    listaNombresSorteados = []; // Vaciar el array
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista visual
    let sorteoDiv = document.getElementById("sorteo");
    sorteoDiv.innerHTML = ""; // Limpiar el resultado del sorteo
    sorteoDiv.classList.remove("winner-box"); // Remover clase de estilos
}