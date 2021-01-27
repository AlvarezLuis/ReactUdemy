
const personajes = ['goku', 'vegeta', 'trunk'];

const [ , , p3 ] = personajes;

console.log(p3);


const retornaArreglo = () =>{
    return ['abc', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);


//tarea
//1. el primer valor del arreglo se llamara nombre
//2. se llamara setNombre
const userState = (valor) => {
 return [valor, ()=>{console.log('hola mundo')}]
};

const [nombre,setNombre] = userState('goku');

console.log(nombre);
setNombre();