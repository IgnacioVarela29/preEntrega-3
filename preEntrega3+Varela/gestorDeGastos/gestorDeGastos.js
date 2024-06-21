alert("Bienvenido al gestor de gastos de VM.com")
let saldoInicial = parseInt(prompt("Vamos a comenzar.\n\ Ingrese su saldo actual:"));

while (saldoInicial === '' || saldoInicial <= 0 || isNaN(saldoInicial)) {

    saldoInicial = prompt('El valor ingresado no es un formato válido, por favor ingrese un número:');

}

console.log("Su saldo inicial es de: $" + saldoInicial);

let tipoDeOperacion;
let subTotal = saldoInicial;
const VOLVER_AL_MENU = 3;
let cantidadDeMovimientos = 0;

do {
    tipoDeOperacion = prompt("Que movimiento quiere realizar?\n\ Ingrese:\n\ 1. Ingreso de dinero.\n\ 2. Gasto.\n\ 3. Mostrar resumen parcial.\n\ 4.Cancelar.");

    while (tipoDeOperacion === '' || tipoDeOperacion <= 0 || tipoDeOperacion > 4 || isNaN(tipoDeOperacion)) {

        tipoDeOperacion = prompt('El valor ingresado no es válido, por favor ingrese un número de las opciones:\n\ 1 - 2 - 3 - 4');

    }

    if (tipoDeOperacion == 1) {

        let ingreso = prompt("Ingrese una suma de dinero:");

        while (ingreso === '' || ingreso <= 0 || isNaN(ingreso)) {
            ingreso = prompt('El valor ingresado no es válido, por favor ingrese un saldo positivo:');
        }
        subTotal = parseFloat(saldoInicial) + parseFloat(ingreso);

        console.log("Movimiento: +$" + ingreso);

        console.log("Actualmente tiene: $" + subTotal);

        saldoInicial = subTotal;

        cantidadDeMovimientos++;

        tipoDeOperacion + VOLVER_AL_MENU;
    } else if (tipoDeOperacion == 2) {
        let gasto = prompt("Ingrese cuanto dinero gasto:");
        while (gasto > saldoInicial) {
            gasto = prompt("Usted no tiene tanto dinero para gastar. Ingrese un número dentro de sus posibilidades:");
        }

        while (gasto === '' || gasto <= 0 || isNaN(gasto)) {
            gasto = prompt('El valor ingresado no es válido, por favor ingrese un saldo positivo:');
        }
        
        subTotal = parseFloat(saldoInicial) - parseFloat(gasto);

        
        console.log("Movimiento: -$" + gasto);
        
        console.log("Actualmente tiene: $" + subTotal);
        
        saldoInicial = subTotal;
        
        cantidadDeMovimientos++;
    
        tipoDeOperacion + VOLVER_AL_MENU;

    } else if (tipoDeOperacion == 3) {
        alert("RESUMEN PARCIAL:\n\ Se realizaron: " + cantidadDeMovimientos + " movimientos.\n\ Usted tiene: $" + saldoInicial + " actualmente.");
        console.log("RESUMEN PARCIAL:\n\ Se realizaron: " + cantidadDeMovimientos + " movimientos.\n\ Usted tiene: $" + saldoInicial + " actualmente.");

    } else if (tipoDeOperacion == 4) {

        console.log("RESUMEN FINAL:\n\ Se realizaron: " + cantidadDeMovimientos + " movimientos.\n\ Usted tiene: $" + saldoInicial + " al finalizar.")
        alert("Fin de la operacion.");
        console.log("Fin de la operacion.");
    }

} while (tipoDeOperacion == 1 || tipoDeOperacion == 2 || tipoDeOperacion == 3);

const textoH4 = document.createElement('h4');
const cuerpo = document.getElementById('cuerpo');
cuerpo.appendChild(textoH4);
textoH4.innerText = ("Usted tiene $" + saldoInicial + " luego de realizar " + cantidadDeMovimientos + " moviminetos.");