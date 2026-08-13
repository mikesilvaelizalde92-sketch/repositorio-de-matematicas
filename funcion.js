const pantalla = document.getElementById("pantalla");

const botones = document.querySelectorAll("[data-valor]");

const limpiar = document.getElementById("limpiar");
const borrar = document.getElementById("borrar");
const igual = document.getElementById("igual");

let numeroActual = "";
let numeroAnterior = "";
let operador = "";

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const valor = boton.dataset.valor;

        if (
            valor === "+" ||
            valor === "-" ||
            valor === "*" ||
            valor === "/"
        ) {
            elegirOperador(valor);
        } else {
            escribirNumero(valor);
        }
    });
});

function escribirNumero(valor) {

    if (valor === "." && numeroActual.includes(".")) {
        return;
    }

    numeroActual += valor;

    pantalla.value = numeroActual;
}

function elegirOperador(op) {

    if (numeroActual === "") {
        return;
    }

    numeroAnterior = numeroActual;
    numeroActual = "";
    operador = op;

    pantalla.value = "";
}

igual.addEventListener("click", function() {

    if (numeroAnterior === "" || numeroActual === "" || operador === "") {
        return;
    }

    const numero1 = Number(numeroAnterior);
    const numero2 = Number(numeroActual);

    let resultado;

    if (operador === "+") {
        resultado = numero1 + numero2;
    }

    if (operador === "-") {
        resultado = numero1 - numero2;
    }

    if (operador === "*") {
        resultado = numero1 * numero2;
    }

    if (operador === "/") {

        if (numero2 === 0) {
            pantalla.value = "Error";
            numeroActual = "";
            numeroAnterior = "";
            operador = "";
            return;
        }

        resultado = numero1 / numero2;
    }

    pantalla.value = resultado;

    numeroActual = String(resultado);
    numeroAnterior = "";
    operador = "";
});

limpiar.addEventListener("click", function() {

    numeroActual = "";
    numeroAnterior = "";
    operador = "";

    pantalla.value = "";
});

borrar.addEventListener("click", function() {

    numeroActual = numeroActual.slice(0, -1);

    pantalla.value = numeroActual;
});