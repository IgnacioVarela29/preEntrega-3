let botonAgregar = document.querySelector('#boton');
botonAgregar.addEventListener('click', agregarBilletera);

//Defino la key para las billeteras que agregue el usuario, luego
const keyDeBilleteras = localStorage.getItem('billeteras')
let billeterasParaStorage = JSON.parse(keyDeBilleteras) || []; 

const billeterasDelUsuario = document.getElementById('listaDeBilleteras');

//constructor de billeteras
function Billeteras(nombreDeBilletera, tipoDeMoneda, saldo) {
    this.nombreDeBilletera = nombreDeBilletera;
    this.tipoDeMoneda = tipoDeMoneda;
    this.saldo = saldo;
};

//defino funcion para añadir billetera, tanto a la lista, como al storage
function agregarBilletera() {
    let nombreIngresado = document.getElementById('nombreDeWallet').value;
    let monedaIngresada = document.getElementById('moneda').value.toUpperCase();
    let saldoIngresado = document.getElementById('saldo').value;
    let nuevaBilletera = new Billeteras(nombreIngresado, monedaIngresada, saldoIngresado);

    billeterasParaStorage.push(nuevaBilletera);

    localStorage.setItem('billeteras', JSON.stringify(billeterasParaStorage));

    imprimirBilleteras(nuevaBilletera);

    limpiarInputs();
};

//funcion para eliminar billetera del storage
function eliminarBilleteraStorage(nombre) {

    billeterasParaStorage = billeterasParaStorage.filter(billetera => billetera.nombreDeBilletera !== nombre);

    localStorage.setItem('billeteras', JSON.stringify(billeterasParaStorage));
};

//funcion que limpia ingresos en input
function limpiarInputs() {
    document.getElementById('nombreDeWallet').value = '';
    document.getElementById('moneda').value = '';
    document.getElementById('saldo').value = '';
};

//imprime billeteras añadidas y un boton para eliminar cada una
function imprimirBilleteras(billetera) {

    const itemBilletera = document.createElement('li');
    itemBilletera.innerHTML = `
    <div>${billetera.nombreDeBilletera} | </div>
    <div>${billetera.tipoDeMoneda} | </div>
    <div>${billetera.saldo} | </div>
    <div><input type="number" id="modificar-saldo" value="${billetera.saldo}"></div>`;

    const botonEliminar = document.createElement('button');
    botonEliminar.innerText = "Eliminar";
    botonEliminar.classList.add('botonEliminar');
    itemBilletera.appendChild(botonEliminar);

    botonEliminar.onclick = () => {
        itemBilletera.remove();
        eliminarBilleteraStorage(billetera.nombreDeBilletera);
    };

    billeterasDelUsuario.appendChild(itemBilletera);
};

//cuando carga la página, imprime las billeteras guardadas en el storage
document.addEventListener('DOMContentLoaded', () => {
    billeterasParaStorage.forEach(billetera => {
        imprimirBilleteras(billetera);
    });
});