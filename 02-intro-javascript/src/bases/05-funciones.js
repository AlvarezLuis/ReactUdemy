//funciones en JS

//no recomendada
// function saludar(nombre) {
//     return `hola ${nombre}`;
// };

//asi evitas la assignacion de otros valores a las funciones JS
// saludar = 20;
// const saludar = function(nombre){
//     return `Hola ${nombre}`;
// };

//funcion de flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => "hola mundo!";

console.log(saludar2("goku"));
console.log(saludar3("vegeta"));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'abc123',
        userName : 'locopoco'
    }
};

const user = () => 
    ({
        uid: 'abc123',
        userName : 'locopoco'
    });

//tarea
//1. transformen a una funcion de flecha
//2. retornar un objeto implicito
//3. pruebas


const usuarioActivo = ( nombre ) =>
({
        uid:'ABC567',
        userName: nombre
    });

console.log(usuarioActivo('luis'));
