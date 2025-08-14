// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const campoAmigo = document.getElementById('amigo');
    const nombreAmigo = campoAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    campoAmigo.value = '';

    // Actualizar la lista visual
    actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';
    
    // Iterar sobre el arreglo y crear elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}