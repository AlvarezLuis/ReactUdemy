
//desestructuración
//asignación desestructurante
const persona = {
    nombre: 'luis',
    edad: 18,
    clave: 'ironman',
    rango: 'soldado'
};

//extrayendo propiedades del objeto
//para asignar a una variable const {nombre:elnombre} = persona;
//const {edad, nombre, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

//desestructuracion directa en el argumento
// const retornaPersona = ({nombre, edad, rango = 'capitan'}) => {
//     console.log(nombre, edad, rango);
// };

// retornaPersona(persona);

const userContext = ({clave, nombre, edad, rango = 'capitan'}) => {
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 12.12112,
            lng: -32.1231231
        }
    }
};

const {nombreClave, anios, latlng:{lat, lng}} = userContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);