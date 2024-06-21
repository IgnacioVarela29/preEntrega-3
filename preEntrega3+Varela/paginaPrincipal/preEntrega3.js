const seleccioneSuOpcion = document.getElementById('barraDeOpciones');
const ul = document.createElement('ul');
seleccioneSuOpcion.appendChild(ul);

const links = ["Billeteras", "GestorDeGastos"];

for(const link of links){
    const li = document.createElement('li');
    if(link == "Billeteras"){
    li.innerHTML = `<a href="../billeteras/${link}.html" > ${link} </a>`
    ul.appendChild(li);} else {
        li.innerHTML = `<a href="../gestorDeGastos/${link}.html" > ${link} </a>`
    ul.appendChild(li);
    }
}

