function saludo(nombre) {
    var parrafo = document.getElementById('frase');
    var h3 = document.getElementById('identidad');
    var oracionMotivacional = 'Superaste el ejercicio 1 🤜🤛';
    var cont2 = document.getElementsByClassName('contenido2');
    cont2[0].style.display = 'grid';
    
    h3.innerText = nombre;
    parrafo.innerText = oracionMotivacional;
}


window.onload = function () {
    nombre = prompt('Porfavor ingresa tu nombre');
    return saludo(nombre);
}