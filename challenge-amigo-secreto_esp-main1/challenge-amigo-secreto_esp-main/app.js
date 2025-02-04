// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
class AmigoSecreto {
    constructor() {
        this.nombres = [];
        this.participantesDisponibles = [];
    }

    agregarNombre(nombre) {
        if (nombre.trim() === "" || this.nombres.includes(nombre)) {
            alert("Nombre inválido o ya registrado.");
            return;
        }
        this.nombres.push(nombre);
        this.participantesDisponibles.push(nombre);
        this.actualizarLista();
    }

    actualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        this.nombres.forEach(nombre => {
            let li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
        });
    }

    sortearParticipante() {
        if (this.participantesDisponibles.length === 0) {
            alert("Todos los participantes han sido sorteados.");
            return;
        }
        let indiceAleatorio = Math.floor(Math.random() * this.participantesDisponibles.length);
        let seleccionado = this.participantesDisponibles.splice(indiceAleatorio, 1)[0];
        
        let resultadoLista = document.getElementById("resultado");
        let li = document.createElement("li");
        li.textContent = `🎉 ${seleccionado} 🎉`;
        resultadoLista.appendChild(li);
    }
}

let juego = new AmigoSecreto();

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    juego.agregarNombre(nombre);
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    juego.sortearParticipante();
}
