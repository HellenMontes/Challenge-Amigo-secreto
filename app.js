// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// array para  los nombres
let amigos = [];

// agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // campo vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.'); // alerta 
        return;
    }

    amigos.push(nombre);

    // actualizar lista
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    listaAmigos.appendChild(nuevoAmigo);

    // campo de entrada
    input.value = '';
}

// sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.'); // alerta si no hay amigos
        return;
    }

    // aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // nombre sorteado
    const amigoSecreto = amigos[indiceAleatorio];

    // resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}