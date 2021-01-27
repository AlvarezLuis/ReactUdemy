const persona = {
    nombre : 'luis',
    apellido : 'alvarez',
    edad : 30,
    direccion : {
        ciudad : 'new york',
        zip : 123123,
        lat : 3.1234567,
        lng : 1.1234567
    }
};

//visualiar en modo de tabla el objeto en la consola
//consol.table(persona);  

const persona2 = {...persona};
persona2.nombre = 'peter';


console.log(persona);
console.log(persona2);